import "./styles.css";

const ItemList = ({valor, handleRemoveRepos}) => {

    const handleRemove = () =>{
        handleRemoveRepos(valor.id)
    }

    return (
        <div className="item">

            <h1>{valor.name}</h1>
            <h3>{valor.description}</h3>

            <div className="comandos">
            <span className="acessar"><a href={valor.svn_url} target="_blank">Acessar Repositório</a></span>
            <span className="apagar" onClick={handleRemove}>Apagar Repositório</span>
            </div>

            <hr />
            
        </div>
    )
}

export default ItemList;