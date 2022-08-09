// manage values stored in local storage
const useLocalStorage = () => {
  const getStorageItem = (key: string): {} | string | null => {
    const value = localStorage.getItem(key);

    // return value if exists & is valid
    if (value && value !== "undefined") return JSON.parse(value);

    return null;
  };

  const setStorageItem = (key: string, value: {}): void =>
    localStorage.setItem(key, JSON.stringify(value));

  const removeStorageItem = (key: string): void => localStorage.removeItem(key);

  return [getStorageItem, setStorageItem, removeStorageItem] as const;
};

export default useLocalStorage;
