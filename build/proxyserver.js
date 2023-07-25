"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureProxy = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const backendURL = "http://localhost:4004";
const proxyOptions = {
    target: backendURL,
    changeOrigin: true,
};
function configureProxy(app) {
    app.use("/api", (0, http_proxy_middleware_1.createProxyMiddleware)(proxyOptions));
}
exports.configureProxy = configureProxy;
