let backendHost;

const hostname = window && window.location && window.location.hostname;
console.log(hostname);
if(hostname === 'lm-app-almundo.herokuapp.com'){
  backendHost = 'https://lm-api-almundo.herokuapp.com/';
}else{
  console.log(process.env.REACT_APP_BACKEND_HOST);
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:1234';
}

export const API_ROOT = backendHost;
