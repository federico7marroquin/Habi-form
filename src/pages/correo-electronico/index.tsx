import Head from 'next/head'
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
      <div>Correo electrónico</div>
    </>
  )
}

export default Email
