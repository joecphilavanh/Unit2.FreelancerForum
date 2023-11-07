const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let currentLine = 0;

function displayNextFreelancer() {
  const ulElement = document.getElementById("freelancer-list");
  const averagePriceElement = document.getElementById("average-price");

  if (currentLine >= freelancers.length) {
    clearInterval(intervals);
    return;
  }

  const freelancer = freelancers[currentLine];
  const liElement = document.createElement("li");
  liElement.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: $${freelancer.price}`;
  ulElement.appendChild(liElement);

  const averagePrice = freelancers
    .slice(0, currentLine + 1)
    .reduce((total, freelancer) => total + freelancer.price, 0) / (currentLine + 1);

  averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
  currentLine++;
}

const intervals = setInterval(displayNextFreelancer, 1000);
displayNextFreelancer();
