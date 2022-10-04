import { Router } from "https://deno.land/x/oak/mod.ts";
import { getChampions } from "../controller/champions.ts";

const router: Router = new Router();

router.get("/champions", getChampions);

export default router;
