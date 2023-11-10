export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  // fetch by itself = GET method automatically
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
      },
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  addCard(inputValues) {
    // the inputValues is passed from index.js and you put these in the body of your fetch request
    // put your fetch request here
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.name,
        link: inputValues.link,
      }),
    });
  }
  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  usersInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      (res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      }
    );
  }

  profileInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",

      headers: this._headers,

      body: JSON.stringify(data),
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

  userAvatar(inputValues) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: inputValues.link,
      }),
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }
}
