class MyLibrary {
  constructor() {
    this.version = '1.0.0';
  }

  greet() {
    if (typeof window !== 'undefined') {
      return 'Hello Browser!';
    }
    return 'Hello Node.js!';
  }
}

function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

module.exports = {
  default: MyLibrary,
  info
};