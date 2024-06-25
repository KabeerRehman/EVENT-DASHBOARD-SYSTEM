// In server/server.js, initialize the server and connect to MongoDB.

import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import eventRoute from './routes/eventRoute.js';

const app = express();
const port = 4000;

app.use(cors());

app.use(json());

// Connect to MongoDB
connect('mongodb://localhost:27017/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) =>
        console.error('Failed to connect to MongoDB', error));

// Define your routes here
app.use('/events', eventRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
