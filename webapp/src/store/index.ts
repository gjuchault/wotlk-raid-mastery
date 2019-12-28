import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer as raids } from './raids/reducer'
import { reducer as players } from './players/reducer'
import { reducer as ui } from './ui/reducer'
import { reducer as analyze } from './analyze/reducer'

const reducer = combineReducers({
  raids,
  players,
  ui,
  analyze
})

export type State = ReturnType<typeof reducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any
  }
}

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
