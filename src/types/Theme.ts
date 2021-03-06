export type Theme = {
  text: {
    primary: string
    secondary: string
  }
  error: string
  success: string
  info: string
  input: {
    text: string
    error: string
    idle: {
      background: string
      border: string
    }
    focus: {
      background: string
      border: string
    }
  }
  button: {
    primary: {
      idle: {
        color: string
        background: string
      }
      hover: {
        color: string
        background: string
      }
    }
    secondary: {
      idle: {
        color: string
        background: string
      }
      hover: {
        color: string
        background: string
      }
    }
  }
}
