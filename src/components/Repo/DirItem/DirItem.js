import React from 'react';
import classes from '../FileItem/FileItem.module.css'
import {Folder} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {getDir} from "../../../redux/actions/actons";

const DirItem = ({data, history, match}) => {
    const dispatch = useDispatch()
    console.log(data)
    const click = () => {
        history.push(`${history.location.pathname}?dir=${data.name}`)
        dispatch(getDir(data.url))
    }
    return (
        <div onClick={click} className={classes.wrapper}>
            <Folder />
            {data.name}
        </div>
    );
};

export default DirItem;
