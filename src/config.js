import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: "http://185.250.206.164:1010/api/"
    // baseURL: "http://192.168.0.190:8080/api/"

    // baseURL: "http://213.230.125.86:48908/api/"
    baseURL: "http://192.168.0.191:8080/api/"
    // baseURL: "http://213.230.125.86:48908/api/"
});

// export const url = "http://192.168.0.190:8080"

export const url = "http://192.168.0.191:8080"

// export const url = "http://185.250.206.164:1010";
// export const url = "http://213.230.125.86:48908";
// export const url = "http://213.230.125.86:48908";
// export const url = "http://192.168.0.191:8080"
    // baseURL: "http://192.168.0.191:8080/api/"

// export const url = "http://185.250.206.164:1010";
// export const url = "http://213.230.125.86:48908";
// export const url = "http://213.230.125.86:48908";
