const express = require('express')
const app = express();
const {sequelize} = require('./config/connetion.js')
require('./models/Associations.js')

app.use(express.json())
app.get('/',  (req,res)=>{
    res.send('<h2>Holas jaja</h2>')
})

app.use('/api', require('./router/routes.js'))

app.listen(3000, (err) =>{
    if (err) {
        console.log('error del servidor',err)
    }else{
        console.log('Servicio activo por puerto: ',3000);
    }
})

