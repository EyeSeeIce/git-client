import React from 'react';
import {Avatar} from "@material-ui/core";
import classes from './UserItem.module.css'

const UserItem = ({data, history}) => {

    const click = () => {
        history.push(`/user/${data.login}`)
    }
    return (
        <div className={classes.wrapper}>
           <div onClick={click} className={classes.bio}>
               <Avatar alt="Remy Sharp" src={data.avatar_url} />
               <span>{data.login}</span>
           </div>
        </div>
    );
};

export default UserItem;
