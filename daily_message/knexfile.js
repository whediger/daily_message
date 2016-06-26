require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/daily_message'
  },

  production: {
    client: 'pg',
    commection: process.env.DATABASE_URL + '?ssl=true'
  }

};
