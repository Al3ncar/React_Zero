export default function Challenge (){
    let [n1, n2] = [5, 2] 
    return( 
        <>
            <h3>Desafio 1</h3>
            <p>{n1}</p>
            <p>{n2}</p>
            <button onClick={() => console.log(n1 + n2)}> Somar </button>
        </>
    )
}