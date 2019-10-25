import React, { Component } from 'react'
import { Button } from 'antd'

// 函数组件传递props
function Welcome (props) {
    return (
        <h1>{props.name}</h1>
    )
}

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            count: 0
        }
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);

        this.setState((prevState, prevProps) => ({
            count: prevState.count + 1
        }))
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }



    render () {
        return (
            <div>
                {/* antd */}
                <Button type="primary">button</Button>
                <Welcome name="guoyanhao"></Welcome>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p>{this.state.count}</p>
            </div>
        )
    }
}