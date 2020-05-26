const db = require('../database/dbConfig')

module.exports = {
    getStrains,
    getStrainsById,
    addStrain,
    deleteStrain
}

function getStrains(){
    return db('strains')
}

function getStrainsById(id){
    return db('strains').where({id})
    
}

function addStrain(newStrain){
    return db('strains').insert(newStrain, 'id')
    .then(ids =>{
        return getStrainsById(ids[0])
    })
}

function deleteStrain(id){
    return db('strains')
    .where('id', id)
    .del()

}