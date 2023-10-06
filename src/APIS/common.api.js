import { BASE_API_URL } from '../Constants';
import AxiosClient from './api';

import ENDPOINT from './constants';

const checkExistFile = ({ folderId = 0, params }) =>
  AxiosClient.get(ENDPOINT.UPLOAD_FILE.CHECK_EXIST_FILE, folderId, { params })
    .then(({ data }) => data);

const getS3PresignedUrl = ({ fileList }) =>
  AxiosClient.post(`${BASE_API_URL}${ENDPOINT.PRESIGNED}`, fileList)
    .then(({ data }) => data);

export {
  checkExistFile,
  getS3PresignedUrl
};
