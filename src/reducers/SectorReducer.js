import * as actionTypes from "./../actionTypes/SectorActionTypes";

let initState = [];

const sectorReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_ALL_SECTOR_SUCCESS: {
            return [...action.sectors];
        }
        default: {
            return state;
        }
    }
}

export default sectorReducer;