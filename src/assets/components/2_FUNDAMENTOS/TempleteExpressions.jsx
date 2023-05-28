const TemplatExp = () => {
    const data = {
        name: "Igor Alencar", age: 18,
        job: "Programador"
    }
    return(
        <>  
            <h3> 2 - TempleteExpression  </h3>
            <p> Olá eu sou {data.name}, tenho {data.age} e sou um {data.job} </p>
            <p>{ 4 + 4 }</p>
        </>
    )
} 
export default TemplatExp;