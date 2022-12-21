export default function zeroFill(value, width) {
    return value.toString(10).padStart(width, '0');
  }