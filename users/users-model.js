const db = require('../database/dbConfig')

module.exports={
    find,
    add,
    findBy,
    getUsersAilments,
    addAilment,
    deleteUsersAilment,
    updateUsersAilment,
    deleteUser,
    updateUser,
    findUserId
}

function find(){
    return db('users')
}

function add(user){
    return db('users').insert(user, 'id')
    // .then(ids =>{
    //     return findBy(ids[0])
    // })
}

function findUserId(id){
    return db('users').where({id})
}

function findBy(filter){
    //console.log(id)
    return db('users').where(filter)
}

function getUsersAilments(user_id){
    return db('ailments')
        .select( 'users.username as Username', 'ailments.ailment_name as User\'s Ailment', 'ailments.description as Ailment Description','ailments.id')
        .join('users',  'ailments.user_id','users.id',)
        .orderBy('ailments.id')
        .where({user_id})
}

function addAilment (user_id){
    return db('ailments')
        .insert(user_id, 'id')
        .then(ids =>{
            return getUsersAilments(ids[0])
        })
}

function deleteUsersAilment(id){
    return db('ailments')
            .where('id', id)
            .del()
}

function deleteUser(id){
    return db('users')
    .where('id', id)
    .del()
}

function updateUsersAilment(changes, id){
        return db('ailments')
                .where({id}).update(changes)
}

function updateUser(changes, id){
    return db('users')
    .where({id}).update(changes)
}