export default class UserInfo {
  constructor(name, job, avatar) {
    this._name = name;
    this._job = job;
    this._avatar= avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
  setAvatarInfo(link){
    this._avatar.src=link;
  }
}
