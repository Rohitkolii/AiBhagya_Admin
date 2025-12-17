import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type" : "application/json",
    }
})

const AXIOS = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type" : "application/json",
    }
})



// Auto attach token
AXIOS.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" && localStorage.getItem("aibhagya_auth");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 🔥 Handle Unauthorized
AXIOS.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("Error====>",err)
    if (err.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.clear();
        window.location.href = "/";
      }
    }
    return Promise.reject(err);
  }
);


//Report Categories API

export const GetReportCategories = async () => {
  try {
    const response = await api.get("/admin_urls/report-categories/");
    return {status: response?.status, data: response?.data, message: response?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export const AddReportCategories = async (data) => {
  try {
    const response = await AXIOS.post(`/admin_urls/report-categories/`, data,{
      headers : {"Content-Type": "multipart/form-data"}
    });
    return {status: response?.data?.status, data: response?.data?.data || null, message: response?.data?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export const UpdateReportCategory = async (data, id) => {
  try {
    const response = await AXIOS.put(`/admin_urls/report-categories/${id}/`, data,{
      headers : {"Content-Type": "multipart/form-data"}
    });
    return {status: response?.data?.status, data: response?.data?.data || null, message: response?.data?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export const GetSingleReportCategory = async (id) => {
  try {
    const response = await api.get(`/admin_urls/report-categories/${id}/`);
    return {status: response?.status, data: response?.data, message: response?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

//Reports API

export const GetReports = async () => {
  try {
    const response = await api.get("/admin_urls/reports/");
    return {status: response?.data?.status, data: response?.data, message: response?.data?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export const AddReports = async (data) => {
  try {
    const response = await AXIOS.post(`/admin_urls/reports/`, data);
    return {status: response?.data?.status, data: response?.data?.data || null, message: response?.data?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export const GetUsers = async () => {
  try {
    const response = await api.get("/admin_urls/users/");
    return {status: response?.data?.status, data: response?.data?.data, message: response?.data?.message};
  } catch (error) {
    console.log("Error in Getting Cards: ", error);
  }
}

export default api;
