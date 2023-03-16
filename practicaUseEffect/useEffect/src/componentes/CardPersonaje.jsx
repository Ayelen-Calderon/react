
import { useEffect , useState  } from "react"
import "../hoja-de-estilos/cards.css"

const CardPersonaje = () => {
const url =  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4bad166a9f589e84f06deef71ad2b0bb&hash=a251780ceb29818edee7eaf56851058d"

const [value, setValue]= useState([])
useEffect(() => {

  fetch(url)
  .then((resp)=>resp.json())
  .then((data)=> {
    setValue(data.data.results)
  })
  .catch((err)=>{
    console.log(err);
  })
  
},[])

console.log(value);

  return (
    <div className="contenedorCard">
            {value.map(value => (
                <div className="card" key={value.id}>
                    <h3>{value.name}</h3>
                  <img className="card-img"  src={`${value.thumbnail.path}.${value.thumbnail.extension}`}  alt="" />
                </div>
            ))}
        </div>
  )
}

export default CardPersonaje
