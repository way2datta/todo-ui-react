const randomString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const idLength = 5;

function getRandomInt(minValue, maxValue) {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateRandomText() {
  let randomId = '';
  for (let i = 0; i < idLength; i++) {
    randomId += randomString[getRandomInt(1, randomString.length)];
  }
  return randomId;
}
