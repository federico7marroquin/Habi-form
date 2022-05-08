export const addressValidate = (values: { address: string }) => {
  const errors: Partial<{ address: string }> = {}
  if (!values.address) {
    errors.address = 'La dirección es requerida'
  } else if (values.address.length > 40) {
    errors.address = 'Debe ser menor de 40 carácteres'
  }

  return errors
}
