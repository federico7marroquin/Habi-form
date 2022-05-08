import React from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/Button'
import {
  ButtonGroup,
  Form,
  FormControl,
  CheckboxGroup,
  CheckboxLabel,
  Checkbox,
  Label,
} from '@/styles/Form'
import { NavigationFunctions } from '@/types/Page'

const Options = [
  { id: 1, label: ' Zona BBQ' },
  { id: 2, label: 'salón comunal' },
  { id: 3, label: ' parque de juegos' },
]

export const OptionsDataContainer = ({
  goToPreviousPage,
  goToNextPage,
}: NavigationFunctions) => {
  const formik = useFormik({
    initialValues: {
      checked: [],
    },
    onSubmit: (values) => {
      console.log('submit', values)
      goToNextPage()
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Label textAlign="center" htmlFor="toggle">
          ¿Con cuáles de las siguientes características cuenta tu apartamento?
        </Label>
        <CheckboxGroup role="group" aria-labelledby="checkbox-group">
          {Options.map(({ id, label }) => (
            <CheckboxLabel key={id}>
              <Checkbox
                type="checkbox"
                name="checked"
                value={id}
                onChange={formik.handleChange}
              />
              {label}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
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
