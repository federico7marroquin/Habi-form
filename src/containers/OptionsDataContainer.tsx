import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
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

const Options = [
  { id: 1, label: ' Zona BBQ' },
  { id: 2, label: 'salón comunal' },
  { id: 3, label: ' parque de juegos' },
]

export const OptionsDataContainer = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      checked: [],
    },
    onSubmit: (values) => {
      console.log('submit', values)
      router.push('/resumen')
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
          onClick={() => router.push('/numero-piso')}
        />
        <Button type="submit" label="Siguiente" />
      </ButtonGroup>
    </Form>
  )
}
