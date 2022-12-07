import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlaceIcon from '@mui/icons-material/Place';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function createData(start, end, exit, arrive, price) {
  return { start, end, exit, arrive, price};
}

const rows = [
  createData('Rancagua',"La Punta", "12:00", "13:00", 1100),
  createData('Rancagua',"La Punta", "14:00", "15:00", 1100),
  createData('Rancagua',"La Punta", "16:00", "17:00", 1100),
  createData('Rancagua',"La Punta", "18:00", "19:00", 1100),

];

export default function BasicTable() {
  return (
    <TableContainer align="center" component={Paper}>
      <Table sx={{ minWidth: 350, maxWidth: 1500}} aria-label="simple table">
        <TableHead className='palette.secondary.light'>
          <TableRow>
            <TableCell align="center">Desde</TableCell>
            <TableCell align="center">Hasta</TableCell>
            <TableCell align="center">Salida</TableCell>
            <TableCell align="center">LLegada</TableCell>
            <TableCell align="center">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row"><PlaceIcon fontSize='small'/>{row.start}</TableCell>
              <TableCell align="center"><PinDropIcon fontSize='small'/>{row.end}</TableCell>
              <TableCell align="center"><AccessTimeFilledIcon fontSize='small'/>{row.exit}</TableCell>
              <TableCell align="center"><AccessTimeFilledIcon fontSize='small'/>{row.arrive}</TableCell>
              <TableCell align="center"><AttachMoneyIcon/>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}