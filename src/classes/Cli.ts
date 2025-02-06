// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";



// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  
  vehicles: (Truck | Motorbike | Car)[];  
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Truck | Motorbike | Car)[]) {
    this.vehicles = vehicles;
  
  }

  validateNumericInput(input: string): boolean | string {
    return isNaN(Number(input)) || Number(input) <= 0
    ? "Please enter a valid number greater than 0"
    : true;
  }

  //startCli method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle', 'Exit'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.action === 'Create a new vehicle') {
          this.createVehicle();
        } else if (answers.action === 'Select an existing vehicle') {
          this.chooseVehicle();
        } else if (answers.action === 'Exit') {
          console.log('Goodbye!');
          process.exit();
        }      
    });
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

// method to choose a vehicle from existing vehicles  
  chooseVehicle(): void {
    if (this.vehicles.length === 0) {
      console.log('No vehicles available. Please create a vehicle first.');
      this.startCli(); //Restart CLI if no vehicles exist
      return;
    }
      inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        }
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }
   
 

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        console.log('Vehicle Type Selected: ', answers.vehicleType); //Debugging log
        if (answers.vehicleType === 'Car') {
          console.log('You selected Car');
          // create a car
          this.createCar();
          // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        } else if (answers.vehicleType === 'Truck') {
          console.log('You selected Truck');
          // create a truck
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          console.log('You selected Motorbike');
          this.createMotorbike();
        } else {
          console.log('Invalid selection. Please try again.');
          this.createVehicle();
        }
      });
  }

  // method to create a car
  createCar(): void {
    console.log('Creating a car...');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          validate: this.validateNumericInput,
        },
      ])
      .then((answers) => {
        console.log('Car details received: ', answers); //Debugging log
        //Create a new Car instance
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions(); 
        
      });
  }

   // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'wheelDiameter',
          message: 'Enter Wheel Diameter',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'tireBrand',
          message: 'Enter Tire Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        const wheels = Array(4).fill(
         new Wheel(parseInt(answers.wheelDiameter), answers.tireBrand)
        );
        
        const truck = new Truck (          
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,
          parseInt(answers.towingCapacity),
        );
        // TODO: push the truck to the vehicles array
        this.vehicles.push(truck);
        // TODO: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // TODO: perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
          validate: this.validateNumericInput,
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        const wheels = [
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
        ];


        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels //Pass the wheels array here
        );
        // TODO: push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;  
        // TODO: perform actions on the motorbike
        this.performActions();
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
          // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        } else if (answers.action === 'Tow') {
          // Find the selected vehicle and make sure it's a truck
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Truck) {
              const selectedTruck = this.vehicles[i];
              // Call the findVehicleToTow method
              this.findVehicleToTow(selectedTruck as Truck);
              console.log('Towing action completed.');
             //Return to avoid instantly calling performActions again
            }
          }
          console.log('The selected vehicle is not a truck. Cannot perform tow action.');
        
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        } else if (answers.action === 'Wheelie') {
          // Find the selected vehicle and make sure it's a motorbike
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Motorbike) {
              // If it is, perform a wheelie
              (this.vehicles[i] as Motorbike).wheelie();
              console.log('Wheelie performed successfully!');
              
            } 
          }
          console.log('The selected vehicle is not a motorbike. Cannot perform a wheelie.');
         } else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
          // exit the cli if the user selects exit
        } else if (answers.action === 'Exit') {          
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object this is going to need some work check out the wheelie method for a hint
  async findVehicleToTow(truck: Truck): Promise<void> {
    if (this.vehicles.length === 1) {
    console.log("No other vehicles available to tow.");
    this.performActions();
    return;
    }
    
    const { vehicleToTow } = await inquirer.prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles
            .filter((vehicle) => vehicle !== truck)
            .map((vehicle) => ({
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            })),
        },
      ]);


      const vehicleToTowObj = this.vehicles.find(
          (vehicle) => vehicle.vin === vehicleToTow 
        );

        if (!vehicleToTowObj) {
          console.log('Invalid selection. Try again.');
        } else {
          console.log(
            'Towing vehicle: ${vehicleToTowObj.make} ${vehicleToTowObj.model}.');
          truck.tow(vehicleToTowObj); //call tow method on teh truck
        }
        this.performActions();
  }  
}

// export the Cli class
export default Cli;
function performActions() {
  throw new Error("Function not implemented.");
}

