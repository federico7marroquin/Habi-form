import Head from 'next/head'
import { FloorDataContainer } from '@/containers/FloorDataContainer'
/**
 * Page that represents the fourth step 4
 *  "Cuarto paso: Un campo que me permita elegir el número de piso donde se
 *  encuentra mi apartamento, el usuario máximo puede poner 50"
 * @returns page
 */
const FloorNumber = () => {
  return (
    <>
      <Head>
        <title>Número de piso</title>
        <meta
          name="description"
          content="Cuarto paso del formulario: Número de piso.  El usuario debe ingresar el número de piso donde se encuentra el apartamento"
        />
      </Head>
      <FloorDataContainer />
    </>
  )
}

export default FloorNumber
