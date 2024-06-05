import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import jwt from "npm:jsonwebtoken";

type State = {
  user: string;
};

export async function handler(req: Request, ctx: FreshContext<State>) {
  if (ctx.destination !== "route") {
    const resp = await ctx.next();
    return resp;
  }
  if (ctx.route == "/") {
    const resp = await ctx.next();
    return resp;
  }
  if (ctx.route == "/login") {
    const resp = await ctx.next();
    return resp;
  }
  if (ctx.route == "/register") {
    const resp = await ctx.next();
    return resp;
  }
  if (ctx.route == "/secret") {
    const { auth } = getCookies(req.headers);
    if (auth !== undefined) {
      const payload = jwt.verify(auth, Deno.env.get("JWT_SECRET"));
      if (payload) {
        const resp = await ctx.next();
        return resp;
      } else {
        const headers = new Headers();
        headers.set("location", "/");
        return new Response(null, {
          status: 303,
          headers,
        });
      }
    } else {
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
  }
}
