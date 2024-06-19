export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

export type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET_APP_STATUS':
      return {...state, status: action.status}
    case 'APP/SET_APP_ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET_APP_STATUS' as const, status})
type SetAppStatusType = ReturnType<typeof setAppStatusAC>

export const setAppError = (error: string | null) => ({type: 'APP/SET_APP_ERROR' as const, error})
type SetAppErrorType = ReturnType<typeof setAppError>

type ActionsType = SetAppStatusType | SetAppErrorType
