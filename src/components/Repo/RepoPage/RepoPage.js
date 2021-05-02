import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDir, getRepo} from "../../../redux/actions/actons";
import classes from './RepoPage.module.css'
import FileItem from "../FileItem/FileItem";
import DirItem from "../DirItem/DirItem";
import {useHistory} from "react-router";


const RepoPage = ({match}) => {

    const history = useHistory()
    const isDir = () => {
        let str = history.location.search
        if (str.indexOf('dir') === 1){
            return true
        }else{
            return false
        }
    }
    console.log(!!isDir())
    const dispatch = useDispatch()
    useEffect(() => {
        if (isDir()){
            /*dispatch(getDir())*/
        }else{
            dispatch(getRepo(match.params.user, match.params.repo))
        }
    }, [])
    const data = useSelector(isDir() ? state => state.users.dir : state => state.users.repo)

    data?.sort((a, b) => {
        if (a.type === 'file'){
            return 1
        }else{
            return -1
        }
    })
    console.log(history)
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.h1}>{match.params.repo}</h1>
            {data.map(d => d.type === 'file'
                ?
                <FileItem history={history} key={d.sha} data={d} />
                :
                <DirItem match={match} history={history} key={d.sha} data={d} />)}
        </div>
    );
};

export default RepoPage;
