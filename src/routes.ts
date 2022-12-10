import user from './api/user';
import product from './api/product';

import { Application } from 'express';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/product', product);
}

export default routes;
