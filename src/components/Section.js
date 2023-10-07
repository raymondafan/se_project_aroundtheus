export default class Section{
  constructor({renderer, selector}){
this._renderer= renderer;
this._selector= document.querySelector(selector);
  }

  renderItems(items){
//use this._renderer to create elements for rendering
  }

addItems(){
  //take items and render it into this._element
}
}
