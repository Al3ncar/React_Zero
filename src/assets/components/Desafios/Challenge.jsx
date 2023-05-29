export default function Challenge (){

    let [n1, n2] = [5, 2]
    let result = "";

    const handleAdd = () => {return n1 + n2};
    
    return( 
        <>
            <h3>Desafio 1</h3>
            <p>{n1}</p>
            <p>{n2}</p>
            <button onClick={handleAdd}> Somar </button>
            <p>{result}</p>
        </>
    )
}



/* export default function Challenge () {
    let [n1, n2] = [5, 2];
    let result;

    const handleAdd = () => {
        result: n1 + n2
    }


    return(
        <>
            <h3>Desafio 1</h3>
            <p>{n1}</p>
            <p>{n2}</p>
            <button onClick={ handleAdd }> SOMAR </button>
            {result}
        </>
    )
}
 */
