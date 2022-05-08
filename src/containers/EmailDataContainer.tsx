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

import { emailValidate as validate } from '@/utils/Validations'

export const EmailDataContainer = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('submit', values)
      router.push('/direccion-apartamento')
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="¿Cuál es tu correo electrónico?"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <ErrorLabel>{formik.errors.email}</ErrorLabel>
        ) : null}
      </FormControl>
      <ButtonGroup>
        <Button
          label="Regresar"
          type="button"
          onClick={() => router.push('/datos-cliente')}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
