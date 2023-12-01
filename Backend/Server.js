const express = require( 'express' )
const app = express()

// midlawers
app.use(express.json())
app.use('/static',  express.static('public'))

// config server
app.listen(4000, ()=>{
    
    sequelize.sync({FORCE: false})
    // sequelize.authenticate()
    // .then(()=>(console.log('DB Conectada')))
    // .catch(err => console.log(err))

    console.log("Servidor arriba")
})