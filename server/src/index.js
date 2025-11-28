import dotenv from 'dotenv'
import connectDB from './config/db.js'
import app from './app.js'

dotenv.config({
    path: './.env'
})

const startServer = async () => {
    try {
        await connectDB()

        app.on('error', (error)=> {
            console.log(`Error occured: ${error.message}`)
        })

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`)
        } )
    } catch (error) {
        console.log('mongo connection failed', error)
    }
}

startServer()