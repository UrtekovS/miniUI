const steps = [
  {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
  {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
  {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
  {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
  {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
]

const stepsList     = document.querySelector('.steps-list')
const stepsContent  = document.querySelector('.steps-content')

let prevBtn         = document.querySelector('.prev')
const primaryBtn    = document.querySelector('.primary')

let activStep = 0

init()


function init() {
  for (let i = 0; i < steps.length; i++) {
    renderUl()
  }
  insSpan()
  insLi()
  changeText()
  slassActive()
}

function primary() {
  activStep++
  
  if (activStep <= steps.length - 1) {
    changeClassAndText()
  }
  if (activStep === steps.length -1) {
    changeButtonEnd()
  }
  if (activStep === 5) {
    end()
  }
  if (activStep === 6) {
    restart()
    slassActive()
  }
}
function prev() {
  if (activStep > 0) {
    activStep--
    changeClassAndText()
  }
}

function changeButtonEnd() {
  primaryBtn.textContent = "Закончить"
}
function notEnd() {
  primaryBtn.textContent = "Вперед"
}
function end() {
  if (prevBtn) {
    prevBtn.remove()
    prevBtn = 0
  } else {
    primaryBtn.insertAdjacentHTML('beforebegin', '<button class="btn prev">Назад</button>')
  }
  // prevBtn.remove()
}
function restart() {
  activStep = 0
  end()
  classDone()
}

function changeClassAndText() {
  changeText()
  slassActive()
  classDone()
}

function changeText() {
  stepsContent.textContent = steps[activStep].text
}

function slassActive() {
  const stepsItem = document.querySelectorAll('.steps-item')
  for (let i = 0; i < stepsItem.length; i++) {
    if (i === activStep) {
      stepsItem[i].classList.add('active')
    } else {
      stepsItem[i].classList.remove('active')
    }
  }
}
function classDone() {
  const stepsItem = document.querySelectorAll('.steps-item')
  for (let i = 0; i < stepsItem.length; i++) {
    if (i < activStep) {
      stepsItem[i].classList.add('done')
    }
    if (i >= activStep) {
      stepsItem[i].classList.remove('done')
    }
  }
}


function renderUl() {
  let li = document.createElement('li')
  li.className = 'steps-item'
  let span = document.createElement('span')
  li.appendChild(span)
  stepsList.appendChild(li)
}

function insSpan() {
  const span = document.querySelectorAll('span')
  for (let i = 0; i < span.length; i++) {
    span[i].textContent = i+1
  }
}
function insLi() {
  const li = document.querySelectorAll('li')
  for (let i = 0; i < li.length; i++) {
    li[i].append(steps[i].title)
  }
}

function log() {
  console.log(activStep);
}

primaryBtn.addEventListener('click', primary)
primaryBtn.addEventListener('click', log)
prevBtn.addEventListener('click', prev)
prevBtn.addEventListener('click', log)







    