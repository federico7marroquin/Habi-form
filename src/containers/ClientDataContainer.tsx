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

import { nameValidate as validate } from '@/utils/Validations'

export const ClientDataContainer = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('submit', values)
      router.push('/correo-electronico')
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label htmlFor="name">Nombres y apellidos completos</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="¿Cómo te llamas?"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <ErrorLabel>{formik.errors.name}</ErrorLabel>
        ) : null}
      </FormControl>
      <ButtonGroup>
        <Button
          label="Regresar"
          type="button"
          variant="secondary"
          onClick={() => router.push('/')}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
