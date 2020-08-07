import axios from 'axios'

const api = axios.create({
  baseURL:'http://177.235.69.166:3333'
})

export default api