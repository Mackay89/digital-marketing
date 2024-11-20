// Success response format
const successResponse = (res, data, message = 'Request successful') => {
    return res.status(200).json({
        success: true,
        message,
        data,
    });
};

// Error response format
const errorResponse = (res, error, message = 'Request failed', statusCode = 400) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};

module.exports = { successResponse, errorResponse };

