// 单独对信息提示做了封装，引入message文件
import { errorMess, Message1 } from './message.js'

import router from '../router'
// 由于不想在每个代码里面判断（懒），所以将判断全部提出来，放在拦截器里面进行判断（code虽然可能一样，但是提示信息不同）
// 代码里面只写成功的返回数据
// 条件过多不考虑条件判断（后期可能会添加）
// 修改代码往往比增加代码危险很多
// 需要根据状态码的不同进行不同操作

const judgeErrorCode = (code, message) => {
    // 判断errorCode[code]是否为一个函数
    // errorMess(message)
    if (errorCode[code] instanceof Function) {
        // 调用该函数
        errorCode[code](message);
    }
};
const errorCode = {
    code201: function (message) {
        errorMess(message);
        // console.log('更新失败');
    },
    code202: function (message) {
        // console.log('参数不足');
        errorMess(message);
    },
    code403: function (message) {
        // console.log('未授权');
        Message1.error(message);
    },
    code401: function (message) {
        router.replace('/');
        // 清空本地用户ID，并重新登录
        sessionStorage.clear();
        Message1.error(message);
    },
    code666: function (message) {
        router.replace('/remoteSearch');
        // 清空本地用户ID，并重新登录
        sessionStorage.clear();
        errorMess(message);
    },
    code500: function (message) {
        // 服务器错误
        errorMess(message)
    },
}
export default judgeErrorCode;