import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// generate database url from .env
const db_url = ''.concat('mongodb+srv://', process.env.DB_USER!, ':', process.env.DB_PWD!, '@', process.env.DB_HOST!, '.w70wr.mongodb.net/recourse?retryWrites=true&w=majority');

// connect to mongodb
mongoose.connect(db_url)
.then(() => console.log('db connected @ ' + process.env.DB_HOST!))
.catch(err => console.log(err));

export {mongoose};
