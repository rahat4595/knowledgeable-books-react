export const saveDataToLocalStorage = ({ data, listType }) => {
  const savedData = JSON.parse(localStorage.getItem(listType)) || [];
  const dataHas = savedData.find(item => item.bookId == data.bookId);

  if (dataHas) {
      alert('This book is already in the list');
  } else {
      savedData.push(data);
      localStorage.setItem(listType, JSON.stringify(savedData));
      alert('Book added to the list');
  }
};