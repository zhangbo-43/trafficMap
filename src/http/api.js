import axios from 'axios';
// axios.defaults.timeout = 60000
axios.defaults.baseURL = '/'
import judgeErrorCode from './errorCode.js'
// 添加请求拦截器
axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token');
    config
    return config
})
// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    // 由于状态码没有用http的状态码，全部是后端随性而来，哎~所以状态码返回在res.data里面
    // 这里的状态码可根据实际情况来修改
    if (res.data.code !== undefined) {
        if (res.data.code == '200') {
            return Promise.resolve(res);
        } else {
            // judgeCode详情看errorCode文件
            judgeErrorCode(`code${res.data.code}`, res.data.message)
            return Promise.reject(res);
        }
    } else {
        return res
    }
},
    function (error) {
        // 断网 或者 请求超时 状态
        // if (!error.response) {
        //     // 请求超时状态
        //     if (error.message.includes('timeout')) {
        //       errorMess('请求超时，请检查网络是否连接正常')
        //     } else {
        //       // 可以展示断网组件
        //       errorMess('请求失败，请检查网络是否已连接')
        //     }
        //   return
        // }
        console.log(error)
        return Promise.reject(error);
    }
);
const postRequest = (url, params, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
    return axios({
        method: 'post',
        url: url,
        data: params,
        transformRequest: [function (data) {
            let req = '';
            for (const key in data) {
                req += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
            }
            return req.slice(0, -1);
        }],
        headers,
    });
};

const postRequest1 = (url, params, headers = { 'Content-Type': 'multipart/form-data' }) => {
    return axios({
        method: 'post',
        url,
        data: params,
        headers,
    });
}
const getRequest = (url, params, headers = { 'Content-Type': 'application/json' }) => {
    return axios({
        method: 'get',
        url,
        data: params,
        // credentials: true,
        transformRequest: [function (data) {
            let req = '';
            for (const key in data) {
                req += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
            }
            return req.slice(0, -1);
        }],
        headers,
    }, { withCredentials: true });
}

const imgRequest = (url, params, headers = { 'Content-Type': 'multipart/form-data' }) => {
    return axios({
        method: 'post',
        url,
        data: params,
        headers,
    });
}
const postLogisticsData = (url, params, headers = { 'Content-Type': 'application/json' }) => {
    return axios({
        method: 'post',
        url,
        data: params,
        headers,
    });
};
const putLogisticsData = (url, params, headers = { 'Content-Type': 'application/json' }) => {
    return axios({
        method: 'put',
        url,
        data: params,
        headers,
    });
};

const deleteRequest = (url, params, headers = { 'Content-Type': 'application/json' }) => {
    return axios({
        method: 'delete',
        url,
        data: params,
        headers,
    });
};
const deleteRequest1 = (url, params, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
    return axios({
        method: 'delete',
        url,
        data: params,
        headers,
    });
};

const putRequest = (url, params, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
    return axios({
        method: 'put',
        url,
        data: params,
        headers,
    });
};
const patchRequest = (url, params, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
    return axios({
        method: 'patch',
        url,
        data: params,
        headers,
    });
};
const request = {
    postRequest,
    postRequest1,
    getRequest,
    imgRequest,
    postLogisticsData,
    putLogisticsData,
    deleteRequest,
    deleteRequest1,
    putRequest,
    patchRequest
}
export default request;