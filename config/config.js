require('dotenv').config
module.exports = {
  development: {
    database: 'knitting_knoll_development',
    dialect: 'postgres'
  },
  test: {
    database: 'knitting_knoll_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
