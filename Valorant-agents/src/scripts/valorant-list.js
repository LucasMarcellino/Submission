/* eslint-disable accessor-pairs */
import './valorant-card.js'

class ValorantList extends HTMLElement {
  set agents (agents) {
    this._agents = agents
    this.render()
  }

  render () {
    this._agents.forEach(agents => {
      const valorantElement = document.createElement('valorant-card')
      valorantElement.agents = agents
      this.appendChild(valorantElement)
    })
  }
}

customElements.define('valorant-list', ValorantList)
