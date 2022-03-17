"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAVEN_CERT = exports.RAVEN_PASSWORD = exports.RAVEN_DB_NAME_PLATFORM = exports.RAVEN_SERVER_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.RAVEN_SERVER_URL = process.env.RAVEN_SERVER_URL;
exports.RAVEN_DB_NAME_PLATFORM = process.env.RAVEN_DB_NAME_PLATFORM;
exports.RAVEN_PASSWORD = process.env.RAVEN_PASSWORD;
exports.RAVEN_CERT = process.env.RAVEN_CERT;
//# sourceMappingURL=config.js.map