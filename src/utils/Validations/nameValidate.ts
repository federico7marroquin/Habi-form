export const nameValidate = (values: { name: string }) => {
  const errors: Partial<{ name: string }> = {}
  if (!values.name) {
    errors.name = 'El nombre es requerido'
  } else if (values.name.length < 5) {
    errors.name = 'Debe ser mayor de 5 carácteres'
  } else if (values.name.length > 20) {
    errors.name = 'Debe ser menor de 20 carácteres'
  }

  return errors
}
