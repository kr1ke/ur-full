// API configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'http://backend:4444' // Docker service name inside container network
  : 'http://localhost:4444'; // Local development
