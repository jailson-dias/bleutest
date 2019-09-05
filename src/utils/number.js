export const brNumberToFloat = number => {
  if (number && (typeof number === "string" || number instanceof String)) {
    number = number.replace(".", "").replace(",", ".");
    return parseFloat(number);
  }
  return number;
};

export const floatToBrNumber = number => {
  if (typeof number === "number") {
    return number
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }
  return number;
};
