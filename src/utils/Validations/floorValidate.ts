export const floorValidate = (values: { floor: number }) => {
  const errors: Partial<{ floor: string }> = {}
  if (!values.floor) {
    errors.floor = 'El número de piso es requerido'
  } else if (values.floor > 50 || values.floor < 0) {
    errors.floor = 'Por favor ingrese un valor valido'
  }

  return errors
}
