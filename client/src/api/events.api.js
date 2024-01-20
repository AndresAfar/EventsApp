
import axios from 'axios'

const eventsApi = axios.create({
    baseURL: 'http://localhost:8000/events/api/events/'
})

export const getAllEvents = () =>eventsApi.get('/');

export const createEvent = (Event) =>eventsApi.post('/', Event);

export const deleteEvent = (id) => eventsApi.delete(`/${id}`)