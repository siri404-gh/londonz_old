import immutable from 'object-path-immutable';

// Redux Helpers
export const updateProperty = (path, value, obj) => immutable.set(obj, path, value);
export const updateNestedProperty = (path, value, obj) => immutable.assign(obj, path, value);
export const createAction = type => payload => ({ type, payload });
export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
  if (handlers[action.type]) return handlers[action.type](state, action);
  return state;
};

// Functional Programming Helpers
export const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
export const pipe = (...fns) => fns.reverse().reduce((res, fn) => fn(res));

// General Helpers
export const mergeObj = (obj1, obj2) => {
  const newObj = {};
  for (let key in obj1) newObj[key] = obj1[key];
  for (let key in obj2) newObj[key] = obj2[key];
  return newObj;
};