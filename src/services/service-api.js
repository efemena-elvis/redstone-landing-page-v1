// ============================================================
// ALL APPLICATION METHODS RELATED TO API HANDLING
// ============================================================
import axios from "axios";
import { urlHash } from "./service-route";
import { getStorage } from "@/utilities/auth-utils";
// import { VESICASH_API_URL } from "@/utilities/constant";

// ===============================
// SERVICE API CLSS
// ===============================
class serviceApi {
  // INSTANTIATE BASE API URL
  constructor() {
    axios.defaults.baseURL = VESICASH_API_URL;
    this.injectTokenInterceptor();
  }

  // ===============================
  // GET API REQUEST
  // ===============================
  async fetch(url, option = { resolve: true, payload: null }) {
    const hashed_url = urlHash(url);

    try {
      const response = await axios.get(hashed_url, this.getHeaders());
      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ========================================
  // GET API REQUEST FROM A CUSTOM BASE_URL
  // ========================================
  async fetchRaw(url, option = { resolve: true, payload: null }) {
    try {
      const response = await axios.get(url);
      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // POST API REQUEST
  // ===============================
  async push(url, { payload = {}, resolve = true, is_attach = false }) {
    try {
      let response = await axios.post(url, payload, this.getHeaders(is_attach));
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // UPDATE API REQUEST
  // ===============================
  async update(url, { payload = {}, resolve = true, is_attach = false }) {
    try {
      let response = await axios.put(url, payload, this.getHeaders(is_attach));
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // DELETE API REQUEST
  // ===============================
  async remove(url, option = { payload: {}, resolve: true }) {
    try {
      let response = await axios.delete(url, {
        data: option.payload,
        ...this.getHeaders(),
      });

      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // HANDLE API REQUEST ERRORS
  // ===============================
  async handleErrors(err) {
    return await err.response?.data;
  }

  // ===============================
  // SETUP REQUEST HEADERS
  // ===============================
  getHeaders(attach = false) {
    // const authUserToken = getStorage();
    const authUserToken = null;

    return attach
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authUserToken}`,
            "V-PUBLIC-KEY": "",
            "V-PRIVATE-KEY": "",
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUserToken}`,
            "V-PUBLIC-KEY": "",
            "V-PRIVATE-KEY": "",
          },
        };
  }

  // ===============================
  // REQUEST AXIOS INTERCEPTOR
  // ===============================
  async injectTokenInterceptor() {
    axios.interceptors.request.use((config) => {
      window?.Nprogres && window?.Nprogres.start();
      return config;
    });

    axios.interceptors.response.use(
      async (response) => {
        window?.Nprogres && window?.Nprogres.done();
        return response;
      },

      // ERROR RESPONSE
      async (error) => {
        window?.Nprogres && window?.Nprogres.done();
        const originalConfig = error.config;

        if (error.response) {
          if (error.response.status === 403 && !originalConfig._retry) {
            originalConfig._retry = true;

            localStorage.clear();
            window.location.href = "/";

            return axios(originalConfig);
          }
        }

        return Promise.reject(error);
      }
    );
  }
}

let $serviceApi = new serviceApi();
export default $serviceApi;
