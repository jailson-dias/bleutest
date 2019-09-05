// converte o formato br do número (com vírgula) para float
export const brNumberToFloat = number => {
  if (number && (typeof number === "string" || number instanceof String)) {
    number = number.replace(".", "").replace(",", ".");
    return parseFloat(number);
  }
  return number;
};

// converte o valor de float para o formato br, com vírgula e deixa ele com 2 casas decimais
export const floatToBrNumber = number => {
  if (typeof number === "number") {
    return number
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }
  return number;
};
