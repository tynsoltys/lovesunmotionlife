import React, { Component } from "react"

const StateContext = React.createContext()

export class StateContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPath: this.props.path,
      pageType: this.props.pageContext.type,
      ulad: this.props.path.substr(-3),
    }
  }

  render() {
    console.log(`HERE`, this.state)
    const { children, location } = this.props

    return (
      <StateContext.Provider value={this.state}>
        {children}
      </StateContext.Provider>
    )
  }
}

export const StateContextConsumer = StateContext.Consumer
