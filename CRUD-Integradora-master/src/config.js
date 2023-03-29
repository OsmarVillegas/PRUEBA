import {config} from 'dotenv';
config();

export default{
    mongodbURL: process.env.MONGODB_TR || 'mongodb+srv://optimen:optimen@cluster0.qql7as2.mongodb.net/integradora',
}