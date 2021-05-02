import React from 'react';
import classes from './RepoItem.module.css'
import {Accordion, AccordionDetails, AccordionSummary, Divider, ListItem} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const RepoItem = ({data, history}) => {

    const lookRepo = e => {
        e.stopPropagation()
        history.push(`/repo/${data.owner.login}/${data.name}`)
    }
    return (
        <ListItem button>
            <div className={classes.wrapper}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className={classes.wrapper}>
                            <div className={classes.title}><span className={classes.t}>repo name:</span> <span
                                className={classes.name}>{data.name}</span></div>
                            <div onClick={e => lookRepo(e)} className={classes.look}>Look repo</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.subtitle}><span className={classes.t}>repo description: </span><span
                            className={classes.desc}>{data.description || 'not found'}</span></div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </ListItem>
    );
};

export default RepoItem;
