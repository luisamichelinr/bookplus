import css from './Input.module.css'


export default function Input({label, type, placeholder, input, setInput}) {
    return (
        <div>
            <label className="form-label">{label}</label>
            <input type={type} className="form-control" onChange={setInput} value={input}
                   placeholder={placeholder}/>
        </div>


    )
}