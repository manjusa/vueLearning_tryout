export default function getRandomOption() {
  const options = [1, 2];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
