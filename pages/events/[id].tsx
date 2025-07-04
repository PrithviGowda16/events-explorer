import { GetStaticPaths, GetStaticProps } from 'next'
import events from '../../data/events.json'
import Head from 'next/head'
import { EventType } from '../../types/index'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map(event => ({ params: { id: event.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find(e => e.id === params?.id)
  return { props: { event } }
}

export default function EventDetail({ event }: { event: EventType }) {
  return (
    <>
      <Head>
        <title>{event.title} | Events Explorer</title>
        <meta name="description" content={event.description} />
      </Head>

      <main className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray border-white bg-black-500 hover:bg-white hover:text-gray-600 px-4 py-2 rounded-md transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Image */}
        <div className="w-full h-64 sm:h-96 overflow-hidden rounded-xl shadow-md mb-6">
          <Image
            src={event.image || '/fallback.jpg'}
            alt={event.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Info */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.location}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {event.title}
          </h1>

          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
            {event.details || event.description}
          </p>
        </div>
      </main>
    </>
  )
}
