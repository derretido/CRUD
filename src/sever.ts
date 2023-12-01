import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'
 
dotenv.config()
 
const server = express()
 
//configurações do mustache
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
 
//caminho da pasta public
server.use(express.static(path.join(__dirname,'../public')))
//habilitar o POST
server.use(express.urlencoded({extended:true}))
 
//usando index.ts
server.use(mainRoutes)
 
server.listen(process.env.PORT)
 
//página não encontrada
server.use((req,res) =>{
    res.send("Página não encontrada")
})