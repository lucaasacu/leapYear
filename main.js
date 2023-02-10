
let result = document.getElementById("result");
let btn = document.getElementById("get-leap-years");
let btn2 = document.getElementById("get-leap");

//Get Leap years when the button is clicked
btn.addEventListener("click", () => {
  //Get values from the input fields
  //Number() converts string value to number
  let startYear = Number(document.getElementById("start-year").value);
  let endYear = Number(document.getElementById("end-year").value);

  //If both start and end year are invalid
  if (
    (startYear < 1800 || startYear > 2999) &&
    (endYear < 1800 || endYear > 2999)
  ) {
    result.innerHTML = `<b>The start year and end year should be greater than 1800 and less than 3000.</b>`;
  }


  else if (startYear > endYear) {
    result.innerHTML = `<b>End year should be greater than the start year.</b>`;
  }


  else if (startYear < 1800 || startYear > 2999) {
    result.innerHTML = `<b>The start year should be greater than 1800 and less than 3000.</b>`;
  }


  else if (endYear < 1800 || endYear > 2999) {
    result.innerHTML = `<b>The end year should be greater than 1800 and less than 3000.</b>`;
  }


  else {

    let leapYears = [];
    for (let i = startYear; i <= endYear; i++) {
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        leapYears.push(i);
      }
    }


    result.innerHTML = `<b>There are ${
      leapYears.length
    } leap years between ${startYear} & ${endYear}.</b><span>${leapYears
      .toString()
      .split(",")
      .join(", ")}</span>`;

     
    }});

    btn2.addEventListener("click", () => {
        //Get values from the input fields
        //Number() converts string value to number
        let leap;
        let yearToSearch = Number(document.getElementById("search-year").value);
        if(yearToSearch % 4 == 0  || yearToSearch % 400 == 0){
            leap = 'a leap year';
        }else{
            leap = 'not a leap year';
        }
        resultYear.innerHTML = `<b>The year ${yearToSearch}
        its ${leap}</b>`



  });