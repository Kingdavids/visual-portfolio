import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 w-full z-10">
    <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
    <div className="space-x-4">
      <Link to="/storytelling">Storytelling</Link>
      <Link to="/videography">Videography</Link>
      <Link to="/case-studies">Case Studies</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
