// import each route to be bound to the express instance
const pokemon = require('./pokemon')
const equipment = require('./equipment')

/*
Below code creates route definitions and resources.
`app.use` is a special step to configure various middleware settings w/ Express 
*/

module.exports = (app) => {
  app.use('/api/pokemon', pokemon)
  app.use('/api/equipment', equipment)
}
