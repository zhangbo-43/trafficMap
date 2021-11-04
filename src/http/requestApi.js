import hxwApi from "@/http/hxwApi"
import hgsApi from "@/http/hgsApi"
const requestApi = Object.assign(hxwApi, hgsApi)
export default requestApi;