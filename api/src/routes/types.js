const axios  = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");

const router = Router();

router.get('/',async (req,res) => {

    let types_found;
    
    try{
        types_found = await Type.findAll()

        if (types_found.length === 0){

            response = await axios.get("https://pokeapi.co/api/v2/type/");
            response = response.data.results

            let promises = [];

            for (let i = 0 ; i< response.length ; i++){   
                promises.push(Type.create({name: response[i].name}))
            }
            
            try{
                types_found = await Promise.all(promises);
            } catch(e){
                console.log(e)
            }

        };

    } catch(e){
        console.log(e)
    }

    res.send(types_found)

})

module.exports = router;