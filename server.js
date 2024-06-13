import express from 'express';
import router from './routes/index.js';
import start from './controllers/index.js';
import 'dotenv/config'



const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/', router);

start(app);

export default app