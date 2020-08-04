import express, { response } from 'express';
import ClassesControllers from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesControllers;


routes.post('/classes', classesControllers.create);



export default routes;