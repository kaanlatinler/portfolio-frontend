import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7007/v1/",
});

export async function login(data) {
  try {
    const response = await api.post("/accounts/login", data);
    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function AddCategory(data) {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.post("/categories/create-category", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to add category");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function AddTech(data) {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.post("/languages/create-language", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to add tech");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function GetCategories() {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.get("/categories/get-all-categories", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get categories");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function GetTechs() {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.get("/languages/get-all-languages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get techs");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function AddProject(data) {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.post("/projects/create-project", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to add project");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function GetProjects() {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.get("/projects/get-all-projects", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get projects");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function DeleteProject(id) {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.delete(`/projects/delete-project/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete project");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}

export async function GetProjectByName(name) {
  const token = sessionStorage.getItem("token");
  try {
    const response = await api.get(`/projects/get-project-by-name/${name}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get project by name");
    }
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
}
