export class ApiPost {
  static getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(value => console.log(value))
  }

  static addPost() {

  }

  static updatePost() {

  }

  static deletePost() {

  }
}
