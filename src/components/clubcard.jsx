function ClubCard({ name }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Join Club
      </button>
    </div>
  )
}

export default ClubCard