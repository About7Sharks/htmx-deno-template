import { Router } from "https://deno.land/x/oak/mod.ts";
import {homePage} from "../src/homePage.tsx";

const router = new Router();

router.get("/home", async (context) => (context.response.body = await homePage()))


export { router };