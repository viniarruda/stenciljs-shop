const getProducts = () => {
  const apiKey = '8x83x2azqeaqvq7pzaqmvgg5';
  const url = `http://api.walmartlabs.com/v1/paginated/items?format=json&category=3944_96469&brand=Apple&apiKey=${apiKey}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    console.log('data', data);
    return data;
  }).catch((err) => {
    console.log('ERRO FETCH', err);
  })
}

const getProductById = (id: string) => {
  const apiKey = '8x83x2azqeaqvq7pzaqmvgg5';
  const url = `http://api.walmartlabs.com/v1/items/${id}?format=json&apiKey=${apiKey}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data;
  })
}


export { getProducts, getProductById };
