
const EventClick = () => {
    const handleClick = (e) => console.log(e)
    const handleReturnFalsoOrTrue = (x) => {
        if(x){
            return <p>Eu sou true</p>
        } else {
            return <p>Eu sou falso</p>
        }
    }

    return(
        <>
            <div>
                <h3> 4 - EventClick </h3>
                <button onClick={handleClick}> Click Aqui </button>
            </div>
            <div>
                <h4>1 - funções no evento onClick </h4>
                <button onClick={() => console.log('hehe fui clicado')}> Click aqui tambem!!</button>
            </div>
            <div>
                <h4>2 - funções no evento onClick </h4>
                <button onClick={() => {
                    if(true){
                        console.log(' Não sei se estou certo ')
                    }
                }}> Click aqui tambem!!</button>
            </div>
            <div>
                <h4>2 - funções de renderização</h4>
                {handleReturnFalsoOrTrue(true)}
                {handleReturnFalsoOrTrue(false)}
            </div>
        </>
    )
}
export default EventClick;