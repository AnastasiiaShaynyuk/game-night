
export class Player {
  constructor(image, name, score) {
    this.image = image;
    this.name = name
    // The score is defaulted to start at 0
    this.score = score
  }



  get PlayerTemplate() {
    return `
    <div class="col-2 px-3 py-3">
    <img class="border-warning" src="${this.image}" alt="${this.name}"></div>
    <div class="col-4"><h3>${this.name}</h3></div>
    <div class="col-2"><button class="btn btn-warning text-light fw-bold" onclick="app.playersController.subtractScore('${this.name}')">-</button></div>
    <div class="col-2"><h3>${this.score}</h3></div>
    <div class="col-1"><button class="btn btn-warning text-light fw-bold" onclick="app.playersController.addScore('${this.name}')">+</button></div>`
  }
}



// d-flex align-items-center justify-content-around 




// <img class="border-warning" src="${this.image}" alt="${this.name}">