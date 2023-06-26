export class ApiPhotos {
  static getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(value => console.log(value))
  }

  static addPhotos() {

  }

  static updatePhotos() {

  }

  static deletePhotos() {

  }
}