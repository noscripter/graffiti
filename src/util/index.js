function isGet(request) {
  return request.method === 'GET';
}

function isPrefixed(request, prefix) {
  return request.path.indexOf(prefix) === 0;
}

function checkDep(obj, propName) {
  if (!obj) {
    throw new Error('Object cannot be undefined');
  }

  if (!obj[propName]) {
    throw new Error(propName + ' cannot be undefined');
  }

  return obj[propName];
};

module.exports.checkDep = checkDep;
module.exports.isGet = isGet;
module.exports.isPrefixed = isPrefixed;
