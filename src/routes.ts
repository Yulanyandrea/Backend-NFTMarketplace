import user from './api/user';
import product from './api/product';
import payment from './api/payment';
import upload from './api/upload';
import authLocal from './auth/local';

import { Application } from 'express';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/product', product);
  app.use('/api/payment', payment);
  app.use('/api/upload', upload);

  // auth routes
  app.use('/auth/local', authLocal);
  // app.use('/auth/facebook', authFacebook);
  // app.use('/auth/google', authGoogle);
  // app.use('/auth/twitter', authTwitter);
  // app.use('/auth/github', authGithub);
}

export default routes;
