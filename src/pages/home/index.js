import { useState } from "react";
import "./styles.css";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import { api } from "../../services/api"

const App = () => {

  const [currentRepos, setCurrentRepos] = useState('');
  const [repos, setRepos] = useState([]);

  console.log(repos)

  const handleAdicionar = async () => {

    const validador = 0;
    const {data} = await api.get(`/${currentRepos}`);

    repos.map((item) => {
      if(item.id===data.id){
          validador++;
      }
    })
    
    if(validador===0){
      setRepos((prev) => [...prev, data])
    }

  }

  const handleRemove = (id) => {
      
    const attRepos = (arr) => {
        if(arr.id === id){
          return false
        } else {
          return true
        }
    }

    setRepos(() => repos.filter(attRepos));

  }

  return (
    <div className="App">

      <div className="conteudo">
        <header>

          <img src={background} className="logo" alt="logo"/>

          <div className="search">

          <div className="searchbar">

              <div className="padraoUrl"><span>https://github.com/</span></div>
              <input value={currentRepos} className="url" placeholder="Usuário/Repositorio" onChange={(e) => setCurrentRepos(e.target.value)}></input>

          </div>

          <div className="button">
            <button onClick={handleAdicionar}> Adicionar </button>
          </div>

          </div>

        </header>
        <hr />
        <main>
          {
              repos.map((item) => {

                return ( 
                <ItemList valor={item} handleRemoveRepos={handleRemove} />
                )


              })

          }

        </main>
      </div>
      
    </div>
  );
}

export default App;
