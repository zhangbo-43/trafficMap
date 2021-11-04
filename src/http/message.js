import {Message} from 'element-ui';
export const successMess = message => { Message.success({ message }) }
export const warningMess = message => { Message.warning({ message }) }
export const errorMess = message => { Message.error({ message }) }

// 多个消息提醒时只显示一个
let messageInstance = null;
const resetMessage = (options) => {
  if(messageInstance) {
      messageInstance.close()
  }
  messageInstance = Message(options)
};
['error','success','info','warning'].forEach(type => {
  resetMessage[type] = options => {
      if(typeof options === 'string') {
          options = {
              message:options
          }
      }
      options.type = type
      return resetMessage(options)
  }
})
export const Message1 = resetMessage