// utils/dateUtils.js

// Function to format date to 'es-MX' locale
export const formatDateToEsMX = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-MX', options);
};
