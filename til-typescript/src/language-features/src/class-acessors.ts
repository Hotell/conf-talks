export const main = () => {
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
    const inst = new AppComponent(greeterServiceMock)
  }
}
