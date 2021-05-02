import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/actions/actons";
import {LoadComponent} from "../LoadComponent/LoadComponent";
import classes from './UserPage.module.css'
import RepoItem from "../Repo/RepoItem";
import {Divider, List, ListItem} from "@material-ui/core";
import {useHistory} from "react-router";

const UserPage = (props) => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const data = useSelector(state => state.users.user_data)

    const history = useHistory()

    useEffect(() => {
        dispatch(getUserData(props.match.params.id))
    }, [props.match.params.id])
    useEffect(() => {
        if (data.length) {
            setLoading(false)
        }
    }, [data])


    return (
        <div className={classes.wrapper}>
            {loading && <LoadComponent/>}
            <div className={classes.list}>
                <List component="nav" className={classes.root} aria-label="mailbox folders">
                    {data.map(repo => <><RepoItem history={history} key={repo.name + repo.id} data={repo}/><Divider/></>)}
                </List>
            </div>
        </div>
    );
};

export default UserPage;
