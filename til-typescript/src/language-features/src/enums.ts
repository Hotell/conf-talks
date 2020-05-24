type ObjectValues<T extends object> = T[keyof T]

export const main = () => {
  /**
   * TypeScript Enums
   */
  const enums = () => {
    enum Response {
      No, // compiles to --> 1
      Yes // compiles to --> 2
    }

    const test = () => {
      // $ExpectError 💥 NOPE  🤯???!!!
      const test: Response.No = 4

      function respond(recipient: string, message: Response) {
        /* ...implementation... */
      }

      // $ExpectError 💥 NOPE  🤯???!!!
      respond('unknown', 4)
    }
  }

  /**
   * Idiomatic JS Enums (number) via object
   */
  const idiomaticEnums = () => {
    const Response = {
      No: 1,
      Yes: 2
    } as const

    // merge implementation with "Enum" typed literal
    type Response = ObjectValues<typeof Response>

    const test = () => {
      // $ExpectError 👉 ✅
      const test: Response = 4

      function respond(recipient: string, message: Response) {
        /* ...implementation... */
      }

      // $ExpectError 👉 ✅
      respond('unknown', 4)
    }
  }

  /**
   * TypeScript String Enums
   */
  const stringEnums = () => {
    enum Colors {
      Red = 'RED',
      Green = 'GREEN',
      Blue = 'BLUE'
    }

    const test = () => {
      // ERROR WAT 🤯???
      const test: Colors.Red = 'RED'

      function favoriteColor(name: string, color: Colors) {
        /* ...implementation... */
      }

      // ERROR WAT 🤯???
      favoriteColor('unknown', 'RED')
    }
  }

  /**
   * Idiomatic JS Enums (string) via object
   */
  const idiomaticStringEnums = () => {
    const Colors = {
      Red: 'RED',
      Green: 'GREEN',
      Blue: 'BLUE'
    } as const
    // merge implementation with "Enum" typed literal
    type Colors = ObjectValues<typeof Colors>

    const test = () => {
      // no ERROR ✅
      const test: Colors = 'RED'

      function favoriteColor(name: string, color: Colors) {
        /* ...implementation... */
      }

      // no ERROR ✅
      favoriteColor('unknown', 'RED')
    }
  }
}

// ======================
export const mainComplete = () => {
  /**
   * TypeScript Enums
   */
  const enums = () => {
    enum Response {
      No, // compiles to --> 1
      Yes // compiles to --> 2
    }

    const test = () => {
      // $ExpectError 💥 NOPE  🤯???!!!
      const test: Response.No = 4
      // $ExpectError ✅
      const test2: Response.Yes = Response.No
      // $ExpectError ✅
      const test3: Response.Yes = 'hello'

      function respond(recipient: string, message: Response) {}

      // $ExpectError 💥 NOPE  🤯???!!!
      respond('unknown', 4)
      respond('unknown', Response.No)
      respond('unknown', Response.Yes)
      // $ExpectError ✅
      respond('unknown', 'ups')
    }
  }

  /**
   * Idiomatic JS Enums (number) via object
   */
  const idiomaticEnums = () => {
    const Response = {
      No: 1,
      Yes: 2
    } as const

    // merge implementation with "Enum" typed literal
    type Response = ObjectValues<typeof Response>

    const test = () => {
      // $ExpectError 👉 ✅
      const test: Response = 4
      // NO ERROR ✅
      const test2: Response = Response.No
      // $ExpectError ✅
      const test3: Response = 'hello'

      function respond(recipient: string, message: Response) {}

      // $ExpectError 👉 ✅
      respond('unknown', 4)
      respond('unknown', Response.Yes)
      respond('unknown', Response.No)
      respond('unknown', 1)
      // $ExpectError
      respond('unknown', 'ups')
    }
  }

  /**
   * TypeScript String Enums
   */
  const stringEnums = () => {
    enum Colors {
      Red = 'RED',
      Green = 'GREEN',
      Blue = 'BLUE'
    }

    const test = () => {
      // $ExpectError 🤯???
      const test: Colors.Red = 'RED'
      // $ExpectError 🤯???
      const test2: Colors = 'RED'
      const test3: Colors = Colors.Red

      function favoriteColor(name: string, color: Colors) {}

      // $ExpectError 🤯???
      favoriteColor('unknown', 'RED')
      favoriteColor('unknown', Colors.Red)
      favoriteColor('unknown', Colors.Green)
    }
  }

  /**
   * Idiomatic JS Enums (string) via object
   */
  const idiomaticStringEnums = () => {
    const Colors = {
      Red: 'RED',
      Green: 'GREEN',
      Blue: 'BLUE'
    } as const
    // merge implementation with "Enum" typed literal
    type Colors = ObjectValues<typeof Colors>

    const test = () => {
      // 👉 yup no ERROR ✅
      const test: Colors = 'RED'
      // 👉 yup no ERROR ✅
      const test2: Colors = 'RED'
      const test3: Colors = Colors.Red

      function favoriteColor(name: string, color: Colors) {}

      // 👉 yup no ERROR ✅
      favoriteColor('unknown', 'RED')
      favoriteColor('unknown', Colors.Red)
      favoriteColor('unknown', Colors.Green)
    }
  }
}

// ======================

const bad = () => {
  enum Response {
    No,
    Yes
  }

  enum Colors {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
  }

  function respond(recipient: string, message: Response) {}

  function favoriteColor(name: string, color: Colors) {}

  // TEST

  {
    // TypeScript Enums

    // $ExpectError 💥 NOPE  !!!
    const test: Response.No = 4
    // $ExpectError
    const test2: Response.Yes = Response.No
    // $ExpectError
    const test3: Response.Yes = 'hello'

    // $ExpectError 💥 NOPE  !!!
    respond('unknown', 4)
    respond('unknown', Response.No)
    respond('unknown', Response.Yes)
    // $ExpectError
    respond('unknown', 'ups')
  }

  {
    // TypeScript String Enums

    // $ExpectError
    const test: Colors.Red = 'RED'
    // $ExpectError
    const test2: Colors = 'RED'
    const test3: Colors = Colors.Red

    // $ExpectError
    favoriteColor('unknown', 'RED')
    favoriteColor('unknown', Colors.Red)
    favoriteColor('unknown', Colors.Green)
  }
}

const good = () => {
  type ObjectValues<T extends object> = T[keyof T]

  // $ExpectType { No: 1; Yes: 2; }
  const Response = {
    // we need to explicit cast values to get proper literal type
    No: 1,
    Yes: 2
  } as const
  // merge implementation with "Enum" typed literal
  // $ExpectType 1 | 2
  type Response = ObjectValues<typeof Response>

  // $ExpectType { Red: "RED"; Green: "GREEN"; Blue: "BLUE"; }
  const Colors = {
    Red: 'RED',
    Green: 'GREEN',
    Blue: 'BLUE'
  } as const
  // merge implementation with "Enum" typed literal
  // $ExpectType "RED" | "GREEN" | "BLUE"
  type Colors = ObjectValues<typeof Colors>

  function favoriteColor(name: string, color: Colors) {}

  function respond(recipient: string, message: Response) {}

  // TESTS

  {
    // Idiomatic JS Enums via object

    // $ExpectError 👉 yup catched 👌
    const test: Response = 4
    // NO ERROR
    const test2: Response = Response.No
    // $ExpectError
    const test3: Response = 'hello'

    // $ExpectError 👉 yup catched 👌
    respond('unknown', 4)
    respond('unknown', Response.Yes)
    respond('unknown', Response.No)
    respond('unknown', 1)
    // $ExpectError
    respond('unknown', 'ups')
  }

  {
    // Idiomatic JS Enums via object

    // 👉 yup no ERROR 👌
    const test: Colors = 'RED'
    // 👉 yup no ERROR 👌
    const test2: Colors = 'RED'
    const test3: Colors = Colors.Red

    // 👉 yup no ERROR 👌
    favoriteColor('unknown', 'RED')
    favoriteColor('unknown', Colors.Red)
    favoriteColor('unknown', Colors.Green)
  }
}
