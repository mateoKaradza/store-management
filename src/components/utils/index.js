export function parseJSON(response) {
  return response.json().then(json => ({
    status: response.status,
    json,
  }));
}

export function getToken() {
  return localStorage.getItem('token');
}
