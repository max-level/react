import React, {Component} from 'react'

function Dialog(props) {
    return (
        <div style={{border: `4px solid ${props.color || 'blue'}`}}>
            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}

function WelcomDialog(props) {
    const confirmBtn = <button onClick={() => alert('ok')}>确定</button>
    return (
        <Dialog color="green" footer={confirmBtn}>
            <h1>欢迎光临</h1>
            <p>balabala</p>
        </Dialog>
    )
}

export default class Composition extends Component {
    render() {
        return (
            <WelcomDialog></WelcomDialog>
        )
    }
}