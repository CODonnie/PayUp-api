import { app } from "./app.js"

const PORT = Number(process.env.PORT ?? 3000);

const server = app.listen(PORT, () => {
    console.log(`Payup API is running on port ${PORT}`);
});