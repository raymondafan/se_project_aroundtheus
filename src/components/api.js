export default class Api {
  constructor() {
    // stuff
  }

  addCard(inputValues) {
    // the inputValues is passed from index.js and you put these in the body of your fetch request
    // put your fetch request here
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
  method: "POST",
  headers: {
    authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Marie Skłodowska Curie",
    link: "https://i.kym-cdn.com/entries/icons/original/000/046/728/alligator_kick.jpg"
  })
});
  }
  getCard(){
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "GET",
    headers: {
      authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
  }
  usersInfo(){
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  method: "PATCH",
  headers: {
    authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Marie Skłodowska Curie",
    about: "Physicist and Chemist"
  })
});
  }
}