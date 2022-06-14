/* eslint-disable accessor-pairs */
class ValorantCard extends HTMLElement {
  set agents (agents) {
    this._agents = agents
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="card">
            <div class="image">
                <img src="${this._agents.fullPortraitV2}" alt="Full portrait of ${this._agents.displayName}">
            </div>
            <div class="description">
                <h2>${this._agents.displayName}</h2>
                <h3>${this._agents.developerName}</h3>
                <div class="data">Role</div>
                <div class="text">
                    <div>${this._agents.role?.displayName}</div>
                    <img src="${this._agents.role?.displayIcon}" alt="Role Agents Icon">
                </div>
                <div class="data">Ability</div>
                <div class="ability">
                    ${this._agents.abilities?.map((ability) => `
                        <div>
                            <img src="${ability.displayIcon}" alt="Icon Ability">
                            <div>${ability.displayName}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="data">About</div>
                <div class="text">${this._agents.description}</div>
            </div>
        </div>
    `
  }
}

customElements.define('valorant-card', ValorantCard)
