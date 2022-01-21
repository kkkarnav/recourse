import mongoose from 'mongoose';

console.log("in database");

mongoose.Promise = global.Promise;

// generate database url from .env
const db_url = ''.concat('mongodb+srv://', process.env.DB_USER!, ':', process.env.DB_PWD!, '@', process.env.DB_HOST!, '.w70wr.mongodb.net/recourse?retryWrites=true&w=majority');

// connect to mongodb
mongoose.connect(db_url)
.then(() => console.log('database connected'))
.catch(err => console.log(err));

export {mongoose};
