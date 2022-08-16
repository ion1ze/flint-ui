export class Message {
  constructor(){
    this.id = 0;
    this.container = undefined;
    this.initialize();
  }

  initialize(){
    const className = "flint-messages";
    this.container = document.getElementsByClassName(className)[0];

    if(!this.container){
      this.container = document.createElement('div');
      this.container.className = className;
      document.body.append(this.container);
    }
  }

  _create(message,duration = 3000,type = 'default'){
    const root = document.createElement('div');
    root.className = `flint-message ${type}`;
    root.dataset.id = this.id;
    
    const content = document.createElement('div');
    content.className = 'content';
    const html = `<span>${message}</span>`;
    content.innerHTML = html;
    root.append(content);

    this.container.append(root);

    const messages = document.querySelectorAll('div.flint-message');
    const length = messages.length;
    const lastMessage = messages[length -1];

    lastMessage._timer = setTimeout(()=>{
      this.remove(lastMessage.dataset.id);
    },duration);
    this.id++;
  }

  remove(id){
    const message = document.querySelector(`div.flint-message[data-id='${id}']`);
    clearTimeout(message._timer);
    message.remove();
  }

  success(message){
    this._create(message,3000,'success');
  }

  error(message){
    this._create(message,3000,'error');
  }

  info(message){
    this._create(message,3000,'info');
  }

  warn(message){
    this._create(message,3000,'warn');
  }
}