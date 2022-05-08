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

import { addressValidate as validate } from '@/utils/Validations'

export const AddressDataContainer = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('submit', values)
      router.push('/numero-piso')
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label htmlFor="address">Dirección del inmueble</Label>
        <Input
          id="address"
          name="address"
          type="address"
          placeholder="Calle 23 # 75 - 19"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address ? (
          <ErrorLabel>{formik.errors.address}</ErrorLabel>
        ) : null}
      </FormControl>
      <ButtonGroup>
        <Button
          label="Regresar"
          type="button"
          onClick={() => router.push('/correo-electronico')}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
