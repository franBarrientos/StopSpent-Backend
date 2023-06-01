"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
const responseSuccess = (res, data, status = 200) => {
    res.status(status).json({
        ok: true,
        status,
        data,
        error: "",
    });
};
exports.responseSuccess = responseSuccess;
const responseError = (res, error, message, status = 500) => {
    console.log(message);
    res.status(status).json({
        ok: false,
        status,
        data: "",
        error,
    });
};
exports.responseError = responseError;
//# sourceMappingURL=handlerResponses.js.map