import './TextField.css'

const TextField = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default TextField;