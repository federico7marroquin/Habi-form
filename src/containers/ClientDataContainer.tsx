import React from 'react'
import { useFormik } from 'formik'
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
import { NavigationFunctions } from '@/types/Page'

export const ClientDataContainer = ({
  goToPreviousPage,
  goToNextPage,
}: NavigationFunctions) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('submit', values)
      goToNextPage()
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
          onClick={goToPreviousPage}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
