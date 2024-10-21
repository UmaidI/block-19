// First we are going to create a group of arrays
// each array is gonna have a name, a occupation, and a price
// we are gonna grab that array and put it in the corresponding spot

const names = ['John','David','Rachel','Emily'];
const occupations = ['Painter','Server','Detailer', 'Doctor'];
let total = 0;
let priceCount = 0;

const getRandomName = (namesArr) => {
  const randomFirstName = namesArr[Math.floor(Math.random() * namesArr.length)];
  return randomFirstName;
}

const getRandomOccupation = (jobsArr) => {
  const randomOccupation = jobsArr[Math.floor(Math.random() * occupations.length)];
  return randomOccupation;
}



const intervalId = setInterval(() => {
  const name = document.querySelector(`#name`);
  const newName = document.createElement(`li`);
  newName.innerText = getRandomName(names);
  newName.classList.add(`listed-names`);


  name.append(newName);

  const identification = document.querySelectorAll(`.listed-names`);
    if(identification.length >= 8){
      clearInterval(intervalId);
}
}, 3000);



const intervalId2 = setInterval(() => {

  const job = document.querySelector(`#job`);
  const newJob = document.createElement(`li`);
  newJob.innerText = getRandomOccupation(occupations); 
  newJob.classList.add(`listed-jobs`);

  job.append(newJob);

  const careers = document.querySelectorAll(`.listed-jobs`);
    if(careers.length >= 8){
      clearInterval(intervalId2);
  }
}, 3000);


const intervalId3 = setInterval(() => {

  const price = document.querySelector(`#price`);
  const newPrice = document.createElement(`li`);
  const randomPrice = `$${Math.floor(Math.random() * 100)}`;
  newPrice.innerText = randomPrice;
  newPrice.classList.add(`listed-prices`)

  

  price.append(newPrice);

  total += randomPrice;
  priceCount++

  const averagePrice = (total / priceCount)


  
  document.querySelector(`#average`).innerText = `Average Price: $${averagePrice}`;

  const cost = document.querySelectorAll(`.listed-prices`);
    if(cost.length >= 8){
      clearInterval(intervalId3)
  }
}, 3000);

