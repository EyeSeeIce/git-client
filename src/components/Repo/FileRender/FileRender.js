import React, {useEffect, useState} from 'react';
import axios from "axios";
import CodeBlock from "../CodeBlock/CodeBlock";
import {useSelector} from "react-redux";
import classes from './FileRender.module.css'



const FileRender = ({match}) => {
    console.log('qwe')
    const [code, setCode] = useState()
    const [lang, setLang] = useState()

    const url = useSelector(state => state.users.url)

    const data = match.params.file

    useEffect ( () => {
        axios.get(url)
            .then(r => {
                setCode(r.data)
            })
    }, [match])

    let a = data.split('').reverse().join('')
    let b = a.indexOf('.')
    let c = b.split('').splice(0, b).reverse()

    const getLang = () => {
        setLang(c.join(''))
    }
    return (
        <div className={classes.wrapper}>
            <h2>{data}</h2>
            <div className={classes.code}>
                {code && <CodeBlock value={code} lang={getLang()}/> }
            </div>
        </div>
    );
};

export default FileRender;
