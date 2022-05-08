export const emailValidate = (values: { email: string }) => {
  const errors: Partial<{ email: string }> = {}
  if (!values.email) {
    errors.email = 'Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Correo electrónico invalido'
  }

  return errors
}
