import express from "express";
const app = express();
app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        service: "payup-api",
    });
});
export { app };
//# sourceMappingURL=app.js.map