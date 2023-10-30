export default class Api {
  constructor() {
    // stuff
  }
  getInitialCards() {
<<<<<<< HEAD
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  _handleErrorResponse() {
=======
    return fetch("https://around-api.en.tripleten-services.com/v1/cards",{
      headers: {
        authorization: "7df31549-2772-46fa-8dab-555ea4e32993"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      });
  }

 _handleErrorResponse(){
>>>>>>> 833dbaeb7806d6cfb52c74903c38c386163981d3
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
<<<<<<< HEAD
  }
=======
 }
>>>>>>> 833dbaeb7806d6cfb52c74903c38c386163981d3

  addCard(inputValues) {
    // the inputValues is passed from index.js and you put these in the body of your fetch request
    // put your fetch request here
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
<<<<<<< HEAD
      method: "POST",
      headers: {
        authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValues.name,
        link: inputValues.link,
      }),
    }).then(this._handleErrorResponse);
  }
  
  usersInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }
  profileInfo() {}
  userAvatar() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Marie Skłodowska Curie",
          avatar:
            "https://i.kym-cdn.com/entries/icons/original/000/046/728/alligator_kick.jpg",
        }),
      }
    );
  }
}
=======
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
  usersInfo(){
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
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
  profileInfo(){

  }
  userAvatar(){
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me/avatar", {
  method: "PATCH",
  headers: {
    authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Marie Skłodowska Curie",
    avatar: "https://i.kym-cdn.com/entries/icons/original/000/046/728/alligator_kick.jpg"
  })
});
  }
}
>>>>>>> 833dbaeb7806d6cfb52c74903c38c386163981d3
