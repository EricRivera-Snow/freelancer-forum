// Add support for more freelancers
const names = ["Alice", "Bob", "Carol", "John", "Jane", "Eric"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Consultant",
  "Musician",
];
const startingPrices = [30, 50, 70, 90, 110, 10];
const maxFreelancer = 50;
const arrayFreelancer = [
  { Name: "Name", Occupation: "Occupation", StartingPrice: "Starting Price" },
  { Name: "Alice", Occupation: "Writer", StartingPrice: 30 },
  { Name: "Bob", Occupation: "Teacher", StartingPrice: 50 },
];
console.log(arrayFreelancer);

// === Create functions ===

// Add the first freelancer, who is Carol
function addCarol() {
  const firstAdd = {
    Name: "Carol",
    Occupation: "Programmer",
    StartingPrice: 70,
  };
  arrayFreelancer.push(firstAdd);
  return firstAdd;
}

// Add a randomized freelancer to the array
function addFreelancer() {
  if (arrayFreelancer.length >= maxFreelancer) {
    clearInterval(addFreelanceIntervalId);
  }
  const Name = names[Math.floor(Math.random() * names.length)];
  const Occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const StartingPrice =
    startingPrices[Math.floor(Math.random() * startingPrices.length)];

  arrayFreelancer.push({ Name, Occupation, StartingPrice });
}

// calculate average price
function averagePrice() {
  let sum = 0;
  let count = 0;
  for (i = 1; i < arrayFreelancer.length; i++) {
    sum += arrayFreelancer[i].StartingPrice;
    count += 1;
  }
  const average = sum / count;
  return average;
}

// Render the updating list
function render() {
  const freelanceList = document.querySelector("#freelancers");
  const freelanceElements = arrayFreelancer.map((freelancer, index) => {
    const freelanceElement = document.createElement("li");
    const startingPriceText =
      index === 0 ? freelancer.StartingPrice : `$${freelancer.StartingPrice}`;
    freelanceElement.innerText = `${freelancer.Name} | ${freelancer.Occupation} | ${startingPriceText}`;
    return freelanceElement;
  });
  freelanceList.replaceChildren(...freelanceElements);

  const averagePriceElement = document.querySelector("#averagePriceValue");
  const averageElement = document.createElement("li");
  averageElement.innerText = `Average Price: ${averagePrice().toFixed(2)}`;
  averagePriceElement.replaceChildren(averageElement);
}

// === Execute functions ===
setTimeout(() => {
  addCarol();
  render();
}, 2000);

const addFreelanceIntervalId = setInterval(() => {
  addFreelancer();
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}, 4000);

render();
