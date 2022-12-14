import user from './api/user';
import product from './api/product';
import payment from './api/payment';

import { Application } from 'express';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/product', product);
  app.use('/api/payment', payment);
}

export default routes;
