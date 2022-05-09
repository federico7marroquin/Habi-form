import { pageSelector } from '@/store/stepper'
import { PageNavigation } from '@/types/Page'
import { useRouter } from 'next/router'
import { AppState } from '../store'
import { useAppSelector } from './useReduxHooks'

/**
 * custom hook. returns an array with two callbacks, it allows to navigate back and forth the website
 * @param path
 * @returns  [goToPreviousPage, goToNextPage]
 */
export const useAppNavigation = () => {
  const router = useRouter()
  const { nextPath, prevPath, step }: PageNavigation = useAppSelector(
    (state: AppState) => pageSelector(state, router.asPath.split('/')[1])
  )
  const goToPreviousPage = () => {
    router.push(prevPath)
  }

  const goToNextPage = () => {
    router.push(nextPath)
  }
  return { goToPreviousPage, goToNextPage, step }
}
