# Earthquake Detection and Alert System

## Overview

The **Earthquake Detection and Alert System** detects P-waves (Primary waves) before the arrival of S-waves (Secondary waves) from an earthquake. This early detection allows for timely alerts to people and can also be integrated with building dampers to reduce earthquake impact.

## Project Structure

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: This file.
- **backend/**: Contains server-side code.
- **nano.txt**: Details for working with Nano sensors.
- **nodemcu.txt**: Details for working with NodeMCU.
- **package-lock.json**: Lock file for Node.js dependencies.
- **package.json**: Node.js project dependencies and scripts.
- **public/**: Static files like HTML, CSS.
- **src/**: Source code for the application.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/).
- **Hardware**: 
  - **Seismic Sensors**: Configure as described in `nano.txt`.
  - **NodeMCU**: Follow instructions in `nodemcu.txt` for integration.

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/PragatiBasnet29/earthquake_and-_alter_system.git
   cd earthquake_and-_alter_system
