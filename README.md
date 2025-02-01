# Vehicle Builder App

Welcome to the **Vehicle Builder App**! This is a command-line application that allows users to create and manage various types of vehicles including Cars, Motorbikes, and Trucks. Each vehicle is equipped with essential attributes such as VIN, color, make, model, year, weight, top speed, and wheel details. Users can also modify vehicle attributes like wheels and interact with vehicles by starting, accelerating, stopping, and more.

## Walkthrough Video

To help you get started with the app, here is a walkthrough video that demonstrates how to use the Vehicle Builder App:



## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
4. [Interacting with the App](#interacting-with-the-app)
5. [Example Usage](#example-usage)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

## Features

- **Vehicle Creation**: Create Cars, Motorbikes, and Trucks by entering relevant details.
- **Wheel Management**: Customize or update the wheel details of a vehicle (diameter and tire brand).
- **Vehicle Control**: Start, accelerate, decelerate, stop, reverse, and turn vehicles.
- **Tow Vehicles**: Trucks can tow Cars and Motorbikes based on their weight and towing capacity.
- **User Interaction**: Command-line interface that allows users to continue actions or exit at any time.

## Technologies Used

- **TypeScript**: A statically typed superset of JavaScript, used for building the app.
- **Node.js**: JavaScript runtime environment used to execute the app in the terminal.
- **OOP (Object-Oriented Programming)**: Classes and interfaces are used to model different vehicle types and functionality.
- **Command-Line Interface (CLI)**: Allows users to interact with the app directly via the terminal.

## Getting Started

### Prerequisites

To run the app locally, you need to have the following installed on your system:

- **Node.js** (preferably the latest LTS version)
- **npm** (Node Package Manager)

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ShannonJTaylor/08-VEHICLEBUILDER.git

2. Navigate to the prject directory:
   ```bash
   cd 08-VEHICLEBUILDER

3. Install required dependencies:
   ```bash
   npm install

## Running the App

Once the dependencies are installed, you can run the app using the following command:
npm run start

This will launch the app in the terminal and prompt you to start createing vehicles.

## Interacting with the App

You can interact with the app using the following options:

Create a Vehicle: Choose the type of vehicle (Car, Motorbike, or Truck) and input the required attributes like VIN, color, make, model, etc.  
Modify Vehicle: After creating a vehicle, you can update the wheel details or other vehicle attributes.  
Control the Vehicle: Start, accelerate, decelerate, stop, reverse, and turn the vehicle.  
Tow Vehicles: Trucks can tow other vehicles (Cars or Motorbikes) if their weight is within the truck's towing capacity.  
Exit: Scroll to exit at any point to quit the application.

## Example Usage

Choose an option:  
1. Create a Car  
2. Create a Motorbike  
3. Create a Truck  
4. Exit


Enter the VIN: 1HGCM82633A123456  
Enter the color: Red  
Enter the make: Honda  
Enter the model: Civic  
Enter the year: 2023  
Enter the weight: 3000  
Enter the top speed: 120  
Enter the number of wheels default 4): 4  
Vehicle created! Would you like to:
1. Modify vehicle
2. Control vehicle
3. Exit


Choose an action:
1. Start vehicle
2. Accelerate
3. Decelerate
4. Stop
5. Turn left
6. Turn right
7. Exit


Vehicle started.

## Contributing

If you'd like to contribute to this project please ensure your code is well-tested and follows the project's coding standards.
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request
.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
The app is built using TypeScript, which helps in creating a more maintainable and scalable project.
Inspiration for the project came from a desire to build a command-line interface that allows users to simulate vehicle interactions in a fun and interactive way.

**Made with ❤️ by [[ShannonJTaylor](https://github.com/ShannonJTaylor)]**






