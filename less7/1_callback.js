const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = 'HOCs are awesome';
  callback(string);
};

higherOrderFunction(printMessage);