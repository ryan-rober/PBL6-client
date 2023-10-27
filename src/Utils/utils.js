/* eslint-disable */
import { reduce, isArray, isFunction } from 'lodash';

export const decodePath = (path) => {
  const arr = path.split('/');
  arr.shift();
  return arr;
};

export const json2Form = (jsonObj) => reduce(
  jsonObj,
  (result, item, key) => {
    result.append(key, item);
    return result;
  }, new FormData(),
);

export const isFunc = isFunction;
export { isArray };
export const isArrayHasItem = (items) => isArray(items) && items.length;
export const isSafari =
  /constructor/i.test((window).HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !(window).safari ||
    (typeof (window).safari !== 'undefined' && (window).safari.pushNotification),
  );

export const convertBodyToFormData = (body) => {
  const formData = new FormData()
  Object.keys(body).forEach((prop) => body[prop] && formData.append(prop, body[prop]))
  return formData
}

export const convertNumberToTime = (time) => {
  if (!time) return '00:00:00'
  const h = Math.floor(time / 3600)
  const m = Math.floor(time / 60)
  const s = Math.round(time % 60)
  const hours = h >= 10 ? h : `0${h}`
  const seconds = s >= 10 ? s : `0${s}`
  const minutes = m >= 10 ? m : `0${m}`

  return `${hours}:${minutes}:${seconds}`
}

export const convertTimeToNumber = (time = '00:00:00') => {
  const arrTime = time.split(':').map((item) => parseInt(item))
  const [hour, minutes, seconds] = arrTime
  return (hour * 3600) + (minutes * 60) + seconds
}

export const handleSearchSelectTree = (inputSearch, treeNode) => {
  if (inputSearch.trim() === '') return true
  return treeNode.title.toLowerCase().indexOf(inputSearch.trim().toLowerCase()) >= 0
}

export const scrollTopDropdown = (isOpen, setCourseOptions, listCourse) => {
  setCourseOptions([])
  setTimeout(() => {
    if (isOpen) {
      setCourseOptions(listCourse)
    } else {
      setCourseOptions([])
    }
  }, 0)
}

export const sortFullParams = (field, order, params, fullParams) => {
  switch (field) {
    // Course Status screen sort
    case 'courseProgress':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_PROGRESS' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    //... rest of the cases
  }
}
