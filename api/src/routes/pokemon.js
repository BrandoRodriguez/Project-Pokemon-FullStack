const { Router } = require("express");
const { Pokemon, Type } = require('../db.js');
const axios = require('axios');
const { getDatos } = require('../functions/routerFunc');
const router = Router();

router.get("/", async (req,res) => {

    const {name} = req.query;
    
    if (name){  //Tiene Query

        try{
            //Buscando en la base de datos el pokemon por name, si encuentra retorna el pokemon
            let db_pokemon_found = await Pokemon.findOne({where: {name}, include: Type})

            let db_pokemon_data = {...db_pokemon_found.dataValues, types: getNamestypes(db_pokemon_found)}


            return res.send(db_pokemon_data);
        }catch{
            //Buscando en la PokeApi el pokemon por name, si encuentra, extrae la data y lo devuelve.
            try{
                let api_pokemon_found = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                let api_pokemon_data = getDatos(api_pokemon_found);
                return res.send(api_pokemon_data)
            }
            catch{
                res.sendStatus(404);
            }
        }
        
    } else {  // No Tiene Query

        // :::::::: [  Capturar los pokemones de la base de datos  ] ::::::::::
    
        let db_pokemonsObj = await Pokemon.findAll({
            include: Type
        });
    
        db_pokemonsObj = db_pokemonsObj.map( pokemonObj => {
            return {...pokemonObj.dataValues, 
                    types: pokemonObj.dataValues.types.map( type => type.dataValues.name)
            }
        })

        // :::::::: [  Capturar los pokemones de la Pokeapi  ] ::::::::::
    
        let firstRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        // firstRequest.data.next = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    
        let secondRequest = await axios.get(`${firstRequest.data.next}`);
    
        //Juntar los 40 pokemons
        let pokemons_name_url = [...firstRequest.data.results, ...secondRequest.data.results];
    
        //Devolver las 40 promises
        let pokemons_promises = pokemons_name_url.map(e => axios.get(e.url));
    
        //Iniciando todas las promesas guardadas en pokemons al mismo tiempo
        let allResponses = await Promise.all(pokemons_promises)
    
        //Aqui se almacenaran los pokemons de la api
        let api_pokemonsObj = allResponses.map(response => getDatos(response));

        let all_pokemons = [...db_pokemonsObj, ...api_pokemonsObj];

        console.log(typeof all_pokemons);

        return res.send(all_pokemons);
    }
})

router.get("/:id", async (req,res) => { // Peticion de pokemon por id
    
    const {id} = req.params

    try{
        //Buscando en la base de datos el pokemon por ID, si encuentra, lo devuelve
        let pokemon_found = await Pokemon.findOne({where: {id}, include: Type});
        pokemon_data = {...pokemon_found.dataValues, types: getNamestypes(pokemon_found)}

        return res.send(pokemon_data);
    }
    catch{
        try{
            //Buscando en la PokeApi el pokemon por ID, si encuentra, extrae la data y lo devuelve.
            let pokemon_found = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokemon_data = getDatos(pokemon_found);
            return res.send(pokemon_data);
        }
        catch{
            return res.status(404).send('ID not found')
        }
    }
})

router.post("/", async (req,res) => { // Publicar un pokemon

    const {name,img,hp,attack,defense,speed,height,weight,type} = req.body;

    if(!req.body.name || name.length === 0 ) 
    return res.status(422).json({message: "El nombre del pokemon no puede estar vacío"}) 
    
    //Buscar en la api si es que ya hay un pokemon con ese nombre, si lo hay, devuelve un error
    try{
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return res.json({errors: [{message: "name must be unique"}]});

    } catch{}

    // Crear un pokemon con lo datos pasados 
    try{
        const newPokemon = await Pokemon.create({
            name,
            img,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        })

        await newPokemon.setTypes(type) 

        console.log('guardando con exito');
        return res.json(newPokemon);

    } catch(e){
        console.log(e)
        res.send(e);
    }
})

module.exports = router;