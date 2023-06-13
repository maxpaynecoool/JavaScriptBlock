const timer = document.getElementById('timer')
const milisec = document.getElementById('milisec')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const removeButton = document.getElementById('remove')
const reverseButton = document.getElementById('reverse')
const saveButton = document.getElementById('save')
const savedTimes = document.getElementById('savedTimes')

const addLi = () => {
  let li = document.createElement('li')
  li.textContent = timer.textContent
  savedTimes.append(li)
  localStorage.setItem(timer.textContent, timer.textContent)
}

const addLiFromStorage = (liContent) => {
  let li = document.createElement('li')
  li.textContent = liContent
  savedTimes.append(li)
}

for (let i = 0; i < localStorage.length; i++) {
  let item = localStorage.key(i)
  addLiFromStorage(item)
}

startButton.onclick = () => {
  start()

  startButton.hidden = true
  stopButton.hidden = false
  removeButton.hidden = false
  reverseButton.hidden = false
  saveButton.hidden = false
  reverseButton.disabled = false
}

const start = () => {
  let count = setInterval(() => {
    let miliContent = +milisec.textContent
    let secContent = +seconds.textContent
    let minContent = +minutes.textContent

    if (miliContent < 99) {
      milisec.textContent++
    } else {
      milisec.textContent = '0'
      if (secContent < 59) {
        secContent = seconds.textContent++
      } else {
        seconds.textContent = '0'

        minContent = minutes.textContent++
      }
    }
  }, 10)
  stopButton.addEventListener('click', () => {
    startButton.hidden = false
    stopButton.hidden = true

    clearInterval(count)
  })
  reverseButton.addEventListener('click', () => {
    clearInterval(count)
    let reversedCount = setInterval(() => {
      let miliContent = +milisec.textContent
      let secContent = +seconds.textContent
      let minContent = +minutes.textContent

      if (miliContent > 0) {
        milisec.textContent--
      } else {
        milisec.textContent = '99'
        milisec.textContent--
        if (secContent > 0) {
          seconds.textContent--
        } else {
          seconds.textContent = '59'
          minutes.textContent--
        }
      }

      if ((miliContent === 0) && (secContent === 0) && (minContent === 0)) {
        milisec.textContent = '0'
        seconds.textContent = '0'
        minutes.textContent = '0'
        clearInterval(reversedCount)
        startButton.hidden = false
        stopButton.hidden = true
        removeButton.hidden = true
        reverseButton.hidden = true
        saveButton.hidden = true
      }
      reverseButton.disabled = true
    }, 10)
  })
}

removeButton.onclick = () => {
  milisec.textContent = '0'
  seconds.textContent = '0'
  minutes.textContent = '0'
}

saveButton.onclick = () => {
  addLi()
}