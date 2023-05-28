const EventClick = () => {
    const handleClick = (e) => {
        console.log(e)
    }
    return(
        <>
            <div>
                <h3> 4 - EventClick </h3>
                <button onClick={handleClick}> Click Aqui </button>
            </div>
        </>
    )
}
export default EventClick;