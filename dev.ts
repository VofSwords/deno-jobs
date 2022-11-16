#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { config } from "https://deno.land/std/dotenv/mod.ts";

const env = await config();
Object.keys(env).forEach(key => Deno.env.set(key, env[key]));

await dev(import.meta.url, "./main.ts");
