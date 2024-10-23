import { createCookie, redirect } from "@remix-run/node";
import { getSession } from "~/session";

export async function registerUser(email: string, password: string) {
  return { id: 1 };
}

