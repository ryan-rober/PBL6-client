import { BASE_API_URL } from '@constants'
import AxiosClient from './api'

import ENDPOINT from './constants'

function checkExistFile({ folderId = 0, params }: any) {
  return AxiosClient.get(ENDPOINT.UPLOAD_FILE.CHECK_EXIST_FILE, folderId, { params })
    .then(({ data }) => data)
}

function getS3PresinedUrl({ fileList }: any) {
  return AxiosClient.post(`${BASE_API_URL}${ENDPOINT.PRESIGNED}`, fileList)
    .then(({ data }) => data)
}

export {
  checkExistFile,
  getS3PresinedUrl
}
