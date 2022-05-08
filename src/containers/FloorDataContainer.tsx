import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { Button } from '@/components/Button'
import {
  ButtonGroup,
  Form,
  FormControl,
  Input,
  Label,
  ErrorLabel,
} from '@/styles/Form'

import { floorValidate as validate } from '@/utils/Validations'

export const FloorDataContainer = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      floor: 0,
    },
    validate,
    onSubmit: (values) => {
      console.log('submit', values)
      router.push('/opciones-inmueble')
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label htmlFor="floor">Piso</Label>
        <Input
          id="floor"
          name="floor"
          type="number"
          placeholder="¿En qué piso se encuentra tu apartamento?"
          onChange={formik.handleChange}
          value={formik.values.floor}
        />
        {formik.errors.floor ? (
          <ErrorLabel>{formik.errors.floor}</ErrorLabel>
        ) : null}
      </FormControl>
      <ButtonGroup>
        <Button
          label="Regresar"
          type="button"
          variant="secondary"
          onClick={() => router.push('/direccion-apartamento')}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
