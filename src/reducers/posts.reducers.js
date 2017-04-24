import {FETCH_POSTS, FETCH_POST } from '../actions/index.actions';

const INITIAL_STATE={all:[], currentPost:null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POST:
            return { ...state, currentPost:action.payload.data };
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}