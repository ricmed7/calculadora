import './Boton.css'
const Boton=(params)=>{
    const {texto, clase, botonclick}=params;

    return <button className={clase} onClick={botonclick} > {texto} </button>
}

export default Boton;