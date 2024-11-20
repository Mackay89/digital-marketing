// authApi.js

export const login = async (credentials) => {
  try {
    // Simulate API call
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ token: "fake-jwt-token", user: { id: 1, name: "John Doe" } }), 500)
    );
    return response;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const logout = async () => {
  try {
    // Simulate API logout
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { message: "Logout successful" };
  } catch (error) {
    throw new Error("Logout failed");
  }
};

