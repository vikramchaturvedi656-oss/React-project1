import ClubCard from '../components/ClubCard'

function Clubs() {
  return (
    <div className="py-16 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Clubs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ClubCard name="Coding Club" />
        <ClubCard name="Photography Club" />
        <ClubCard name="Drama Club" />
      </div>
    </div>
  )
}

export default Clubs