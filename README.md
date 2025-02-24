# Car Rental

## Overview
This project consists of a backend API built with .NET Core MVC (API) and a frontend built with Angular. The following instructions outline how to clone, build, and run both the API and Angular applications.

## Prerequisites
- [.NET Core SDK 7](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (Install globally using: `npm install -g @angular/cli`)
- [Git](https://git-scm.com/downloads)

## Setup Instructions

### 1. Clone the API Repository
Clone the API repository from GitHub:
```bash
git clone https://github.com/raushanc107/KhatabookAPI.git
```

#### Navigate to the cloned directory:
```bash
cd KhatabookAPI
```

### 2. Build and Run the .NET Core MVC API Application

- 1.Restore the project dependencies:
```bash
dotnet restore
```

- 2.Build the project:
```bash
dotnet build
```

- 3.Ensure you have trusted your local development certificate by running:
```bash
dotnet dev-certs https --trust
```
- 4.Run the application
```bash
dotnet run --urls "https://localhost:7271"
```

The API should now be running on its default port (usually https://localhost:7271 or as configured in the project).

### 3. Set Up the Angular Application

-  1.Navigate to the Angular project directory (if it's in a separate folder, switch to that folder).
-  2.Install the Angular project dependencies:
     
  ``` bash
  npm install --force
  ```

### 4. Run the Angular Application
Start the Angular development server by running:
```bash
ng serve
```

Then open your browser and navigate to http://localhost:4200 to view the application.



