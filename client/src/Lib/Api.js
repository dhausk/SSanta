const apiUrl = 'http://localhost:4040/form';

export default {
  async sendList(state) {
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  },
};
