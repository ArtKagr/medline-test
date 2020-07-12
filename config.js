const hostApi = process.env.NODE_ENV === "development" ? "https://dev.eu39.ru/" : "https://dev.eu39.ru/";
const portApi = process.env.NODE_ENV === "development" ? "" : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  hostApi,
  portApi,
  baseURLApi
};
