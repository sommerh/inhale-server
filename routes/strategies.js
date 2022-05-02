const router = require('express').Router();
const { Strategy } = require('../db/models/');

//GET /api/strategies
router.get('/', async (req, res, next) => {
  try {
    const allStrategies = await Strategy.findAll();
    res.send(allStrategies);
  } catch (err) {
    console.error('🦞 Unable to fetch strategies!');
    next(err);
  }
});

//GET /api/strategies/:name
router.get('/:name', async (req, res, next) => {
  try {
    const strategy = await Strategy.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.send(strategy);
  } catch (err) {
    console.error('🦑 Unable to fetch specific strategy!');
    next(err);
  }
});

module.exports = router;
