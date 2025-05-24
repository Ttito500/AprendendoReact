export default function Header() {
  return (
    <header className="flex-header">
      <img
        className="react-logo"
        alt='react logo'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NgoO9GZty71i2XnnEAtKbQHaFj%26pid%3DApi&f=1&ipt=3b70a677e31ab2420181c7acad643dfd6566a03bc7de55364554c77b7905c8be&ipo=images'
      />

      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}