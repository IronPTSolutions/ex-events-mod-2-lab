require('dotenv').config();
require('../configs/db.config');

const Event = require('../models/event.model');
const eventsJson = require('../data/events');
const mongoose = require('mongoose')

 
Event.create(eventsJson)
    .then((eventsJson) => console.debug(`${eventsJson.length} events created`))
    .catch((error) => console.error(error))


/*
 mongoose.connection.once('open', () => {
  console.info(`Connected to the database ${mongoose.connection.db.databaseName}`)  
  mongoose.connection.db.dropDatabase()
    .then(() => Event.create(eventsJson))
    .then((eventsJson) => {
        console.info(`${eventsJson.length} events created`)
        eventsJson.forEach((event) => console.info(`/t- ${event.title}`))
    })
    .then(() => console.info('All data created!'))
    .catch((error) => console.error('An error ocurred running seeds', error))
    .finally(() => mongoose.disconnect())
}) 
*/