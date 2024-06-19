import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppError } from '../../app/app-reducer.ts'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage: string
  if (isAxiosError<ServerErrorType>(e)){
    errorMessage = e.response ? e.response.data.errorMessage[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(setAppError(errorMessage))
}

type ServerErrorType = {
  errorMessage: Array<{field: string, message: string}>
}