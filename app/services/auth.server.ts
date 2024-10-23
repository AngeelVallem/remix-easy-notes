import { createCookie, redirect } from "@remix-run/node";

export let authCookie = createCookie("_session", {
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  secrets: ["secret"],
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 30,
});

export async function registerUser(email: string, password: string) {
  return { id: 1 };
}

export async function requireAuthCookie(request: Request) {
  const auth = await authCookie.parse(request.headers.get("Cookie"));

  if (!auth) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await authCookie.serialize("", {
          maxAge: 0,
        }),
      },
    });
  }

  return auth;
}

export async function getSession(request: Request) {
  return await authCookie.parse(request.headers.get("Cookie"));
}
