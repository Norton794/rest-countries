export default props =>{
    return(
        <div>
            {props.bords.map(borders=>(
                <a key={borders.tld}>{borders.name.common}</a>
            ))}
        </div>
    )
}