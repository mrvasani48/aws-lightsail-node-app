
import express from 'express';
const app = express();
const PORT = 3000;
import cors from 'cors';
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
res.send('Welcome to nodejs and express with AWS lightsail');
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})