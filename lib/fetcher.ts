function handleFailedRequests(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(handleFailedRequests)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
}
