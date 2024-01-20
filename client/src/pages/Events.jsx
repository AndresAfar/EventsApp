import React from 'react'
import {EventsList} from '../components/EventsList'
import { EventAddButton } from '../components/EventAddButton'

export const Events = () => {
  return (
    <div className=''>
      <div className='flex justify-end pt-4'>
        <EventAddButton/>
      </div>
      <section className='px-4'>
        <div className='content-cards-events p-4 mx-auto max-w-6xl bg-slate-700 rounded-lg '>
          <EventsList/>
        </div>
      </section>
    </div>
  )
}
