const randomString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const idLength = 5;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function generateRandomText() {
  let randomId = "";
  for (let i = 0; i < idLength; i++) {
    randomId += randomString[getRandomInt(1, randomString.length)];
  }
  return randomId;
}
