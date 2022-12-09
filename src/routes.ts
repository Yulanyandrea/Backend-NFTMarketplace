import user from './api/user';
import { Application } from 'express';

function routes(app:Application) {
  app.use('/api/users', user);

}

export default routes;
