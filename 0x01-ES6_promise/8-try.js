export default function divideFunction(numerator, denominator) {
  try {
    const division = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return division;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
