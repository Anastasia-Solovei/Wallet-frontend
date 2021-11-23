import axios from 'axios';

async function fetchCurrency() {
  const { data } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: ``,
      },
    },
  );
  return data;
}

export default { fetchCurrency };
