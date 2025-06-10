import '../styles/main.css'
import { Outlet } from 'react-router'
import NavMain from './NavMain.tsx'
import Header from './Header.tsx'

function App() {
  return (
    <div className="app min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-row justify-center gap-8 py-6 px-4">
         <div className="w-64 shrink-0">
          <NavMain />
        </div>
       <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
