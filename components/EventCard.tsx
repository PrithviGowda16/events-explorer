import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type EventType = {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
}

export default function EventCard({ event }: { event: EventType }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group block rounded-xl overflow-hidden shadow-md relative"
    >
      {/* Background Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
        
        <div className="flex justify-between items-start gap-4">
          {/* Title + Description */}

          <div className="text-white max-w-[65%]">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">{event.title}</h2>
            <p className="text-x mt-1 text-gray-200 line-clamp-2">
              {event.description}
            </p>
          </div>

          {/* Date & Location */}
          <div className="text-right text-white text-x">
            <p>{event.location}</p>
            <p>{event.date}</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button className="text-white text-sm px-4 py-1 rounded hover:text-white hover:border-white transition">
            View More <ArrowRight className="inline-block ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  )
}
