export default class Fetch {
  constructor(url, method, data) {
    let form = []
    for (let key in data) {
      form.push(`${key}=${data[key]}`)
    }
    return fetch('//localhost:8000' + url, {
      method,
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: form.join('&')
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
  }
}