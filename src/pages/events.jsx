import EventCard from '../components/EventCard'

function Events() {
  return (
    <div className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <EventCard title="Tech Fest 2026" date="March 10, 2026" />
        <EventCard title="Cultural Night" date="April 5, 2026" />
        <EventCard title="Sports Meet" date="May 20, 2026" />
      </div>
    </div>
  )
}

export default Events