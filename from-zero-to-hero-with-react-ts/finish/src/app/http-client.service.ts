import axios, { AxiosInstance, AxiosError } from 'axios'

export class HttpClient {
  private provider: AxiosInstance
  constructor(baseURL: string) {
    this.provider = axios.create({ baseURL })
  }
  get<T>(url: string) {
    return this.provider
      .get<T>(url)
      .then((response) => response.data)
      .catch((reason: AxiosError) => {
        const error = reason.response ? reason.response.data : reason.response

        throw error
      })
  }
}
