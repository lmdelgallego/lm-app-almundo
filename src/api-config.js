let backendHost;
const hostname = window && window.location && window.location.hostname;
if(hostname === 'lm-app-almundo.herokuapp.com'){
  backendHost = 'https://lm-api-almundo.herokuapp.com/';
}else{
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'https://lm-api-almundo.herokuapp.com/';
}

export const API_ROOT = backendHost;
