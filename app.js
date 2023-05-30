
import express from 'express'


const app = express()


app.get('/' , (req,res) => {
    res.send('<h1>Mohamed Elsayed</h1>')
})



app.listen(3000, () => console.log('server listening on port'))