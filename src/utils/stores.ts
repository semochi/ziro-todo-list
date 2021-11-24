export const updateTasks = (nameStore: string, data: Object[]) => {
  return localStorage.setItem(nameStore, JSON.stringify(data));
};

export const getAllTasks = (nameStore: string) => {
  let items = localStorage.getItem(nameStore);

  return items ? JSON.parse(items) : [];
};
