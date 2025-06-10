import { NavLink } from 'react-router';

export default function NavLog() {
  const logButtonClass =
    'flex items-center justify-center aspect-rectangle w-64 p-5 text-center border bg-white text-brandBlack text-base font-semibold rounded shadow-lg hover:bg-brandBlack hover:text-brandPrimary transition transition-transform hover:scale-105';

   return (
    <div>
      <nav className="grid grid-cols-2 gap-6 max-w-xl mx-auto rounded-lg p-6">
        <NavLink to="log-climb" className={logButtonClass}>
          Climbing
        </NavLink>
        <NavLink to="log-canyon" className={logButtonClass}>
          Canyoning
        </NavLink>
        <NavLink to="log-cave" className={logButtonClass}>
          Caving
        </NavLink>
        <NavLink to="log-dive" className={logButtonClass}>
          Diving
        </NavLink>
        <NavLink to="log-alpine" className={logButtonClass}>
          Alpine
        </NavLink>
        <NavLink to="log-other" className={logButtonClass}>
          Other
        </NavLink>
      </nav>
    </div>
  );
}