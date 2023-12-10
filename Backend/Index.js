import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { userRoutes } from "./src/Routes/user.routes.js";
import { postRoutes } from "./src/Routes/post.routes.js";
import { commentsRoutes } from "./src/Routes/comments.routes.js";

import { startConnection } from './src/settings/database.js'
import { config } from "./src/settings/config.js";

// import { actionsRoutes } from './src/Routes/actions.routes.js'
// Forma actual OBLIGATORIA -->> Escribir la extension del archivo SI O SI

const app = express();

// Validations

// midlawers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes

app.use("/comment", commentsRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes); // Forma de usar el import

// config server

app.listen(config.PORT, async () => {

  await startConnection();

  console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});
