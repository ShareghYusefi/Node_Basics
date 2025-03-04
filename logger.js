function logger(message) {
  console.log(message);
}

// export the logger function to be used in other files
// logger without the parenthesis is a reference to the function
module.exports = logger;
