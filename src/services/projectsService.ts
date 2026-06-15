import api from "./api"; 

export const getProjects = async () => {
  const response = await api.get(
    "/api/projects/list"
  );

  return response.data;
};