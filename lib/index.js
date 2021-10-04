"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const hello_1 = require("./functions/hello");
const echo_1 = require("./functions/echo");
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
const stage = express_1.default.Router();
const v1 = express_1.default.Router();
app.use('/stage', stage);
app.use('/v1', v1);
stage.get('/hello', hello_1.hello);
stage.post('/echo', echo_1.echo);
v1.get('/hello', hello_1.hello);
v1.post('/echo', echo_1.echo);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('🚀 Server ready on port', port);
});
//# sourceMappingURL=index.js.map