import { Application } from "https://deno.land/x/oak/mod.ts";
import routerChampion from "./routes/champions.ts";

const app = new Application();

app.use(routerChampion.routes());

app.listen({ port: 8080 });
