export const isString = (val: any): boolean => typeof val === 'string' || val instanceof String;
export const isArray = (val: any): boolean => Array.isArray(val);
export const isObject = (val: any): boolean => typeof val === 'object';
export const isNumber = (val: any): boolean => typeof val === 'number';
export const isDate = (v: any) => v && v instanceof Date;
export const isValidDate = (val: any) => val instanceof Date && !isNaN(val);
export const isFunction = (val: any) => val && typeof val === 'function';


// Object helpers
const ObjectIsEmpty = (obj: object) => !!(Object.keys(obj).length === 0 && isObject(obj));

const objectHelper = {
  isEmpty: ObjectIsEmpty,
};

//
// Simple method returning true if the value is "empty" in more like the PHP way.
// It returns "true" for:
// - null
// - undefined
// - boolean false
// - empty array
// - empty object (without enuberable properties)
// - empty string
// - number 0
// - string containing only single 0
//
export const isEmpty = (value: any): boolean => {
  if (
    typeof value === 'undefined' ||
    value === null ||
    value === false ||
    value === 0 ||
    value === '' ||
    value === '0'
  ) {
    return true;
  }
  if (isObject(value) && objectHelper.isEmpty(value)) {
    return true;
  }
  if (isArray(value) && !value.length) {
    return true;
  }
  return false;
};