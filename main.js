'usestrict'
// Class Movie
class MovieList {
  constructor(title, director, whenWatch) {
    this.title = title;
    this.director = director;
    this.whenWatch = whenWatch;
  }
}

// Class UI
class UI {
  // Add movie list
  addMovie(movie) {
    // Get movie-list element
    const bookList = document.getElementById('book-list');
    const tr = document.createElement('tr');
    // Insert movie list
    tr.innerHTML = `
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td>${movie.whenWatch}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    bookList.appendChild(tr);
    // console.log(bookList);
    alert('リストに追加されました。');
  }
  // Clear form
  clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('whenWatch').value = '';
  }
  // Alert
  alertMessage() {
    alert('項目を全て入力して下さい。');
  }
  // Delete movie list
  deleteList(target) {
    if(target.className === 'delete') {
      confirm('リストから削除しますか？');
      target.parentElement.parentElement.remove();
      // alert('リストから削除されました。');
    }
  }
}

// Event listener for add list
document.getElementById('movie-form').addEventListener('submit', (e) => {
  // Get movie-form value
  const title = document.getElementById('title').value;
  const director = document.getElementById('director').value;
  const whenWatch = document.getElementById('whenWatch').value;
  // Instance MovieList
  const movie = new MovieList(title, director, whenWatch);
  // Instance UI
  const ui = new UI();
  if(title === '' || director === '' || whenWatch === ''){
    ui.alertMessage();
  } else {
    // add movie list
    ui.addMovie(movie);
    // Clear form
    ui.clearForm();
  }
  e.preventDefault();
});

// Event listener for add list
document.getElementById('book-list').addEventListener('click', (e) => {
  // Instance UI
  const ui = new UI();
  // Delete movie list
  ui.deleteList(e.target);
  // console.log(e.target);
  e.preventDefault();
});















