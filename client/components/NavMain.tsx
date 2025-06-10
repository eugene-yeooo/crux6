import { NavLink } from 'react-router';

export default function NavMain() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors rounded px-3 py-4 font-medium ${
      isActive
        ? 'bg-brandPrimary text-brandBlack font-extrabold'
        : 'text-brandBlack hover:bg-brandBlack hover:text-white'
    }`;

  return (
    <nav className="bg-white p-0 rounded shadow-lg w-full border">
      <div className="flex flex-col space-y-2">
        <NavLink to="/log-nav" className={navLinkClass}>Log a send</NavLink>
        <NavLink to="/user/alicej" className={navLinkClass}>Profile</NavLink>
        <NavLink to="/" className={navLinkClass}>Dashboard</NavLink>
        <NavLink to="/explore" className={navLinkClass}>Explore</NavLink>
      </div>
    </nav>
  );
}
