// EX CONTAIN CARD

import Card from "../components/Card"
import { Grid } from '@mui/material';

import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=10&page=0`); 
        console.log(data);
        setPets(data);         
      } catch (error) {
            console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [])


  return (
/*     <Box sx={{ border: '1px dashed grey' }}> */
      <Grid container>
        { 
          pets.map(({ id, name, origin, reference_image_id }) => (
            <Grid item key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card
                id={id}
                name={name}
                origin={origin}
                idImg={reference_image_id}
              />
            </Grid>
            )
          )
        }
      </Grid>
    /* </Box> */
  )
}


// []