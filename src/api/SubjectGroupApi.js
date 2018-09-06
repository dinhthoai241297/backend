import request from 'superagent';
import { HOST } from './../contants/index';

class SubjectGroupApi {
    static add(data) {
        return request.post(`${HOST}subjectgroup/add`).send({ data });
    }

    static update(data) {
        return request.post(`${HOST}subjectgroup/update`).send({ data });
    }

    static delete(id = -1) {
        return request.post(`${HOST}subjectgroup/delete`).send({ id });
    }

    static getAll(page = 1) {
        return request.post(`${HOST}subjectgroup/getAll`).send({ page });
    }

    static getOne(id = -1) {
        return request.post(`${HOST}subjectgroup/getOne`).send({ id });
    }
}

export default SubjectGroupApi;