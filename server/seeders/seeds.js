const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 25; i += 1) {
        const name = faker.name.firstName()
        const email = faker.internet.email(name);
        const password = faker.internet.password();
        const age = faker.random.number({ min: 18, max: 90 });
        const photos = [{ photoUrl: faker.image.image() }]
        userData.push({ name, email, password, age, photos });
    }

    const createdUsers = await User.collection.insertMany(userData);

    console.log('all done!');
    process.exit(0);
});
