import { FreshContext, Handlers } from "$fresh/server.ts";
import { MongoClient } from "npm:mongodb@6.1.0";
import jwt from "npm:jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const username = form.get("LoginName");
    const password = form.get("LoginPassword");
    const MONGO_URL = Deno.env.get("MONGO_URL") || "";
    const mongoClient = new MongoClient(MONGO_URL);
    const db = mongoClient.db("Final");
    const users = db.collection("users");
    const user = await users.findOne({
      username: username,
      password: password,
    });
    console.log(user);
    if (user !== null) {
      const token = jwt.sign({ password }, Deno.env.get("JWT_SECRET"), {
        expiresIn: "24h",
      });
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: token,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });
      headers.set("location", "/secret");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
  },
};
