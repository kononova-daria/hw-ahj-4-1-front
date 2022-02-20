import { ajax } from 'rxjs/ajax';

export default class Actions {
  constructor(page) {
    this.page = page;
  }

  init() {
    setInterval(() => {
      ajax.getJSON('https://hw-ahj-4-1.herokuapp.com/messages/unread').subscribe((response) => {
        this.page.addMsg(response);
      });
    }, 15000);
  }
}
