export default function parseJSON(response) {
  return response.json().then(json => ({
    status: response.status,
    json,
  }));
}
