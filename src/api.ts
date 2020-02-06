import axios from 'axios'

const apiUrl = 'api/timezone/'

const network = axios.create({
  baseURL: apiUrl
})

export type TimeModel = {
  utc_datetime: string
  timezone: string
}

export default (timezone: string): Promise<TimeModel> =>
  network.get(timezone).then(res => res.data)
