"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.firestore = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp();
}
exports.firestore = firebase_admin_1.default.firestore();
exports.Timestamp = firebase_admin_1.default.firestore.Timestamp;
//# sourceMappingURL=firestore.js.map