import Head from 'next/head'
import { Page } from '@/types/Page'
import { GetStaticPaths } from 'next'
import { Layout } from '@/components/Layout'
import { SelectContainer } from '@/containers/SelectContainer'
import { store } from '@/store/index'
import { useAppNavigation } from '@/hooks/useAppNavigation'
import { Resume } from '@/components/Resume'
import { FlexContainer, ResumeWrapper } from '@/styles/AppStyles'
import { Modal } from '@/components/Modal'

const DynamicPage = ({ page }: { page: Page }) => {
  const { goToPreviousPage, goToNextPage } = useAppNavigation()
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
      </Head>
      <Layout>
        <>
          <FlexContainer>
            <SelectContainer
              navigationFunctions={{ goToPreviousPage, goToNextPage }}
              containerName={page.containerName}
            />
            <ResumeWrapper>
              <Resume />
            </ResumeWrapper>
          </FlexContainer>
          <Modal />
        </>
      </Layout>
    </>
  )
}

export default DynamicPage

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint or our json file to get the steps
  const { steps } = store.getState()
  const paths = steps.map((step) => ({
    params: { path: step.path },
  }))
  return {
    paths,
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps = async ({
  params,
}: {
  params: { path: string }
}) => {
  const { steps } = store.getState()

  const page = steps.find((configPath) => configPath.path === params.path)
  // Pass post data to the page via props
  return { props: { page } }
}
