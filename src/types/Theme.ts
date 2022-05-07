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
      color: string
      background: string
      hover: string
    }
    secondary: {
      color: string
      background: string
      hover: string
    }
  }
}
