export default function Challenge (){
    let [a, b] = [15, 20];
    return( 
        <>
            <h3>Desafio 2</h3>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={() => console.log(a + b)}> Somar </button>
        </>
    )
}; 

// ---- Outros codigos com lógicas diferentes ---- //

/* 
const Challenge = () => {
    let valor1 = 10, valor2 = 90;
    function mostra_numero(){
        return <div>{valor1+valor2}</div>
    }
    
    return (
        <>
            <p>{valor1}</p>
            <p>{valor2}</p>

            <button onClick={mostra_numero}>Clique </button>
        </>
    );
};
 

export default Challenge;
*/

/* import React from 'react'

const Challenge = () => {
 const a = 10
 const b = 20


  return (
    <div>
        <p>A {a}</p>
        <p>B {b}</p>

        <h1>A soma de a + b é igual a {a + b}</h1>
    </div>
  )
}

export default Challenge
 */