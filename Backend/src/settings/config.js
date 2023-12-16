import 'dotenv/config' 

export const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/app_viajes',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    DATABASE: process.env.app_viajes || 'app_viajes',
    
}