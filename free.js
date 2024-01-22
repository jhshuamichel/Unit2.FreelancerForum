document.addEventListener("DOMContentLoaded", function() {
// array of freelancers with names and occupation
const freelancers = [
    { name: "Iron Man", price: 25, occupation: "engineer" },
    { name: "Spider-Man", price: 51, occupation: "pizza-man" },
    { name: "Professor X", price: 43, occupation: "teacher" },
    { name: "Captain America", price: 81, occupation: "superhero" },
    { name: "Black Widow", price: 43, occupation: "spy" },
    { name: "Thor", price: 76, occupation: "proctertor" },
    { name: "Hawkeye", price: 47, occupation: "archer" },
    { name: "Black Panther", price: 72, occupation: "king" },
    { name: "Josh", price: 462, occupation: "leatherman"},
    { name: "Santa Claus", price: 100, occupation: "donor"},
];

const names = ["Iron Man", "Spider-Man", "Professor X", "Captain America", "Black Widow", "Thor", "Hawkeye", "Black Panther", "Josh", "Santa Claus"];
const occupations = ["engineer", "pizza-man", "teacher", "superhero", "spy", "protector", "archer", "king", "leatherman", "donor"];
const maxLancers = 13;

// function to collect the sum of every freelancers price 
let sum = freelancers.reduce((total, freelancers) => total + freelancers.price, 0);
// function to calculate the average starting price of freelancers
const averagePrice = sum / freelancers.length;

document.getElementById("averagePriceDisplay").textContent = "The average starting price is $" + averagePrice.toFixed(2);
console.log( "The average starting price is " + "$" + averagePrice);

// Create a function to render the initial freelancer data
    const currentFreelancersListDisplay = document.getElementById("currentFreelancersListDisplay");
    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement("p");
        freelancerElement.textContent = `Name: ${freelancer.name}, Price: $${freelancer.price.toFixed(2)}, Occupation: ${freelancer.occupation}`;
        currentFreelancersListDisplay.appendChild(freelancerElement);
    });

// Create a function to generate a new random freelaner every __ seconds
setInterval(() => {
    const newFreelancer = generateRandomFreelancer();
    console.log("New Random Freelancer:", newFreelancer);

// Display the new updated average price 

    sum += newFreelancer.price;
    const updatedAveragePrice = sum / freelancers.length;
    console.log(updatedAveragePrice);

// Display the new freelancer and update the average starting price
    const newfreelancersList = document.getElementById("newfreelancersListDisplay");
    const newfreelancerElement = document.createElement("p");
    newfreelancerElement.textContent = `Name : ${newFreelancer.name}, Price: $${newFreelancer.price.toFixed(2)}, Occupation: ${newFreelancer.occupation}`;
    newfreelancersList.appendChild(newfreelancerElement);

// Display the updated average starting price
document.getElementById("averagePriceDisplay").textContent = "Updated average starting price is $" + updatedAveragePrice.toFixed(2);
}, 10000);

// function to generate a new random freelancer
function generateRandomFreelancer(){
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1;
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];

return { name: randomName, price: randomPrice, occupation: randomOccupation };
}
});