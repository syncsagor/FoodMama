import "./App.css";
import Logo from "./img/logo.png";

function App() {
  return (
    <div className="font-display-font font-bold max-w-full">
      <header className="bg-bg-color text-text-color flex justify-between items-center px-10">
        <img className="h-16 w-16 rounded-full" src={Logo} alt="logo" />
        <ul className="flex gap-12 justify-between">
          <li>Home</li>
          <li>Foods</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
