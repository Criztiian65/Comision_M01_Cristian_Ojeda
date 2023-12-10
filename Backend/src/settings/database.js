import { connect } from 'mongoose'
import { config } from './config.js'

export const startConnection = async () => {
    try {
        
        const db = await connect(config.MONGO_URI, {
            dbName: 'app_viajes',
        },)
            console.log('DB is conected to', db.connection.name);

    } catch (error) {
        console.log(error);
    }
}
