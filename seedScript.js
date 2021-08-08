/* mySeedScript.js */

// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
    const uri = "mongodb://admin:2eAyvuLMgMDZJhrB@mongodb-db:27017/financial-system?authSource=admin&readPreference=primary&ssl=false";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        console.log("Database connect!");
        const collection = client.db("financial-system").collection("financial-control");
        if (await collection.countDocuments() > 0) {
            await collection.drop();
            console.log("Collection Dropped!");
        }

        let fakeData = [];

        for (let i = 0; i < 500; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const name = `${firstName} ${lastName}`
            const title = faker.company.companyName()
            const value = faker.finance.amount()
            const defaultedSince = faker.date.past().toISOString()

            const financial = {
                name, title, value, defaultedSince
            }

            fakeData.push(financial);
        }
        await collection.insertMany(fakeData);

        console.log("Database seeded!");
        await client.close();
    } catch (err) {
        console.log(err.stack);
        await client.close();
    }
}

seedDB();