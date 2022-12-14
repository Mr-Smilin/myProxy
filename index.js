const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({
	xfwd: false,
	secure: false,
	changeOrigin: false,
});

const server = http.createServer((req, res) => {
	proxy.web(req, res, {
		target: {
			protocol: "https:",
			host: process.env.TARGET_URL,
			prot: 80,
		},
	});
});

console.log("listening on server");

server.listen(process.env.PORT || 80);
