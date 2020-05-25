
exports.up = function(knex) {
   return knex.schema
    .createTable('users', tbl =>{
        tbl.increments()
        tbl.string('username', 128)
            .notNullable()
            .unique()
        tbl.string('password', 269)
            .notNullable()
        tbl.string('bio', 255)
        tbl.specificType('ailment_id', 'integer ARRAY')
            
    })
    .createTable('ailments', tbl =>{
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description', 255).notNullable()
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('strains', tbl =>{
        tbl.increments()
        tbl.string('name').notNullable().unique()
        tbl.string('type').notNullable()
        tbl.string('description', 255).notNullable()
        tbl.string('qualities', 128)
        tbl.integer('rating')
        tbl.string('flavor', 128)
    })
    
    .createTable('recommendations', tbl =>{
        tbl.increments()
        tbl.integer('strain_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('strains')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('ailment_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ailments')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recommendatoins')
  .dropTableIfExists('strains')
  .dropTableIfExists('ailments')
  .dropTableIfExists('users')
};
