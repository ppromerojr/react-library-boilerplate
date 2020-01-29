import React, { Fragment } from 'react'

import { Card, Button } from '../src/framework/widgets/export'

const App = () => {
  return (
    <Fragment>
      <Card>
        <Button>Card 1</Button>
      </Card>
      <Card>
        <Button>Card 2</Button>
      </Card>
    </Fragment>
  )
}

export default App
