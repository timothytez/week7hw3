console.log("toDo List")

const body = document.body

const hOne = document.querySelector('#main-heading')
console.log(hOne)
// document.getElementById()

// Removing or effecting button event listener after eventlistern
const themeButton = document.createElement('button')

body.append(themeButton)

const main = document.getElementsByTagName('main')[0]
main.style.display = 'flex'
main.style.gap = '10px'

const toDoForm = document.querySelector('#toDo-form')

toDoForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const choreName = getChoreName()
  console.log(choreName)
  const toDoData = await toDoApiCall(choreName)
  makeChoreCard(toDoData)
})

function gettoDoName() {
  return document.querySelector('#toDo-field').value
}

const toDoCardContainer = document.querySelector('.toDo-card-container')
toDoCardContainer.style.display = 'flex'

function maketoDoCard({name, duration, completion}) {

  const toDoCard = document.createElement('div')
  const toDoHeading = document.createElement('h3')
  const durationPTag = document.createElement('p')
  const completionContainer = document.createElement('ul')

  for (const choreName of chore) {
    const choreListItem = document.createElement('li')
    choreListItem.innerText = choreName
    choreContainer.appendChild(choreListItem)
  }

  toDoHeading.innerText = titleCase(name)
  durationPTag.innerText = 'time' + time
  toDoCard.append(toDoHeading, durationPTag, completionContainer)
  // document.getElementsByClassName('poke-card-container')[0].appendChild(pokeCard)
  
  toDoCardContainer.appendChild(toDoCard)

  toDoCard.addEventListener('click', () => {
    toDoCard.remove()
  })
}
