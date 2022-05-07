import Head from 'next/head'
/**
 * Page that represents the first step 1
 *  "Primer paso: Nombre y apellidos en un solo campo"
 * @returns page
 */
const ClientData = () => {
  return (
    <>
      <Head>
        <title>Datos del cliente</title>
        <meta
          name="description"
          content="Primer paso del formulario: Datos persones. El usuario debe de digitar el nombre y apellidos"
        />
      </Head>
      <div>Datos de ciente</div>
    </>
  )
}

export default ClientData
