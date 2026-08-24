import express, { type Express, type Request, type Response } from "express";

const App: Express = express();

App.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "API Products funcionando correctamente",
    });
});

App.get("/api/health", (req: Request, res: Response) => {
    return res.status(200).json({
        status: "ok",
        message: "API Products is healthy",
    });
});

export default App;
