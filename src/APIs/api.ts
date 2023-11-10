/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable symbol-description */
import axios from 'axios'
import JSONBig from 'json-bigint'

import { isEmpty, assign } from 'lodash'
import { STORAGE, getLocalStorage } from '@utils'

const singletonEnforcer = Symbol()
const BASE_API_URL = process.env.BASE_API_URL
class AxiosClient {
  axiosClient: any;
  static axiosClientInstance: AxiosClient

  constructor(enforcer: any) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance')
    }

    this.axiosClient = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })

    this.getExistTokenOnLocalStorage()

    this.axiosClient.defaults.transformResponse = (data: any) => JSONBig.parse(data)

    this.axiosClient.interceptors.request.use(
      (configure: any) => {
        const token = getLocalStorage(STORAGE.USER_TOKEN)
        if (token) {
          configure.headers.Authorization = `${token}`
        }
        return configure
      },
      (error: any) => Promise.reject(error)
    )

    this.axiosClient.interceptors.response.use(
      (response: any) => {
        const { status, data } = response
        return {
          status,
          data
        }
      },
      (error: any) => {
        if (error.response) {
          const { data, status } = error.response
		  switch (status) {
            case 400:
              break
            case 500:
              break
            case 401:
              break
            case 404:
              break
            case 403:
              break
            default:
              break
		  }
		  throw data
        } else {
          throw error
        }
      }
    )
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer)
    }

    return this.axiosClientInstance
  }

  async getExistTokenOnLocalStorage() {
    const userToken: any = await getLocalStorage(STORAGE.USER_TOKEN)
    if (userToken) {
      this.setHeader(userToken)
    }
  }

	setHeader = async (userToken = null) => {
	  this.axiosClient.defaults.headers.common.Authorization = `${userToken}`
	};

	get = async (resource: any, slug = '', config: any = {}) => {
	  let { headers } = config
	  if (!headers) {
	    headers = this.axiosClient.defaults.headers
	  }
	  slug += ''
	  const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`
	  return this.axiosClient.get(requestURL, {
	    data: null,
	    ...assign(config, { headers })
	  })
	};

	post = async (resource: any, data: any, config = {}) => this.axiosClient.post(
	    `${resource}`,
	    data,
	    assign(config, this.axiosClient.defaults.headers)
	  );

	update = async (resource: any, data: any, config = {}) => this.axiosClient.put(
	    `${resource}`,
	    data,
	    assign(config, this.axiosClient.defaults.headers)
	  );

	put = async (resource: any, data: any, config = {}) => this.axiosClient.put(
	    `${resource}`,
	    data,
	    assign(config, this.axiosClient.defaults.headers)
	  );

	patch = async (resource: any, data: any, config = {}) => this.axiosClient.patch(
	    `${resource}`,
	    data,
	    assign(config, this.axiosClient.defaults.headers)
	  );

	delete = async (resource: any, data?: any, config = {}) => this.axiosClient.delete(`${resource}`, {
	    data,
	    ...assign(config, { headers: this.axiosClient.defaults.headers })
	  });
}

export default AxiosClient.instance
