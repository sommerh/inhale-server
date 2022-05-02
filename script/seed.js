const { db, Strategy } = require('../db/models');

//TODO: add a "helpful for" section and make it an array of emotions this is helpful for

const strategies = [
  {
    name: 'three-six-nine',
    description: 'calming breath',
    duration: 18,
  },
  {
    name: 'tired',
    description: 'energizing breath',
    duration: 10,
  },
  {
    name: 'box',
    description: 'stress-reduction breath',
    duration: 20,
  },
];

async function seed() {
  try {
    await db.sync({ force: true });

    await Promise.all(
      strategies.map((strategy) => {
        return Strategy.create(strategy);
      })
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error(err);
      db.close();
    });
}
