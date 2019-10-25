import React, {Component, PureComponent} from 'react'

// function Comment ({comment}) {
//     return (
//         <div>{comment.body} ------- {comment.author}</div>
//     )
// }
// class Comment extends PureComponent {
//     constructor(props) {
//         super(props)
//     }

//     // shouldComponentUpdate(nextProps) {
//     //     if (nextProps.comment.body === this.props.comment.body &&
//     //         nextProps.comment.body === this.props.comment.body) {
//     //         return false        
//     //     }
//     //     return true
//     // }

//     render() {
//         console.log('render')
//         return (
//             <div>{this.props.body} ------- {this.props.author}</div>
//         )
//     }
// }

const Comment = React.memo(({body, author}) => {
    console.log('render')
    return (
        <div>{body} ------- {author}</div>
    )
})

export default class CommentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    {body: 'React is very good', author: 'facebook'},
                    {body: 'Vue is very good', author: 'youyuxi'}
                ]
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) =>(
                    <Comment key={i} {...c}></Comment>
                ))}
            </div>
        )
    }
}