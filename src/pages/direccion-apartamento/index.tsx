import Head from 'next/head'
import { AddressDataContainer } from '@/containers/AddressDataContainer'
/**
 * Page that represents the third step 3
 *  "Tercer paso: Dirección del apartamento"
 * @returns page
 */
const address = () => {
  return (
    <>
      <Head>
        <title>Dirección de apartamento</title>
        <meta
          name="description"
          content="Tercer paso del formulario: Dirección de apartamento.  El usuario debe ingresar la dirección del apartamento"
        />
      </Head>
      <AddressDataContainer />
    </>
  )
}

export default address
