import React, {useEffect, useState} from 'react';
import classes from './FileItem.module.css'
import {DescriptionOutlined} from "@material-ui/icons";
import axios from "axios";
import CodeBlock from "../CodeBlock/CodeBlock";
import {useDispatch} from "react-redux";
import {setUrl} from "../../../redux/actions/actons";

const FileItem = ({data, history}) => {
    const dispatch = useDispatch()
    const click = () => {
        console.log(data)
        history.push(`/file/${data.name}`)
        dispatch(setUrl(data.download_url))
    }
    return (
            <div onClick={click} className={classes.wrapper}>
                <DescriptionOutlined/>
                {data.name}
            </div>
    );
};

export default FileItem;
