import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Campus Connect</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar