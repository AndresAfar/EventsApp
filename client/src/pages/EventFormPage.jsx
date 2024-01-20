import React from 'react'
import {useForm} from 'react-hook-form';
import { createEvent } from '../api/events.api'
import {useNavigate, useParams} from 'react-router-dom'


export const EventFormPage = () => {

  const {register, handleSubmit, formState: {
    errors
  }} = useForm()
  const nagivate = useNavigate()
  const params = useParams()
  
  const onSubmit = handleSubmit(async data =>{
    await createEvent(data);
    nagivate('/Events')
  })

  return (
    <div className='container mx-auto'>
      <div className='cont-form mt-10'>
        <form className="max-w-sm mx-auto p-5" onSubmit={onSubmit}>
          <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo de evento</label>
            <input type="text" id="titleEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("title", {required:  true})}/>
            {errors.title && <span>Title is required</span>}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 mb-5">
            <div className="relative z-0 w-full group">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de inicio</label>
              <input type="date" id="dateEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("dateEvent", {required:  true})}/>
              <span className='text-gray-500 text-xs font-sans'>Fecha en el formato dd-mm-aaaa</span>
            </div>
            <div className="relative z-0 w-full group">
              <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora de inicio</label>
              <input type="time" id="timeEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("timeEvent", {required:  true})}/>
              <span className='text-gray-500 text-xs font-sans'>Hora en formato 24h - HH:MM</span>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="inputAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
            <input type="text" id="addressEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234 Main St" {...register("locationEvent", {required:  true})}/>
          </div>
          <div className="mb-5">
            <label htmlFor="inputAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de evento</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("typeEvent", {required:  true})}>
              <option selected>Seleccione...</option>
              <option value="SOL">Social</option>
              <option value="CUL">Cultural</option>
              <option value="DEP">Deportivo</option>
              <option value="EMP">Empresarial</option>
              <option value="ACA">Academico</option>
              <option value="REL">Religioso</option>
              <option value="POL">Politico</option>
              <option value="OTR">Otro</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="descriptionEvent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea id="descriptionEvent" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Agregar una descripcion..." {...register("description", {required:  true})}></textarea>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="statusEvent" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" {...register("status")}/>
            </div>
            <label htmlFor="statusEvent" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Publicar en muro</label>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear evento</button>
        
        </form>

      </div>
    </div>
  )
}
