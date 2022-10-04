import { Router, Request, Response } from "https://deno.land/x/oak/mod.ts";

const router: Router = new Router();

router.get("/champions", (ctx) => {
  ctx.response.body = "Hello World!";
});

export default router;
