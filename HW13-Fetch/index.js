const postNumber = document.getElementById('postNumber')
const buttonGetPost = document.getElementById('getPost')
const post = document.getElementById('post')

buttonGetPost.onclick = () => {
  let number = postNumber.value
  let url = `https://jsonplaceholder.typicode.com/posts/${number}`

  fetch(url)
    .then(response => response.json())
    .then(value => {
      let postJSON = JSON.stringify(value)

      post.textContent = postJSON
    })
}