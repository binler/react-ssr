/**
 *
 * @param sourceObject
 * @param targetObject
 * @returns {*}
 * @private
 */
export function _assign(sourceObject = {}, targetObject = {}) {
  return Object.assign({}, sourceObject, targetObject);
}