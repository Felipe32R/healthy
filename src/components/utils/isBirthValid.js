export default function isBirthValid(birth) {
  const regex = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/;

  return regex.test(birth);
}
