import axios from 'axios';

async function fetchCurrency() {
  const { data } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  );
  return data;
}

export default { fetchCurrency };