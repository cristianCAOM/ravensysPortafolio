import api from "./api"; 

export const getProjects = async () => {
  const { data } = await api.get("/api/projects/list");
  // console.log("Proyectos obtenidos:", data);
  return data;
};