function Header() {
  return (
    <header>
      <nav>
        <form method="post" action="/logout">
          <button>Logout</button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
