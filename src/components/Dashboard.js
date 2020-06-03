import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { 
AppBar, 
Toolbar, 
Typography, 
Slide, 
Badge,
Switch,
CssBaseline,
Grid} from '@material-ui/core/';
import { ThemeProvider, createMuiTheme, } from "@material-ui/core/";
import { SettingsIcon, NotificationsIcon, MailIcon } from '../icons/';
import { Main, MainDrawer } from './'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    badgeSpace: {
        paddingLeft: '1vw'
    },
}));

export default function Dashboard() {
    
    const [darkmode, setDarkMode] = useState(false) 

    const theme = createMuiTheme({
        palette: {
            type: darkmode ? 'dark' : 'light'
        }
    })
    const style = useStyles();
    const trigger = useScrollTrigger();

    return (
        <ThemeProvider theme={theme}>
            <div className={style.root}>
                <Slide in={!trigger}>
                    <AppBar color="default" className={style.appBar}>
                        <Toolbar>
                            <Grid container>
                                <Grid xs={9}> 
                                    <Typography variant="h6" noWrap>Dashboard</Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography variant="caption">Dark Mode</Typography>
                                    <Switch color='default' checked={darkmode} onChange={() => setDarkMode(!darkmode)} /> 
                                    <Badge badgeContent={4} color="primary">
                                        <MailIcon />
                                    </Badge>
                                    <Badge className={style.badgeSpace} badgeContent={6} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                    <Badge className={style.badgeSpace} badgeContent={2} color="error">
                                        <SettingsIcon />
                                    </Badge>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Slide>
                <MainDrawer />
                <main className={style.content}>
                    <div className={style.toolbar} />
                    <CssBaseline />
                   <Main />
                </main>
            </div>
        </ThemeProvider>
    );
}