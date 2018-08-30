import request from 'superagent';
import { HOST } from './../contants/index';

class SectorApi {
    static add() {

    }

    static update() {

    }

    static delete() {

    }

    static getAll(page = 1) {
        return request.post(`${HOST}sector/getAll`).send({ page: page });
    }

    static getOne(id = -1) {
        return request.post(`${HOST}sector/getOne`).send({ id: id });
    }
}

export default SectorApi;