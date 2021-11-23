let { setItem, getItem } = localStorage;

export const updateTasks = (nameStore: string, data: Object[]) => {
  return setItem(nameStore, JSON.stringify(data));
};

export const getAllTasks = (nameStore: string) => {
  let items = getItem(nameStore);
  if (items) return JSON.parse(items);
};
