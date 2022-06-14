import '../style/main.css'
import './valorant-list.js'
import axios from 'axios'

// https://valorant-api.com/

const main = document.querySelector('main')
const valorantCardList = document.createElement('valorant-list')

const BASE_URL = 'https://valorant-api.com/v1/agents'

axios.get(BASE_URL).then((response) => {
  const agents = response.data.data
  const agentsPlayable = agents.filter((playable) => {
    return playable.isPlayableCharacter === true
  })
  valorantCardList.agents = agentsPlayable
  console.log(agentsPlayable)
})

main.append(valorantCardList)
