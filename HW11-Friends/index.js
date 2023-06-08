const countNumber = document.getElementById('countNumber')
const inputFriend = document.getElementById('inputFriend')
const addBtn = document.getElementById('addBtn')
const friendsList = document.getElementById('friendsList')
const emptyInput = document.getElementById('emptyInput')

for(let i = 1; i <= localStorage.length; i++) {
  let item = localStorage.getItem(i)

  let lili = document.createElement('li')
  lili.textContent = item
  friendsList.append(lili)
  countNumber.textContent++
}

addBtn.onclick = () => {
  if (inputFriend.value === '') {
    emptyInput.hidden = false;
    return
  } 

  let li = document.createElement('li')

  li.textContent = inputFriend.value

  friendsList.append(li)

  countNumber.textContent++

  localStorage.setItem(countNumber.textContent, inputFriend.value)

  inputFriend.value = null
}

inputFriend.oninput = () => {
  emptyInput.hidden = true;
}
