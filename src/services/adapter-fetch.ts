import axios from 'axios';

export const adapterConfigUrl = 'https://kendraio.github.io/kendraio-adapter/config.json';

export async function fetchAdapterConfig() {
  const { data } = await axios.get(adapterConfigUrl);
  // console.log(data);
  return data;
}
