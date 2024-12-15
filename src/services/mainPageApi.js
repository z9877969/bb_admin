import { bbInstance as bbApi } from './bbApi';

export const getContentApi = async () => {
  const { data } = await bbApi.get('/content/main-page');

  return data;
};

export const updateContentApi = async (body) => {
  const { data } = await bbApi.patch('/content/main-page', body);

  return data;
};
