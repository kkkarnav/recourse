import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { Express } from 'express';

const backendURL = 'http://localhost:4004';

const proxyOptions: Options = {
  target: backendURL,
  changeOrigin: true
};

export function configureProxy(app: Express) {
  app.use('/api', createProxyMiddleware(proxyOptions));
}
