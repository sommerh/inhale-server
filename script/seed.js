const { db, Strategy } = require('../db/models');

const strategies = [
  {
    name: 'three-six-nine',
    description: 'calming breath',
    duration: 18,
    // inhale: 3,
    // exhale: 9,
    // pauseOne: 6,
    // pauseTwo: null,
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
