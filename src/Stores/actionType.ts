/**
 * Appends REQUEST async action type
 */

export const REQUEST = (actionType: any) => `${actionType}_REQUEST`.toString()

/**
   * Appends SUCCESS async action type
   */

export const SUCCESS = (actionType: any) => `${actionType}_SUCCESS`

/**
   * Appends FAILURE async action type
   */

export const FAILURE = (actionType: any) => `${actionType}_FAILED`
