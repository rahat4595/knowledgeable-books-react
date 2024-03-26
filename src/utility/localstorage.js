export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('books')) || [];
    const dataHas = savedData.find(item => item.bookId == book.bookId);
    if(dataHas){
      alert('data ase age theke')
    }else{
      savedData.push(book);
      localStorage.setItem('books', JSON.stringify(savedData))
    }
}