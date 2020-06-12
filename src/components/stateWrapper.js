import React from "react"

const StateWrapper = ({ children, location }) => {
  return (
    <div>
      {console.log(location)}
      {children}
    </div>
  )
}

export default StateWrapper
