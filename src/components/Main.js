import React from 'react'
import { Grid } from '@material-ui/core/'
import { Table, Card, CardProgress } from './'

export default function Main() {
    return (
        <Grid container spacing={2}>
           <Grid container direction="row" item xs={12}>
                <Card />
           </Grid>
           <Grid container direction="row" item xs={12}>
                <Table />
           </Grid>
           <Grid container direction="row" item xs={12}>
                <CardProgress />
           </Grid>
        </Grid>
      
    );
}