import { Injectable } from 'injection-js'

@Injectable()
export class Logger {
  log(...args: any[]) {
    console.log(...args)
  }
  warn(...args: any[]) {
    console.warn(...args)
  }
}
