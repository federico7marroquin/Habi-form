import Head from 'next/head'
import { EmailDataContainer } from '@/containers/EmailDataContainer'
/**
 * Page that represents the second step 2
 *  "Segundo paso: Correo solo deben permitirse correos válidos"
 * @returns page
 */
const Email = () => {
  return (
    <>
      <Head>
        <title>Correo electrónico</title>
        <meta
          name="description"
          content="Segundo paso del formulario: Correo electrónico.  El usuario debe ingresar el correo electrónico"
        />
      </Head>
      <EmailDataContainer />
    </>
  )
}

export default Email
