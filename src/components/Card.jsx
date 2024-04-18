
import { Card as CardMUI, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Card({ id, name, origin, idImg }) {

  const navegazion = useNavigate()

  // ESTA FUNCION SIRVE PARA PONER ALGUNA OTRA ACCION ADENTRO. SINO PUEDE IR DIRECTAMENTE AL ONCLICK Y NO PONER ESTA FUNCION
  // const redireccion = () => { 
  //   navegazion(`detail/${id}`) 
  // }

  return (
    <CardMUI sx={{ maxWidth: 345 }} onClick={() => navegazion(`detail/${id}`)} >
      <CardMedia
        sx={{ height: 140 }}
        image={`https://cdn2.thedogapi.com/images/${idImg}.jpg`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {origin}
        </Typography>
      </CardContent>
    </CardMUI>
  )
}
