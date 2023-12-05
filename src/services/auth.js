import Api from '.';

export const AuthUser = async (model) => {
  const { data } = await Api.post('/auth', model);
  return data;
};