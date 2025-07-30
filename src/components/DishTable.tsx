import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { type Dish } from '../interface/Dish';

export default function DishTable({ data }: { data: Dish[] }) {
  const [rows, setRows] = useState<Dish[]>([]);

  useEffect(() => {
    setRows(data);
  }, [data]);

  const getRows = () => {
    if (rows.length) {
      return rows.slice(0, 10).map((row) => (
        <TableRow
          key={row.position}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>{row.position}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.country}</TableCell>
          <TableCell align="right">{row.rating.toFixed(2)}</TableCell>
          <TableCell>{row.iconic}</TableCell>
          <TableCell>{row.ingredients}</TableCell>
        </TableRow>
      ));
    } else {
      return (
        <TableRow>
          <TableCell colSpan={7} align="center">
            No data
          </TableCell>
        </TableRow>
      );
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="dish table">
        <TableHead>
          <TableRow>
            <TableCell>Puesto</TableCell>
            <TableCell>Plato</TableCell>
            <TableCell>País</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell>Restaurantes Icónicos</TableCell>
            <TableCell>Ingredientes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}

