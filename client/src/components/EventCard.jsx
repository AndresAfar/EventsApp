
import {useNavigate} from 'react-router-dom'

export function EventCard({event}) {
  
  const navigate = useNavigate()

  return (

    <div className="my-8  sm:w-full min-w-[218px] rounded shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <a _href="link" className="cursor-pointer">
        <figure>
          <figcaption className="p-4">
            <p className="text-sm sm:text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{event.title}</p>
            <small className="text-xs sm:text-base leading-5 text-gray-500 dark:text-gray-400"> {event.description}</small>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}
