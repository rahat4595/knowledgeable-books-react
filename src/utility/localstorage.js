export const saveDataToLocalStorage = ({ data, listType }) => {
  const savedData = JSON.parse(localStorage.getItem(listType)) || [];
  const dataHas = savedData.find(item => item.bookId == data.bookId);

  if (dataHas) {
      return false;
  } else {
      savedData.push(data);
      localStorage.setItem(listType, JSON.stringify(savedData));
      return true
  }
};