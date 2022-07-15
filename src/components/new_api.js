const newApi = async (url) => {
  const fullUrl = `${url}/apps/`;
  const request = new Request(fullUrl);

  const response = await fetch(request, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const output = await response.json();
  return output;
};

export { newApi as default };
