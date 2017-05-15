module.exports = function plural(label, amount) {
  return `${amount} ${label}${amount > 1 ? 's' : ''}`;
};
