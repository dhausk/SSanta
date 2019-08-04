const apiUrl = 'http://localhost:4040/';

export default {
  async sendList() {
    console.log('reached api JS');
    const res = await fetch(apiUrl);
    return res.json();
  },
};
