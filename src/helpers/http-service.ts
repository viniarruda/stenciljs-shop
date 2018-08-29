const getProducts = () => {
  const apiKey = '8x83x2azqeaqvq7pzaqmvgg5';
  const url = `http://api.walmartlabs.com/v1/paginated/items?format=json&category=3944_96469&brand=Apple&apiKey=${apiKey}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data;
  })
}

export { getProducts };
