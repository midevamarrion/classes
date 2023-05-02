// You are working on a web application for a car rental company. They want to keep track
//of their car inventory and rental information. Your task is to create a JavaScript class or
//function constructor for representing cars in their inventory and another one for
//representing rental information.
//Requirements:
//Create a Car class or function constructor that has the following properties:
//make (string): The make of the car, e.g., "Toyota".
//model (string): The model of the car, e.g., "Camry".
//year (number): The year the car was manufactured, e.g., 2020.
//isAvailable (boolean): Indicates if the car is currently available for rent.
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
//false, false to true)
function Car(make,model,year,isAvailable){
    this.make=make
    this.model=model
    this.year=year
    this.isAvailable=isAvailable

    this.toggleAvailability=function(){
        this.isAvailable=!this.isAvailable
        
    }
}
const car1=new Car("Toyota","Camrey",2023,true)
console.log({car1})
console.log(car1.isAvailable)
car1.toggleAvailability()


//Create a Rental class or function constructor that has the following properties:
//car (Car object): The car that has been rented.
//renterName (string): The name of the person who rented the car.
//rentalStartDate (Date object): The start date of the rental period.
//rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
//create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using
//the calculate Rental duration method
function Rental(car,renterName,rentalStartDate,rentalEndDate){
    this.car=car;
    this.renterName=renterName;
    this.rentalStartDate=rentalStartDate;
    this.rentalEndDate=rentalEndDate;

    
        this.calculateRentalDuration = function() {
            const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
            const startDate = new Date(this.rentalStartDate);
            const endDate = new Date(this.rentalEndDate);
            const rentalDuration = Math.round(Math.abs((endDate - startDate) / oneDay));
            return rentalDuration;
          };
    }
    const rental1 = new Rental(car1, "John Doe", "2023-04-29", "2023-05-05");
    const rentalDuration = rental1.calculateRentalDuration();
    console.log(`Is ${rentalDuration} days`);


    // You are building a simple quiz app that contains multiple-choice questions. Your task is
    // to create two JavaScript classes: Question and Quiz. The Question class will represent
    // individual questions, and the Quiz class will manage a collection of questions and the
    // user's progress.
    // 1. Create a Question class with the following properties:
    // ● text(string): The text of the question.
    // ● options(array): An array containing the multiple-choice options.
    // ● correctAnswer(string): The correct answer to the question.
    // The Question class should also have a method called checkAnswer that takes a
    // user's answer as a parameter and returns true if the answer is correct and false
    // otherwise.
    class Question {
        constructor(text, options, correctAnswer) {
          this.text = text;
          this.options = options;
          this.correctAnswer = correctAnswer;
        }
      
        checkAnswer(answer) {
          return answer === this.correctAnswer;
        }
      }




    class Question {
        constructor(text, options, correctAnswer) {
          this.text = text;
          this.options = options;
          this.correctAnswer = correctAnswer;
        }
      
        checkAnswer(answer) {
          return answer === this.correctAnswer;
        }
      }


