/**
 * Safely get a value from an object
 *
 * @param {object} onjToSearch - The object to perform a safe get over
 * @param {string} keysString - A string representation of the keys to use in the search - e.g. 'keyA.keyB.keyC.keyD'
 * @param {string} errorMessage - The error message to return if the value is not found
 * @return {any} The value at the key position in the object or an error message (or null)
 *
 */

const safeGet = (objToSearch: object, keysString: string, errorMessage: any = null) => {
  const keysArr = keysString.split('.');
  return keysArr.reduce((acc, key) => (acc && acc[key] ? acc[key] : errorMessage), objToSearch);
};

export default safeGet;
