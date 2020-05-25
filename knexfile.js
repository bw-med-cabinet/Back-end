// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/medcabinet";

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/medcabinet.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds:{
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) =>{
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
  
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migratoins'
    },
    seeds: {
      directory: './data/seed'
    }
  }

};
