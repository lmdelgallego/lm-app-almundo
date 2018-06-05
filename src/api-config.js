let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'herokuapp.com'){
  backendHost = 'https://lm-api-almundo.herokuapp.com/';
}else{
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:1234';
}

export const API_ROOT = backendHost;
