// components/Header.js
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">ReactWP</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
