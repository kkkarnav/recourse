import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// generate database url from .env
const db_url = ''.concat('mongodb+srv://', process.env.DB_USER!, ':', process.env.DB_PWD!, '@', process.env.DB_HOST!, '.w70wr.mongodb.net/recourse?retryWrites=true&w=majority');

// connect to mongodb
mongoose.connect(db_url);
const db_connection = mongoose.connection;

// report success or failure
db_connection.on('error', console.error.bind(console, 'db connection error:'));
db_connection.once('open', () => {
  console.log('db connected @ ' + process.env.DB_HOST!);
});

export {mongoose};
