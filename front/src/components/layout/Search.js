import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

    const searchHandler =(e)=>{
        e.preventDefault();

        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }
        else{
            navigate("/")
        }
    }
    console.log(keyword)


  return (
    <form onSubmit={searchHandler}>
        <div className='input-group'>
            <input
              type="text"
              id="search_field"
              class="form-control"
              placeholder='¿Que estas buscando?'
              onChange={(e)=> setKeyword(e.target.value)}
            />
            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i class="fa-sharp fa-solid fa-magnifying-glass text-white">Buscar</i>
              </button>
            </div>
          </div>
    </form >
  );
}
