
import {useNavigate} from 'react-router-dom'

export function EventCard({event}) {
  
  const navigate = useNavigate()
  const dateEve = event.dateEvent

  const [anio, mes, dia] = dateEve.split('-');
  const fecha = new Date(anio, mes - 1, dia);
  const fechaFormateado = fecha.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }).replace(/de/g, ' ');

  const hourEve = event.timeEvent
  const hora = new Date(`2000-01-01T${hourEve}`);
  const horaFormateada = hora.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (

    <div className="my-2 sm:w-full min-w-[218px] rounded-lg shadow-lg bg-white text-gray-600 duration-300 hover:-translate-y-1">
      <a _href="link" className="cursor-pointer">
        <figure>
          <a href="#" target="_blank">
            <img className="proorddo rounded-lg h-48 w-full aspect-auto" loading='lazy'/>
          </a>
          <figcaption className="p-4">
            <a href="#" target='_blank' className="text-[20px] md:text-[20px] mb-4 font-bold leading-relaxed  hover:underline">{event.title}</a>
            <div className=''>
              <p className='text-sm sm:text-base'>{fechaFormateado}, {horaFormateada}</p>
              <p className='text-sm sm:text-base'>{event.locationEvent}</p>
            </div>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}
