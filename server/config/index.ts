import config from '../configStore'

export interface Config {
  http: {
    address: string
    port: number
  }
}

export const buildConfig = () => {
  return config
}
