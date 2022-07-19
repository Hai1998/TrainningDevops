const API_ENDPOINT = 'http://api.demo.nordiccoder.com/api';

export function getProducts() {
  return fetch(`${API_ENDPOINT}/products`)
    .then(handleErrors)
    .then(res => res.json());
}

export function getProductDetail(id) {
  return fetch(`${API_ENDPOINT}/products/${id}`)
    .then(handleErrors)
    .then(res => res.json());
}

export function getOrders() {
  return fetch(`${API_ENDPOINT}/orders`)
    .then(handleErrors)
    .then(res => res.json());
}

export function getOrdersDetail(id) {
  return fetch(`${API_ENDPOINT}/orders/${id}`)
    .then(handleErrors)
    .then(res => res.json());
}

/*
payload: {
  id: 'string id',
  name: 'string',
  orderDate: '2019-03-02T08:18:26.584Z',
  shippedDate: '2019-03-02T08:18:26.584Z',
  customerId: 'string id',
  status: 'string' Done | InProgressing | Cancelled
};
*/
export function createOrder(payload) {
  return fetch(`${API_ENDPOINT}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(handleErrors)
    .then(res => res.json());
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
