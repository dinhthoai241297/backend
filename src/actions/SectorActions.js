import * as actionTypes from "./../actionTypes/SectorActionTypes";
import sectorApi from './../api/SectorApi';

export const getAllSector = (page) => {
    return dispatch => {
        return sectorApi.getAll(page).end((err, data) => {
            if (err) {
                // need more handling
                throw(err);
            } else {
                dispatch(loadAllSectorSuccess(JSON.parse(data.text).data.list));
            }
        });
    }
}

export const loadAllSectorSuccess = (sectors) => {
    return {
        type: actionTypes.LOAD_ALL_SECTOR_SUCCESS,
        sectors
    }
}

export const getOneSector = (id) => {
    return {
        type: actionTypes.GET_ONE,
        id
    }
}