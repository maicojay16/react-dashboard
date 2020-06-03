import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as MUICard, CardActions, CardContent, Button, Typography, Grid, Avatar } from '@material-ui/core/';
import { green, pink, purple, blue} from '@material-ui/core/colors';
import { KeyboardIcon, AssessmentIcon, AccountCircleIcon, MonetizationOnIcon } from '../icons';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 15
    },
    pos: {
        marginBottom: 12,
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    purple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
    }
}));

export default function Card() {
    
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <MUICard className={classes.root}>
                    <CardContent>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <Grid>
                                <Avatar className={classes.pink}><KeyboardIcon /></Avatar>
                            </Grid>
                            <Grid>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>
                                    Orders
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h2" component="h2">
                                $3,485
                            </Typography>
                            <Typography display="block" variant="body2" color="textSecondary">
                                +36% from last month
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View More</Button>
                    </CardActions>
                </MUICard>
            </Grid>
            <Grid item xs={3}>
                <MUICard className={classes.root}>
                    <CardContent>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <Grid>
                                <Avatar className={classes.green}><AssessmentIcon /></Avatar>
                            </Grid>
                            <Grid>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Reports
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h2" component="h2">
                                436
                            </Typography>
                            <Typography display="block" variant="body2" color="textSecondary">
                                +65% from last month
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View More</Button>
                    </CardActions>
                </MUICard>
            </Grid>
            <Grid item xs={3}>
                <MUICard className={classes.root}>
                    <CardContent>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <Grid>
                                <Avatar className={classes.purple}><AccountCircleIcon /></Avatar>
                            </Grid>
                            <Grid>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Customers
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h2" component="h2">
                                4867
                            </Typography>
                            <Typography display="block" variant="body2" color="textSecondary">
                                +22% from last month
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View More</Button>
                    </CardActions>
                </MUICard>
            </Grid>
            <Grid item xs={3}>
                <MUICard className={classes.root}>
                    <CardContent>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <Grid>
                                <Avatar className={classes.blue}><MonetizationOnIcon /></Avatar>
                            </Grid>
                            <Grid>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Sales
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Typography variant="h2" component="h2">
                                433 
                            </Typography>
                            <Typography display="block" variant="body2" color="textSecondary">
                                +32% from last month
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View More</Button>
                    </CardActions>
                </MUICard>
            </Grid>
        </Grid>

    );
}