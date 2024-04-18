
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Detail() {

  const { idDog } = useParams() //3. Es el objeto que se está formado por la propiedad con el nombre que le pusimos en app (idDog), y el valor que le esta llegando en Card. Como es un objeto, lo podemos desestructurar pero tiene que coincidir el nombre que pongamos aca con lo que hayamos puesto en la ruta en app.jsx. Sigue abajo.
  console.log(idDog);



  const [dogDetail, setDogDetail] = useState([]) // Guarda todo el detalle de lo que llegue en la url

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/${idDog}`); // 4. Aca termina esta ruta ya que estamos diciendo que el detalle que tiene que ir a buscar en la api depende del id que llegue. Es decir, este id no llega por prop sino por ser el valor del objeto creado en useParams.
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
