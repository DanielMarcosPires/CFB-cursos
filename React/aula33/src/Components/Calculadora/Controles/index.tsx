import { Component } from 'react'
import './css/style.css'

interface ComponentChildren{
    children:React.ReactNode
}

export default class Controles extends Component<ComponentChildren> {
    render() {
        return (
            <ul className='controles'>
                {this.props.children}
            </ul>
        )
    }
}
