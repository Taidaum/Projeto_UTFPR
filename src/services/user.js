import Api from '.';

export const ListUser = async () => {
    const { data } = await Api.get('/user');
    return data;
};

export const FilterListUser = async (search) => {
    const { data } = await Api.get(`/user/${search}`);
    return data;
};

export const CreateUser = async (model) => {
    const { data } = await Api.post('/user', model);
    return data;
};

export const EditUser = async (model) => {
    const { data } = await Api.put('/user', model);
    return data;
};

export const DeleteUser = async (id) => {
    const { data } = await Api.delete(`/user/${id}`,);
    return data;
};