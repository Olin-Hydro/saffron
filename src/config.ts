// The following configuration parameters are pulled from environment variables if present.
// Otherwise, the defaults below are use (for local development). You'll still need your own API key. 
const REACT_APP_URL = process.env.REACT_APP_URL || "http://localhost:3000" // change this to wherever frontend is hosted
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000"  // change this to wherever API is hosted
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY || "" // you'll need one of these!

export { REACT_APP_URL, REACT_APP_API_URL, REACT_APP_API_KEY };
