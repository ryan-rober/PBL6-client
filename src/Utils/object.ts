export const parseFilter = (params: any) => {
  if (params?.filter) {
    const { filter, ...restParams } = params
    return { ...restParams, ...filter }
  }
  return params
}

export const parseFilterArrayToString = (params: any) => {
  if (!params) return ''
  let string = ''
  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      params[key].forEach((param: any) => {
        string = `${string}&${key}=${param}`
      })
    } else {
      string = `${string}&${key}=${params[key]}`
    }
  })
  return string
}

export const parseFilterArrayToStringV2 = (params: any) => {
  let newParams: any = null
  let string = ''
  if (params?.filter) {
    const { filter, ...restParams } = params
    newParams = { ...filter, ...restParams }
  } else {
    newParams = { ...params }
  }
  if (newParams) {
    Object.keys(newParams).forEach((key) => {
      if (Array.isArray(newParams[key])) {
        newParams[key].forEach((param: any) => {
          string = `${string}&${key}=${param}`
        })
      } else {
        string = `${string}&${key}=${newParams[key]}`
      }
    })
  }
  return string
}
