export namespace Validation {
  export interface StringValidator {
    isAcceptable: (s: string) => void
  }

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {}
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {}
  }
}

// ==================

/*
export interface StringValidator {
  isAcceptable: (s: string) => void
}

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {}
}

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {}
}
 */
