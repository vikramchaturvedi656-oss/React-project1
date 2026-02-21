function EventCard({ title, date }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Register
      </button>
    </div>
  )
}

export default EventCard