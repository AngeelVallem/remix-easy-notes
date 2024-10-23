import { createCookieSessionStorage, redirect } from "@remix-run/node";

type Session = {
  userId: number;
  email: string;
  username: string;
};

type SessionFlash = {
  error?: any;
};

const { commitSession, destroySession, getSession } =
  createCookieSessionStorage<Session, SessionFlash>({
    cookie: {
      name: "__session",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      secrets: ["secret"],
      secure: process.env.NODE_ENV === "production",
    },
  });

async function requireSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }

  return session;
}

export { commitSession, destroySession, getSession, requireSession };
