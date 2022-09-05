import { callApi } from '../utils/apiUtils/CallApis';
import endPoints from '../utils/apiUtils/EndPoints';

export const httpRegisterUser = async (payload) =>
  await callApi({
    uriEndPoint: {
      ...endPoints.register,
    },
    body: payload,
  });

export const httpLoginUser = async (payload) => {
  return await callApi({
    uriEndPoint: {
      ...endPoints.login,
    },
    body: payload,
  });
};

export const httpMeUser = async (jwt) => {
  return await callApi({
    uriEndPoint: {
      ...endPoints.me,
    },
    header: {
      'Content-Type': 'application/json',
      authorization: `${jwt}`,
    },
  });
};
