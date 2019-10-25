import React, { Component } from 'react'

export default class LifeCycle extends Component {
    
    constructor(props) {
        super(props)

        console.log('1 constructor')
    }

    componentWillMount(){
        console.log('2 组件将挂在')
    }

    componentDidMount () {
        console.log('3 组件已挂在')
    }

    componentWillReceiveProps() {
        console.log('4. 父组件传递的属性有变化 组件更新了')
    }

    shouldComponentUpdate(){
        // 组件是否需要更新 返回布尔值
        console.log('5. 组件是否应该更新？');
        return true
    }

    componentWillUpdate(){
        console.log('6.组件将要更新')
    }
    componentDidUpdate(){
        console.log('7. 组件已经更新')
    }

    render(){
        console.log('组件渲染')
        return (
            <div>
                组件生命周期的探究
            </div>
        )
    }
}