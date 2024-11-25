import Button from "./components/ButtonComponent";
import LogoHeader from "./components/LogoComponent";

export default function App() {
  return (
    <>
      <div className="header">
        <LogoHeader />
        <NavBarList />
        <Button className="btn-signin">Get Started</Button>
      </div>
    </>
  );
}

function NavBarList() {
  return (
    <ul className="ul-navbar">
      <li className="list-navbar-item">Home</li>
      <li className="list-navbar-item">Menu</li>
      <li className="list-navbar-item">About</li>
      <li className="list-navbar-item">Contact</li>
    </ul>
  );
}
