export const floorValidate = (values: { floor: number }) => {
  const errors: Partial<{ floor: string }> = {}
  if (values.floor > 50) {
    errors.floor = 'Por favor ingrese un valor valido'
  } else if (values.floor === 0) {
    errors.floor = 'El número de piso no puede ser 0'
  } else if (values.floor < 0) {
    errors.floor = 'El número de piso no pueder ser negativo'
  } else if (!values.floor) {
    errors.floor = 'El número de piso es requerido'
  }

  return errors
}
