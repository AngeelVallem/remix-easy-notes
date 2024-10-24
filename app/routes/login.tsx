import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation, redirect } from "@remix-run/react";
import { registerUser } from "~/services/auth.server";
import { authContainer } from "../styles/auth.css";

import z from "zod";
import { commitSession, getSession } from "~/session";

const RegisterPayloadScheme = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(10),
});

export default function Screen() {
  let transition = useNavigation();
  let actionData = useActionData<typeof action>();

  return (
    <div className={authContainer}>
      <Form method="post" noValidate>
        <input type="email" name="email" />
        {actionData?.fieldErrors.email && (
          <p>{actionData?.fieldErrors.email}</p>
        )}
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
  const session = await getSession(request.headers.get("Cookie"));

  if (!payload.success) {
    return payload.error.formErrors;
  }

  const userId = registerUser(payload.data.email, payload.data.password);

  session.set("userId", 1);
  session.set("email", payload.data.email);
  session.set("username", payload.data.email);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession();

  if (session.has("userId")) {
    return redirect("/");
  }

  return null;
}
