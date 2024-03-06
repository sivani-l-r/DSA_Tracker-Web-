import express, { response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import questionRoute from './routes/questionRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', questionRoute);

app.get('/', (request, response) =>
{
    console.log(request);

});





mongoose
    .connect(mongoDBURL)
    .then(()=>
    {
        console.log("App connected to database");
        app.listen(PORT , () =>
        {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>
    {
        console.log(error);
    });


