import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_TEXT} from "../../redux/type/types";
import {AccountCircle} from "@material-ui/icons";
import {getUsers, setUsers} from "../../redux/actions/actons";
import axios from "axios";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginLeft: 0,
        transition: '.2s',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const sel = useSelector(state => state.search.text)
    const [text, setText] = useState('')
    const [page, setPage] = useState(1)

    const h = useHistory()


    const submit = e => {

        if (e.code === 'Enter'){
            setText(sel)
            dispatch(getUsers(sel, page))
            h.push('/main')
        }
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        My Awesome Git Client
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onKeyPress={e => submit(e)}
                            onChange={e => dispatch({type: SEARCH_TEXT, payload: e.target.value})}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
