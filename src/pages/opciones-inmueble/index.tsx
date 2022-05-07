import Head from 'next/head'
/**
 * Page that represents the fifth step 5
 *  "Quinto paso: Unos checkbox que me digan si el apartamento tiene alguna de las
 *  siguientes opciones: Zona BBQ, salón comunal, parque de juegos"
 * @returns page
 */
const PropertyOptions = () => {
  return (
    <>
      <Head>
        <title>Opciones</title>
        <meta
          name="description"
          content="Quinto paso del formulario: Opciones.  El usuario debe escoger las opciones con las que cuenta su inmueble"
        />
      </Head>
      <div>Opciones</div>
    </>
  )
}

export default PropertyOptions
