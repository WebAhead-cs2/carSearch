
const removeDuplicates = (arr) => Array.from(new Set(arr));

const returnCarModels = async (make) => {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=20&make=${make}`,
    {
      method: "GET",
      headers: {
        "x-api-key": "6jcggFNiA/gEk3cyslBfBA==yUhA49i4BE2Q9oMo",
      },
    }
  );
  const cars = await response.json();
  // TODO remove duplicates
  const carModelArr = [];
   
  for (let car of cars) {
    carModelArr.push(make + " " + car.model);
  }
  let arr=[];
  arr=removeDuplicates(carModelArr);
  return arr;
};
// let arr=[];
// arr=returnCarModels("audi").then((result) => console.log(result)); // delete and use in another file
 
module.exports = { returnCarModels };
 
