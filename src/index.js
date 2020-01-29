import React from 'react'
import ReactDOM from 'react-dom'

import { Card, Button } from '../src/framework/widgets/export'

class App extends React.Component {
  render () {
    return (
      <Card>
        <Button>this is test 2</Button>
      </Card>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
