## Frontend(React)

### Prerequisites

- Node.js (version 14 or later) 
- npm (Node Package Manager)
 

### Installation

1. Clone the frontend repository:

   ```bash
   https://github.com/code2dipi/nasa-asteroid-frontend-app.git

1. Open the frontend project in Visual Studio Code.
2. Select root directory and Install the required dependencies by running `npm install` in the terminal.
3. Start the frontend development server by running `npm start`. 
4. Make in sure backend server should be running before sending requests from frontend server(http://localhost:3000)

### Configuration
- Backend: Configure NASA API key in application.properties file.

- Frontend: Configure backend API URL in src/config.js file.
### Usage
- Access the React app at http://localhost:3000.
- Explore asteroids data using the provided date picker(Date limit is 7 days from the start date)
- Click on "Details" to view more information about a specific asteroid.