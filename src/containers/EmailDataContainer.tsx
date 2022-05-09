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

import { emailValidate as validate } from '@/utils/Validations'
import { NavigationFunctions } from '@/types/Page'
import { useAppDispatch } from '@/hooks/useReduxHooks'
import { updateField } from '@/store/resume'

export const EmailDataContainer = ({
  goToPreviousPage,
  goToNextPage,
}: NavigationFunctions) => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(updateField(values))
      goToNextPage()
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          autoFocus
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
          variant="secondary"
          onClick={goToPreviousPage}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
