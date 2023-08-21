import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Calculadora.css'
import Boton from './componentes/Boton'

function Calculadora() {
  const [dato, setDato] = useState({operacion:'',resultado:''})

  const captura=(evento)=>{
    //console.log(evento);
    const valor=evento.target.innerText;
    const laOperacion= valor==='+' || valor==='-' || valor==='*' || valor==='/' || valor==='+/-' || valor==='%';

    if(dato.operacion.length>=10) return
    if(valor==='+/-' && dato.operacion==='') return

    if (valor==='+/-' && dato.operacion !== '') {
      if (dato.operacion.slice(0,1)==='-') {
        setDato({...dato,operacion:`${dato.operacion.slice(1,dato.operacion.length)}`});
      }else{
        setDato({...dato, operacion:`-${dato.operacion}`})
      }
    }else { 
      setDato({...dato,operacion: `${dato.operacion}`+valor});
    }
    if(dato.resultado!=='' && laOperacion){
      setDato({...dato,operacion:`${dato.resultado}`+valor});
    }/**/

  }


  
  const borraultimo=()=>{
    setDato({...dato,operacion:dato.operacion.slice(0,dato.operacion.length-1)});
  }
  const borrar=()=>{
    setDato({...dato,operacion:'',resultado:''});
  }

  const resultado = () => {
    try {
      let calculando;
      if (dato.operacion.includes('%')) {
        console.log(dato.operacion);
        //setDato({...dato, operacion:`${dato.operacion}`})
        const operando=dato.operacion.split('%');
        //const calculando=eval(`${operando[0]}*${operando[1]}/100`);
        calculando=eval(`${operando[0]}*${operando[1]}/100`);
      }
      else{
        //const calculando=eval(dato.operacion);
        calculando=eval(dato.operacion);
      }
      const elcalculo=calculando.toString();
      //console.log(typeof(elcalculo))
      if(elcalculo.length>=10){
        //console.log('mayor')
        setDato({...dato,resultado:`${elcalculo.slice(0,9)}`});
      }
      else{
        //console.log('menor')
        setDato({...dato,resultado:calculando}); 
      }
    } catch (error) {
      //console.log(error);
      setDato({...dato,resultado:'Error'});
    }
   
  }
  return (
    <main>
      <span className='operacion'>{dato.operacion}</span>
      <span className='resultado'>{dato.resultado}</span>
      <Boton texto='AC' clase='limpiar' botonclick={borrar}/>
      <Boton texto='«x' clase='limpiar' botonclick={borraultimo}/>
      <Boton texto='%' clase='operaciones'botonclick={captura}/>
      <Boton texto='/' clase='operaciones'botonclick={captura}/>
      <Boton texto='7' clase='numero' botonclick={captura}/>
      <Boton texto='8' clase='numero' botonclick={captura}/>
      <Boton texto='9' clase='numero' botonclick={captura}/>
      <Boton texto='*' clase='operaciones'botonclick={captura}/>
      <Boton texto='4' clase='numero' botonclick={captura}/>
      <Boton texto='5' clase='numero' botonclick={captura}/>
      <Boton texto='6' clase='numero' botonclick={captura}/>
      <Boton texto='-' clase='operaciones'botonclick={captura}/>
      <Boton texto='1' clase='numero' botonclick={captura}/>
      <Boton texto='2' clase='numero' botonclick={captura}/>
      <Boton texto='3' clase='numero' botonclick={captura}/>
      <Boton texto='+' clase='operaciones'botonclick={captura}/>
      <Boton texto='.' clase='numero'botonclick={captura}/>
      <Boton texto='0' clase='numero' botonclick={captura}/>
      <Boton texto='+/-' clase='cambiosigno'botonclick={captura}/>
      <Boton texto='=' clase='igual'botonclick={resultado}/>
    </main>
  )
}

export default Calculadora
