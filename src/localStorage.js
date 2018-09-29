export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('movies');
    if (serializedState === null) {
      return undefined;
    } 
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('movies', serializedState); 
  } catch (err) {
    console.log('local storage error', err);
  }
};
