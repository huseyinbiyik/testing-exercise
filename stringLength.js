let stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error(
      "String must includes at least one character and not more than 10 characters"
    );
  } else {
    return string.length;
  }
};

module.exports = stringLength;
