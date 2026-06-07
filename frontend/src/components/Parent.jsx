//import React from 'react'

import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <Child name="sibi" age={20} marks={[90,92,93,94,95]} person={{name:"sibi",dept:["ct"]}}/>
    </div>
  )
}

export default Parent  