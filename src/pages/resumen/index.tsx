import { Layout } from '@/components/Layout'
import { ResumeContainer } from 'Containers'
import Head from 'next/head'
/**
 * Page that represents the sixth step 6
 *  "Último paso: presentar el resumen de los datos que puso el usuario en el paso
 *  anterior"
 * @returns page
 */
const Review = () => {
  return (
    <>
      <Head>
        <title>Resumen</title>
        <meta
          name="description"
          content="Paso final del formulario: Resumen. Se presenta el resumen de los datos registrados por el usuario"
        />
      </Head>
      <Layout>
        <ResumeContainer />
      </Layout>
    </>
  )
}

export default Review
