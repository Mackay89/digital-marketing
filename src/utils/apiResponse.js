// apiResponse.js

export const successResponse = (data, message = "Operation successful") => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (error, message = "Operation failed") => {
  return {
    success: false,
    message,
    error: error.message || error,
  };
};

export const handleApiError = (error, fallbackMessage = "An error occurred") => {
  console.error("API Error:", error);
  return errorResponse(error, fallbackMessage);
};

