export const main = () => {
  const publicAccessor = () => {
    class AppComponent {
      public handleChange() {}
      public render() {}
    }

    class AppComponentOk {
      handleChange() {}
      render() {}
    }
  }

  const privateAccessor = () => {
    class GreeterService {
      private greeting = ''
      constructor(greeting: string) {
        this.greeting = greeting
      }
      greet(who: string) {
        return this.format(who, this.greeting)
      }
      private format(who: string, greeting: string) {
        return `${who} ${greeting} !`
      }
    }

    const serviceInstance = new GreeterService('Hello')
    // ERROR in TS ✅
    // Valid in RUNTIME 🚨
    // @ts-ignore
    serviceInstance.greeting = `You've been pawned`

    class AppComponent {
      greeterService: GreeterService
      constructor(greeterService: GreeterService) {
        this.greeterService = greeterService
      }

      onInit() {
        this.greeterService.greet('World')
      }
    }

    const test = () => {
      // const greeterServiceMock: Pick<GreeterService, 'greet'> = {
      const greeterServiceMock = {
        greeting: '',
        greet: (who: string) => {
          return ''
        },
        format: (who: string, greeting: string) => {
          return ''
        }
      }
      // } as GreeterService

      // WONT WORK -> NOMINAL TYPING ENABLED
      const inst = new AppComponent(greeterServiceMock)
    }
  }
}
