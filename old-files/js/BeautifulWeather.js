
//---------------------Defining the Names of Each Day of the Week----------------------
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];



  const abbreviatedDayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
  ];



//----------------------Defining the Name of Each Month of the Year-------------------------



  const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  
  ];

  
  const currentDate = new Date();
  const currentWeekday = {
    fullName: dayNames[currentDate.getDay()],
    abbreviatedName: abbreviatedDayNames[currentDate.getDay()]
  };
  
  
  
  const currentFullDate = {
    Weekday: currentWeekday.fullName,
    Day: currentDate.getDate(),
    Month: monthNames [currentDate.getMonth()],
    Year: currentDate.getFullYear()
  };
  
  document.querySelector(".currentDate").textContent = currentFullDate.Weekday +
  ", " +
  currentFullDate.Day + 
  " " +
  currentFullDate.Month + 
  " " +
  currentFullDate.Year;

//-----------------------------Toggling the Hamburger Menu----------------------------


function toggleMenu() {
    
    document.querySelector("ul").classList.toggle("hide");
    document.querySelector(".top").classList.toggle("active");
    document.querySelector(".middle").classList.toggle("active");
    document.querySelector(".bottom").classList.toggle("active");
}

    








//--------------------------------- Webfront Load -------------------------------------------

WebFont.load ({
    google: {
        families: [
            'Poiret One',
            'Lato'
        ]
    }
});

