export default class Section{
  constructor({renderer, selector}){
this._renderer= renderer;
this._selector= document.querySelector(selector);

  }

  renderItems(data){
//use this._renderer to create elements for rendering

  }

addItems(item){
  //take items and render it into this._element
}
}
