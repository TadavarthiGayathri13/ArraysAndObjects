const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find the min and max age
const sortedAges = ages.slice().sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// 2. Find the median age
let medianAge;
const midIndex = Math.floor(sortedAges.length / 2);
if (sortedAges.length % 2 === 0) {
    medianAge = (sortedAges[midIndex - 1] + sortedAges[midIndex]) / 2;
} else {
    medianAge = sortedAges[midIndex];
}

// 3. Find the average age
const sumOfAges = sortedAges.reduce((acc, age) => acc + age, 0);
const averageAge = sumOfAges / sortedAges.length;

// 4. Find the range of ages
const rangeOfAges = maxAge - minAge;

// 5. Compare the values of (min minus average) and (max minus average)
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", sortedAges);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", rangeOfAges);
console.log("Difference between Min and Average:", diffMinAverage);
console.log("Difference between Max and Average:", diffMaxAverage);
