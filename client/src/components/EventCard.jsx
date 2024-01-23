
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

    <div className='sm:w-full min-w-[190px] bg-white border border-gray-200 rounded-lg shadow duration-300 hover:-translate-y-1'>
      <a href="#">
        <img className='rounded-t-lg' src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </a>
      <div className='p-5'>
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{fechaFormateado}, {horaFormateada}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.locationEvent}</p>
        
      </div>

    </div>

  )
}
