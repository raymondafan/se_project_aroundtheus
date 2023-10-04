export default class Section{
  constructor({renderer, selector}){
this._renderer= renderer;
this._selecter= document.querySelector(selector);
  }

  renderItems(data){
//use this._renderer to create elements for rendering
  }

addItems(){
  //take items and render it into this._element
}
}
