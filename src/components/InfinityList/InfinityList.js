import React from 'react';
import {useSelector} from "react-redux";
import UserItem from "../UserItem/UserItem";
import classes from './InfinityList.module.css'
import {useHistory} from "react-router";

const InfinityList = () => {

    const users = useSelector(state => state.users.users)
    const h = useHistory()
    const renderUsers = () => {
        return users.map(i => <UserItem history={h} key={i.id} data={i} />)
    }
    return (
        <div className={classes.wrapper}>
            {renderUsers()}
        </div>
    );
};

export default InfinityList;
