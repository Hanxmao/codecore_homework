//set up express
const express =require("express")
const app = express()
//port
const PORT = 8080
//-----set up middleware-----
//body parser --> urlencode
app.use(express.urlencoded({extended:true}))

//method-override
const methodOverride = require('method-override')
app.use(methodOverride((req,res)=>{
    if (req.body && req.body._method){
        const method = req.body._method
        return method
    }
}))


//static assets
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (request, response) => {
    response.render('homepage')
})




const postRouter = require('./routes/posts');
app.use('/posts', postRouter)


app.set('view engine','ejs')
app.set('views','views')

app.listen(PORT,()=>{
    console.log("Listening on 8080")
})