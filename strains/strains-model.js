const db = require('../database/dbConfig')

module.exports = {
    getStrains,
    getStrainsById,
    addStrain,
    deleteStrain
}

function getStrains(){
    return db('strains')
    .join('recommendations', 'strains.id', 'recommendations.strain_id')
    .join('ailments', 'ailments.id', 'recommendations.ailment_id')
    .join('users', 'users.id', 'recommendations.user_id')
    .select('strains.name as Strain Name', 'ailments.name as Recommended For:', 'strains.type', 'strains.description','strains.flavor', 'strains.rating' )
    
    .orderBy('strains.name')
    
}

function getStrainsById(id){
    return db('strains')
    .where({id})
    
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