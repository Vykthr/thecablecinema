import { AppBar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemText, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Menu } from '@material-ui/icons';
import { useMediaQuery } from 'react-responsive'
import { PRIMARY_COLOR, WHITE_COLOR, DARK_COLOR } from '../styles/colors';

const Nav = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 812px)' })
    const [ open , setOpen ] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const links = [
        { title: 'Home', link: '/' },
        { title: 'Now Showing', link: '/' },
        { title: 'Cinemas', link: '/' },
        { title: 'Contact', link: '/' },
        { title: 'Login', link: '/' },
    ]
    return (
        <AppBar position="static">
            <Toolbar style={{ padding: '.5rem 1rem', backgroundColor: WHITE_COLOR }}>
                <Grid item xs={6} style={{ paddingLeft: '1rem'}}>
                    <Box><Link to="/"><img src={Logo} width={200} alt="Logo" /></Link></Box>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {
                        isPhone ?
                        <>
                            <Button onClick={() => toggleDrawer() }><Menu style={{ color: PRIMARY_COLOR, fontSize: 40 }} /></Button>
                        </>
                        :
                        <>
                            { links.map(({link, title}, key) => {
                                return (
                                    <Link to={link} key={key}>
                                        <Button variant={key === 4 ? 'contained' : 'text'} style={key === 4 ? styles.mainBtn : styles.btn}>{title}</Button>
                                    </Link>
                                )}) 
                            }
                        </>
                    }
                </Grid>
                <Drawer anchor="right" open={open} onClose={() => toggleDrawer()}>
                    <div role="presentation" onClick={() => toggleDrawer()} onKeyDown={() => toggleDrawer()}>
                        <AppBar position="static" style={{ backgroundColor: DARK_COLOR }}>
                            <Toolbar style={{ padding: '.5rem 1rem' }}>Menu</Toolbar>
                        </AppBar>
                        <List style={{ minWidth: '250px', padding: '10px 15px' }}>

                            {links.map(({title, link}, key) => (
                                <Link to={link} key={key} style={{ color: DARK_COLOR }}>
                                    <ListItem>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                    <Divider/>
                                </Link>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    btn: {
        color: DARK_COLOR,
        textTransform: 'capitalize',
        paddingLeft: 15,
        paddingRight: 15,
        margin: '0 .5rem',
        fontWeight: 'bold',
        fontSize: 16
    },
    mainBtn: {
        color: WHITE_COLOR,
        backgroundColor: PRIMARY_COLOR,
        boxShadow: 'none',
    }
}

export default Nav
