import React, { Component } from 'react'

function withName (Comp) {

    class hoc extends Component {
        componentDidMount () {
            console.log('do something')
        }

        render () {
            return <Comp {...this.props} name="gaojiezujian" />
        }
    }

    return hoc
}

function WithLog (Comp) {
    console.log(Comp.name + '调用了')
    return props => <Comp {...props} />
}


class Kaikeba extends Component {

    render () {

        return (
            <div>{this.props.state} ----- {this.props.name}</div>
        )
    }
}



export default WithLog(WithLog(withName(Kaikeba)))
