// manage values stored in local storage
const useLocalStorage = () => {
  const getStorageItem = (key) => {
    const value = localStorage.getItem(key);

    // return value if exists & is valid
    if (value && value !== "undefined") {
      return JSON.parse(value);
    } else {
      return null;
    }
  };

  const setStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeStorageItem = (key) => {
    localStorage.removeItem(key);
  };

  return [getStorageItem, setStorageItem, removeStorageItem];
};

export default useLocalStorage;
