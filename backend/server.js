"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var convert_js_1 = require("./convert.js");
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].json());
app.use("/", express_1["default"].static("./dist"));
app.post("/query", function (request, response) {
    var _a;
    if ((_a = request.body) === null || _a === void 0 ? void 0 : _a.s) {
        (0, convert_js_1.convert)(request.body.s).then(function (res) {
            response.send(res);
        })["catch"](function (res) {
            response.send("Server error");
        });
    }
    else {
        response.send("Invalid request");
    }
});
app.listen(port, function () {
    console.log("Listening on port ".concat(port));
});
