// dateUtils.js

export const formatDate = (date, locale = "en-US", options = {}) => {
  return new Intl.DateTimeFormat(locale, { 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
    ...options 
  }).format(new Date(date));
};

export const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

export const addDaysToDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

