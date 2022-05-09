import { useAppSelector } from '@/hooks/useReduxHooks'
import { resumeSelector } from '@/store/resume'
import { Card } from '@/styles/Home'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/habi_silluete.png'
import { Subtitle, Header, Section, Main } from './styles'

export const Resume = () => {
  const resume = useAppSelector(resumeSelector)

  return (
    <Card as="section">
      <Subtitle>
        <p>Resumen de tu inmueble</p>
      </Subtitle>
      <Section>
        <Header>
          <Image src={Logo} alt="Silueta de Habi" />
          <p>Información de tu inmueble</p>
        </Header>
        <Main>
          <ul>
            {resume.length > 0 ? (
              resume.map((item) => (
                <li key={item.id}>
                  <span>{item.label}: </span> {item.value}
                </li>
              ))
            ) : (
              <li>Aun no has registrado información...</li>
            )}
          </ul>
        </Main>
      </Section>
    </Card>
  )
}
