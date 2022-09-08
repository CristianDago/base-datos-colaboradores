const Buscador = (props) => {
    return (
        <>
           <input className="w-100 mb-3" placeholder="Busca un colaborador" type="text" value={props.filtro} onChange={(e) => props.setFiltro(e.target.value)} />
        </>
    )
    }
export default Buscador; 
    