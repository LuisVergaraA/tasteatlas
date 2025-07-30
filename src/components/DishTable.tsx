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
          <TableCell align="right">{row.title}</TableCell>
          <TableCell align="right">{row.country}</TableCell>
          <TableCell align="right">{row.rating.toFixed(2)}</TableCell>
          <TableCell align="right">{row.iconic}</TableCell>
          <TableCell align="right">{row.ingredients}</TableCell>
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
            <TableCell align="center">Puesto</TableCell>
            <TableCell align="center">Plato</TableCell>
            <TableCell align="center">País</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Restaurantes Icónicos</TableCell>
            <TableCell align="center">Ingredientes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}

