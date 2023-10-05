console.log("Matrix Dom Manipulation")

const body = document.body

body.style.backgroundColor = 'black'
body.style.color = 'white'

const hOne = document.querySelector('#main-heading')
console.log(hOne)
// document.getElementById()

// main.innerHTML += '<h3>Students</h3>'

// Removing or effecting button event listener after eventlistern
const themeButton = document.createElement('button')

themeButton.innerText = 'Light Mode'

body.append(themeButton)

themeButton.addEventListener('click', () => {
  if (body.style.backgroundColor === 'black') {
    lightMode()
  } else {
    darkMode()
  }
})

function lightMode() {
  body.style.backgroundColor = 'white'
  body.style.color = 'black'
  themeButton.innerText = 'Dark Mode'
}

function darkMode() {
  body.style.backgroundColor = 'black'
  body.style.color = 'white'
  themeButton.innerText = 'Light Mode'
}

const main = document.getElementsByTagName('main')[0]
main.style.display = 'flex'
main.style.gap = '10px'

const studentsHeader = document.createElement('h3')
studentsHeader.innerText = 'Students'


const studentArray = ['tom garret', 'lyla', 'josh', 'porter', 'raul', 'tim']
const studentArray2 = ['senait', 'mel', 'milad', 'mabel']


const listContainer = document.getElementById('student-container')
for (const [i, student] of studentArray.entries()) {
  const li = document.createElement('li')
  li.innerText = titleCase(student)
  li.id = i
  listContainer.appendChild(li)
}

for (const [i, student] of studentArray2.entries()) {
  listContainer.innerHTML += `<li id=${i + studentArray.length}>${titleCase(student)}</li>`
}

function titleCase(astring) {
  let output = ''
  const wordsArray = astring.split(' ')
  for (const word of wordsArray) {
    output += word[0].toUpperCase() + word.substring(1) + ' '
  }
  return output.trim()
}

const pokeForm = document.querySelector('#poke-form')

pokeForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName = getPokeName()
  console.log(pokemonName)
  const pokeData = await pokeApiCall(pokemonName)
  makePokeCard(pokeData)
})

function getPokeName() {
  return document.querySelector('#poke-field').value
}

async function pokeApiCall(pokemonName) {
  // https://pokeapi.co/api/v2/pokemon/<pokemon>
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if (res.ok) {
    const data = await res.json()
    return {
      name: data.name,
      weight: data.weight,
      abilites: getAbilityNames(data.abilities),
      imgUrl: data.sprites.versions['generation-v']['black-white'].animated.front_default ?? data.sprites.front_default
    }
  } else window.alert('Invalid Pokename')
}

function getAbilityNames(abilites) {
  const abilityNameArray = abilites.map((ob) => ob.ability.name)
  return abilityNameArray
}

const pokeCardContainer = document.querySelector('.poke-card-container')
pokeCardContainer.style.display = 'flex'

function makePokeCard({abilites, imgUrl, weight, name}) {

  const pokeCard = document.createElement('div')
  const pokeHeading = document.createElement('h3')
  const weightPTag = document.createElement('p')
  const attributeContainer = document.createElement('ul')
  const pokeImg = document.createElement('img')

  for (const abilityName of abilites) {
    const abilityListItem = document.createElement('li')
    abilityListItem.innerText = abilityName
    attributeContainer.appendChild(abilityListItem)
  }

  pokeImg.src = imgUrl
  pokeHeading.innerText = titleCase(name)
  weightPTag.innerText = 'Weight ' + weight
  pokeCard.append(pokeHeading, weightPTag, pokeImg, attributeContainer)
  // document.getElementsByClassName('poke-card-container')[0].appendChild(pokeCard)
  
  pokeCardContainer.appendChild(pokeCard)

  pokeCard.addEventListener('click', () => {
    pokeCard.remove()
  })
}
