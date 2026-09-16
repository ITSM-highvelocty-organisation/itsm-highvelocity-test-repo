const items = [
  { id: 'itm-1', name: 'Laptop refresh', status: 'open' },
  { id: 'itm-2', name: 'VPN access', status: 'closed' },
];

module.exports = {
  list: () => items.slice(),
  find: (id) => items.find((item) => item.id === id) || null,
};
