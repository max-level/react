import React, { Component } from 'react'

const Context = React.createContext()

const store = {
    name: '开课吧',
    sayHi() {
        console.log(this.name)
    }
}

export default class ContextExp extends Component {
    render() {
        return (
            <Context.Provider value={store}>
                <div>
                    <Context.Consumer>
                        {value => <div onClick={() => value.sayHi()}>{value.name}</div>}
                    </Context.Consumer>
                </div>
            </Context.Provider>
        )
    }
}
