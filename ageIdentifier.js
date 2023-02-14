function  calculateAge(birthYear,year) {
    age = year-birthYear;
    if(age==1)
      return "You are 1 year old.";
    else if(age===-1)
      return "You will be born in 1 year."
    else if(age>0)
      return "You are " + age + " years old.";
    else if(age<0) {
      age = birthYear-year;
      return  "You will be born in " + age + " years."
    }
    else {
      return "You were born this very year!";
    }
 }