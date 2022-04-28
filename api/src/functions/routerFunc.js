const {Type} = require('../db');

function getDatos(response){
    return {
        name:       response.data.name,
        img:        response.data.sprites.versions['generation-v']["black-white"].animated.front_default,
        types:      response.data.types.map(e => e.type.name),
        id:         response.data.id,
        hp:         response.data.stats[0].base_stat,
        strength:   response.data.stats[1].base_stat,
        defense:    response.data.stats[2].base_stat,
        speed:      response.data.stats[5].base_stat,
        height:     response.data.height,
        weight:     response.data.weight
    }
}

async function getID(dato){
    let arr = [];
    for(let i=0;i<dato.length;i++){
        arr.push(await Type.findOne({
            where: {name: dato[i]},
            attributes: ["id"]
        }))
    }
    return arr;
}

async function getNamestypes(poke){
    poke = poke.types.map(e => e.dataValues.name);
    return poke;
}

module.exports = {getDatos, getID, getNamestypes}



