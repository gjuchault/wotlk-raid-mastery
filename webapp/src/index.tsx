import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { WotlkRaidMastery } from './components/WotlkRaidMastery/WotlkRaidMastery'
import { store } from './store'

import './index.css'

const App: React.FC = () => (
  <Provider store={store}>
    <WotlkRaidMastery />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
