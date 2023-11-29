import { Component} from 'react'
import './css/style.css'
import Controles from './Controles';

interface Calculadora {
    children: React.ReactNode,
    Tela:string
}

class Calculadora extends Component<Calculadora> {
    static Controles = Controles;

    render() {
        return (
            <section className='calculadora'>
                <span className='calculadoraDisplay'>
                    {this.props.Tela}
                </span>
                {this.props.children}
            </section>
        )
    }
}

export default Calculadora
