const countNumber = document.getElementById('countNumber')
const inputFriend = document.getElementById('inputFriend')
const addBtn = document.getElementById('addBtn')
const friendsList = document.getElementById('friendsList')
const emptyInput = document.getElementById('emptyInput')
const deleteBtn = document.getElementById('deleteBtn')

const addLi = (liContent) => {
  let li = document.createElement('li')
  li.textContent = liContent
  friendsList.append(li)
  countNumber.textContent++
  localStorage.setItem(countNumber.textContent, liContent)
  inputFriend.value = null
}

for (let i = 1; i <= localStorage.length; i++) {
  let item = localStorage.getItem(i)
  addLi(item)
}

addBtn.onclick = () => {
  if (inputFriend.value === '') {
    emptyInput.hidden = false;
    emptyInput.textContent = 'Введите друга'
    return
  }
  addLi(inputFriend.value)
}

deleteBtn.onclick = () => {
  if (countNumber.textContent !== '0') {
    friendsList.lastChild.remove()
    localStorage.removeItem(countNumber.textContent)
    countNumber.textContent--
  } else {
    emptyInput.hidden = false;
    emptyInput.textContent = 'Нечего удалять'
  }
}

inputFriend.oninput = () => {
  emptyInput.hidden = true;
}
