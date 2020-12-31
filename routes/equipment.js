const Router = require('express-promise-router');
const router = new Router()

module.exports = router;

router.get('/', async function(req, res) {
  console.log('Pokemon endpoint running')
  console.log(this);
});
