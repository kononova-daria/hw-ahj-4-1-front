export default class Rendering {
  constructor() {
    this.container = null;
    this.msgs = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) throw new Error('Container is not HTMLElement');
    this.container = container;
    this.tickets = [];
  }

  checkBinding() {
    if (this.container === null) throw new Error('Board not bind to DOM');
  }

  draw() {
    this.checkBinding();

    const divMessages = document.createElement('div');
    divMessages.classList.add('msgs-container');
    this.container.appendChild(divMessages);
    this.msgs = divMessages;
  }

  addMsg(data) {
    for (let i = 0; i < data.length; i += 1) {
      const divMsg = document.createElement('div');
      divMsg.classList.add('msg');
      this.msgs.prepend(divMsg);

      const divMailText = document.createElement('div');
      divMsg.appendChild(divMailText);

      const mail = document.createElement('span');
      mail.classList.add('mail');
      mail.textContent = `${data[i].from}`;
      divMailText.appendChild(mail);

      const text = document.createElement('span');
      text.classList.add('text');
      if (data[i].subject.length < 15) {
        text.textContent = `${data[i].subject}`;
      } else {
        const newText = data[i].subject.slice(0, 15);
        text.textContent = `${newText}...`;
      }
      divMailText.appendChild(text);

      const divDate = document.createElement('div');
      divDate.classList.add('date-container');

      const date = new Date(data[i].received);
      let year = date.getFullYear();
      year = String(year).slice(2);
      let month = date.getMonth() + 1;
      if (month < 10) month = `0${month}`;
      let day = date.getDate();
      if (day < 10) day = `0${day}`;
      let hours = date.getHours();
      if (hours < 10) hours = `0${hours}`;
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = `0${minutes}`;

      divDate.textContent = `${hours}:${minutes} ${day}.${month}.${year}`;
      divMsg.appendChild(divDate);
    }
  }
}
