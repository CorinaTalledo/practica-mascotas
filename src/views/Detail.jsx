
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Detail() {

  const { idDog } = useParams() //Es un objeto, lo podemos desestructurar pero tiene que coincidir el nombre que pongamos con lo que hayamos puesto en la ruta en app.jsx
  console.log(idDog);


  const [dogDetail, setDogDetail] = useState([]) // Guarda todo el detalle de lo que llegue en la url

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/${idDog}`); // Este id no llega por prop sino que E MAGIKOH por el camino que hace router
        console.log(data);
        setDogDetail(data);         
      } catch (error) {
            console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [])


  return (
    <div>
      - NOMBRE: {dogDetail.name} <br />
      - ORIGEN: {dogDetail.origin ? dogDetail.origin : "Desconocido"}
    </div>
  )
}
