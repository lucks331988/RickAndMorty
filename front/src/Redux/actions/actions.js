import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types';
import axios from "axios";

export const addFav = (character)=>{
    return async function(dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/favs", character)
            return dispatch ({
                type: ADD_FAV,
                payload: response.data,
            });
        } catch (error) {
            return dispatch({
                type:"ERROR",
                payload: error,
            });
        }
        // axios.post("http://localhost:3001/rickandmorty/favs", character)
        // .then(response =>{
        //     return dispatch ({
        //         type: ADD_FAV,
        //         payload: response.data,
        //     })
        // })
    }
};

export const removeFav = (id) => {
    return async function(dispatch) {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)   
            return dispatch({
                        type: REMOVE_FAV,
                        payload: response.data, 
                 });
            
        } catch (error) {
            return dispatch({
                type:"ERROR",
                payload:error,
            })
        }
        // axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
        // .then(response => {
        //     dispatch({
        //         type: REMOVE_FAV,
        //         payload: response.data, 
        //     });
        // })
        // .catch(error => {
        //     console.error('Error:', error.message);
            
        // });
    }
};

export const getFavorites = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/rickandmorty/favs`)   
            return dispatch({
                        type: "GET_FAVORITES",
                        payload: response.data, 
                 });
            
        } catch (error) {
            return dispatch({
                type:"ERROR",
                payload:error,
            })
        }
    }
};

export const filterCards = (gender)=>{
    return {
        type: FILTER,
        payload:gender
    }
};

export const orderCards =(order)=>{
    return{
        type:ORDER,
        payload: order
    }
};