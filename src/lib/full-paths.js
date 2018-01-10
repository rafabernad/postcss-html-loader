const fullPath = require('./full-path');

module.exports = (fps, rp) => fps.map(fp => fullPath(fp, rp));