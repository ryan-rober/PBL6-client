/* eslint-disable no-prototype-builtins */
function updateObject(oldObject: any, newValues: any) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return { ...oldObject, ...newValues }
}

function updateItemInArray(array: any[], itemId: any, updateItemCallback: any) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}

function createReducer(initialState: any, handlers: any) {
  // eslint-disable-next-line func-names
  return function reducer(state: any = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

export {
  updateObject,
  updateItemInArray,
  createReducer
}
