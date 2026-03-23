import css from './Input.module.css'
import { useState } from 'react'


export default function Input({label, type, placeholder}) {
    const [input, setInput] = useState('')

    function alterarInput(e) {
        setInput(e.currentTarget.value)
    }


    return (
        <div>
            <label className="form-label">{label}</label>
            <input type={type} className="form-control" onChange={alterarInput} value={input}
                   placeholder={placeholder}/>
        </div>


    )
}