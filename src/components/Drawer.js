import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Badge,
    Grid,
    Typography,
    Tooltip,
} from '@material-ui/core/';
import { DashboardIcon, NotificationsIcon, TableChartIcon, AssessmentIcon, GitHubIcon, FacebookIcon, InstagramIcon } from '../icons/';

const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.6)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    palette: {
        type: 'dark'
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerProfile: {
        paddingTop: 40,
        paddingBottom: 30,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    socmedIcons: {
        marginLeft: 5,
        marginRight: 5,
    },
    toolbar: theme.mixins.toolbar,
}));

export default function MainDrawer() {

    const style = useStyles();

    return (
        <div className={style.root}>
            <Drawer className={style.drawer}
                variant="permanent"
                classes={{
                    paper: style.drawerPaper,
                }}
                anchor="left"
            >
                <div className={style.toolbar} />
                <Divider />
                <div className={style.drawerProfile}>
                    <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
                       <Grid>
                        <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Jay" className={style.large} src={require('../img/avatar.jpg')} />
                            </StyledBadge>
                       </Grid>
                        <Grid>
                            <Typography variant="h6">
                                Jay Maico
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                Junior Web Developer
                            </Typography>
                        </Grid>
                        <Grid spacing={2}>
                            <Tooltip title="https://github.com/maicojay16">
                                <GitHubIcon />
                            </Tooltip>
                            <Tooltip title="https://www.facebook.com/jay.ociamu/">
                                <FacebookIcon className={style.socmedIcons}/>
                            </Tooltip>
                            <Tooltip title="https://www.instagram.com/https.maaaaaaico/">
                                <InstagramIcon />
                            </Tooltip>
                        </Grid>
                    </Grid>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText> Dashboard</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><NotificationsIcon /></ListItemIcon><ListItemText> Notifications</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><TableChartIcon /></ListItemIcon><ListItemText> Table List</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AssessmentIcon /></ListItemIcon><ListItemText> Charts</ListItemText>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}