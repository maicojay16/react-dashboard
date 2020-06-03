import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar, Grid, Tooltip } from '@material-ui/core/';
import { LinearIndeterminate } from './'
import { DeleteIcon, SendIcon } from '../icons/'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function createData(employee, progress, status, action) {
  return { employee, progress, status, action };
}

const rows = [
  createData('Jay Maico [Junior Web Developer]', '', 'Pending', ''),
  createData('German Manalili [Fullstack Developer]', '', 'Pending', ''),
  createData('Gau Gonzales [UX/UI Designer]', '', 'Pending', ''),
  createData('Jei Sama [Senior Web Developer]', '', 'Failed', ''),
  createData('Maico Jay [Application Developer]', '', 'Completed', ''),
];

export default function Table() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <MUITable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Employees</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Progress</TableCell>
            <TableCell align="center">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.employee}>
              <TableCell component="th" scope="row">
                <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                    <Tooltip title="https://github.com/maicojay16">
                        <Avatar alt="Jay" src={require('../img/avatar.jpg')} />
                    </Tooltip>
                    {row.employee}
                </Grid>
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center"><LinearIndeterminate/></TableCell>
              <TableCell align="center">
              <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SendIcon />}
                >
                    Approve
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}