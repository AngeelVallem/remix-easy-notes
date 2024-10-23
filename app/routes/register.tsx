import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation, redirect } from "@remix-run/react";
import { registerUser } from "~/services/auth.server";
import { authContainer } from "../styles/auth.css";
import z from "zod";
import { commitSession, getSession } from "~/session";

const RegisterPayloadScheme = z.object({
  email: z.string().email(),
  username: z.string().min(5).max(20),
  password: z.string().min(5).max(10),
});

export default function Screen() {
  let transition = useNavigation();
  let actionData = useActionData<typeof action>();

  return (
    <div className={authContainer}>
      <Form method="post" noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        {actionData?.fieldErrors.username && (
          <p>{actionData?.fieldErrors.username}</p>
        )}

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        {actionData?.fieldErrors.email && (
          <p>{actionData?.fieldErrors.email}</p>
        )}

        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          autoComplete="current-password"
        />
        {actionData?.fieldErrors.password && (
          <p>{actionData?.fieldErrors.password}</p>
        )}
        <button disabled={transition.state === "submitting"}>Sign In</button>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const formObject = Object.fromEntries(formData);
  const payload = RegisterPayloadScheme.safeParse(formObject);
  console.log(formObject);
  const session = await getSession(request.headers.get("Cookie"));
  console.log("hola", payload.error?.formErrors);

  if (!payload.success) {
    return payload.error.formErrors;
  }

  const user = await registerUser({
    email: payload.data.email,
    username: payload.data.username,
    password: payload.data.password,
  });

  session.set("userId", user.id);
  session.set("email", user.email);
  session.set("username", user.username);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("userId")) {
    return redirect("/");
  }

  return null;
}
