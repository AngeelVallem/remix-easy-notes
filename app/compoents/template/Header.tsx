import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/session";

function Header() {
  return (
    <header>
      <nav>
        <form method="post">
          <button>Logout</button>
        </form>
      </nav>
    </header>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export default Header;
