import { NavLink } from 'react-router'

export default function NavMain() {
  return (
    <nav className="bg-gray-100 w-64 p-4 rounded shadow-md">
      <div className="flex flex-col space-y-4">
        <NavLink to="/" className="text-gray-800 hover:text-blue-500">
          Dashboard
        </NavLink>
        <NavLink
          to="/user/alicej"
          className="text-gray-800 hover:text-blue-500"
        >
          Profile
        </NavLink>
        <NavLink to="/log-nav" className="text-gray-800 hover:text-blue-500">
          Log a send
        </NavLink>
      </div>
    </nav>
  )
}
