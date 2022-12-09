import express,{ Application } from 'express';
import morgan from 'morgan';

function configExpress(app:Application){
  app.use(express.json());
  app.use(morgan('dev'));
}
export default configExpress;
