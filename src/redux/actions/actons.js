import {SEARCH_TEXT, SET_DIR, SET_REPO, SET_URL, SET_USER_DATA, SET_USERS} from "../type/types";
import axios from "axios";
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({auth: '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'})

const api = 'https://api.github.com/search/'



const getData = (url) => {
    let xhr = new XMLHttpRequest();
    const gt = new Promise((resolve, reject) => {
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() { // (3)
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                resolve(xhr)
            }
        }
    })
    return gt
}

export const searchText = (text) => {
    return {
        type: SEARCH_TEXT,
        payload: text
    }
}






export const getUsers = (text, page) => {
    return async dispatch => {
        getData(`https://api.github.com/search/users?q=${text}&page=${page}`)
            .then(r => {
                dispatch(setUsers(JSON.parse(r.response)))
            })
    }
}
export const setUsers = (data) => {
    return {
        type: SET_USERS,
        payload: data
    }
}

export const getUserData = (name) => {
    return async dispatch => {
        getData(`https://api.github.com/users/${name}/repos`)
            .then((r) => dispatch(setUserData(JSON.parse(r.response))))

    }
}

export const setUserData = data => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}

export const getRepo = (user, repo) => {
    return async dispatch => {
        getData(`https://api.github.com/repos/${user}/${repo}/contents/`)
            .then((r) => {
                dispatch(setRepo(JSON.parse(r.response)))
            })
    }
}

export const setRepo = data => {
    return {
        type: SET_REPO,
        payload: data
    }
}

export const setUrl = url => {
    return{
        type: SET_URL,
        payload: url
    }
}

export const getDir = url => {
    return async dispatch => {
        getData(url)
            .then((r) => {
                dispatch(setDir(JSON.parse(r.response)))
            })
    }
}

export const setDir = data => {
    return {
        type: SET_DIR,
        payload: data
    }
}
