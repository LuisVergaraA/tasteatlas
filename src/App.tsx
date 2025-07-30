import './App.css'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';  // <-- Asegúrate que es Grid2
import DishTable from './components/DishTable';
import Student from './components/Student';
import { type Dish } from './interface/Dish';

function App() {
  const url =
    'https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json';

  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error('Error al cargar los datos:', err));
  }, []);

  return (
    <Grid container spacing={5} padding={3}>
      <Grid size={{ xs: 12 }}>
        <Student apellidos="Vergara Arellano" nombres="Luis Enrique" paralelo={2} />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <DishTable data={dishes} />
      </Grid>
    </Grid>
  );
}

export default App;
