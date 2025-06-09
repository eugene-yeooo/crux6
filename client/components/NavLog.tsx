import { NavLink } from 'react-router'

export default function NavMain() {
  return (
    <nav>
      <NavLink to="/log-climb">Climbing</NavLink>
      <NavLink to="/log-canyon">Canyoning</NavLink>
      <NavLink to="/log-cave">Caving</NavLink>
      <NavLink to="/log-dive">Diving</NavLink>
    </nav>
  )
}
