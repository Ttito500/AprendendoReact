export default function Header() {
  return (
    <header className="flex-header">
      <img
        className="react-logo"
        alt='react logo'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ficon-react-native-24.png&f=1&nofb=1&ipt=13b80f71f6b73184209473a914f0d92be65f2bdc15e626ea86982a4d56ceabda'
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