import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation, redirect } from "@remix-run/react";
import { authCookie, getSession, registerUser } from "~/services/auth.server";
import { authContainer } from "../styles/routes/auth.css";
import z from "zod";

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
  console.log("hola", payload.error?.formErrors);

  if (!payload.success) {
    return payload.error.formErrors;
  }

  const userId = registerUser(payload.data.email, payload.data.password);

  return redirect("/", {
    headers: {
      "Set-Cookie": await authCookie.serialize({
        userId,
        email: payload.data.email,
      }),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request);

  if (session) {
    return redirect("/");
  }

  return null;
}
