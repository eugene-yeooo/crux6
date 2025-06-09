import '../styles/main.css'
import { Outlet } from 'react-router'
import NavMain from './NavMain.tsx'
import Header from './Header.tsx'

function App() {
  return (
    <div className="app min-h-screen bg-gray-50">
      <Header />
      <main className="flex items-center justify-center py-6">
        <NavMain />
        <Outlet />
      </main>
    </div>
  )
}

export default App
