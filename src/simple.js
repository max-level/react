import React, { Component } from 'react'


function Cart (props) {
    console.log('gyh', props.data)
    return (
        <table>
            <tbody>
                {props.data.map(d => (
                    <tr key={d.title}>
                        <td>{d.title}</td>
                        <td>{d.price}</td>
                        <td>{d.count}</td>
                        <td>{d.price * d.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default class Simple extends Component {
    constructor(props) {
        super(props)

        this.state = {
            goods: [
                {
                    id: 1,
                    title: 'good1',
                    price: 666
                },
                {
                    id: 2,
                    title: 'good2',
                    price: 666
                }
            ],
            text: '',
            cart: []
        }
    }

    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addGood = () => {
        this.setState(prevState => ({
            goods: [...prevState.goods, { id: 3, price: 666, title: prevState.text }]
        }))
    }

    addToCart = (good) => {
        const newCart = this.state.cart
        const idx = newCart.findIndex(item => item.title === good.title)
        const newItem = newCart[idx]

        if (newItem) {
            newCart.splice(idx, 1, { ...newItem, count: newItem.count + 1 })
        } else {
            good.count = 1
            newCart.push(good)
        }

        this.setState({ cart: newCart })
    }

    render () {
        const title = this.props.title ? <h1>{this.props.title}</h1> : null
        const goods = this.state.goods.map(good => <li key={good.id}>{good.title} <button onClick={() => { this.addToCart(good) }}>加购</button></li>)
        return (
            <div>
                {title}
                {/* 添加商品 */}
                <input type="text" value={this.state.text} onChange={e => this.changeText(e)} />
                <button onClick={this.addGood}>添加商品</button>
                <ul>
                    {goods}
                </ul>

                {/* 购物车 */}
                <Cart data={this.state.cart}></Cart>
            </div>
        )
    }
}