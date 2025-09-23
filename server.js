
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
res.send('Welcome to nodejs and express with AWS lightsail');
})
app.use('/api',routes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})