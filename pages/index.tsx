import events from '../data/events.json'
import EventCard from '../components/EventCard'
import { useState } from 'react'

export default function Home() {
  const [location, setLocation] = useState('')
  const filtered = events.filter(e =>
    e.location.toLowerCase().includes(location.toLowerCase())
  )

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Events Explorer</h1>

      <input
        type="text"
        placeholder="Search by location"
        className="border border-gray-300 rounded-md p-3 mb-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        onChange={(e) => setLocation(e.target.value)}
      />

      <div className="space-y-12">
        {filtered.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  )
}
