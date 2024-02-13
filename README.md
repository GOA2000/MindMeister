## Overview

MindMeister is a repository containing automated tests developed with Cypress for the MindMeister project.

## Prerequisites

Before running the tests, ensure you have the following prerequisites:

- Node.js (version 18.19.0)
- npm (Node Package Manager)
- Linux bash terminal, I used the Version 3.44.0 for GNOME 42, in Ubuntu 22.04 LTS.

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository:

    ```git clone https://github.com/GOA2000/MindMeister```

2. Navigate to the project directory:

    ```cd MindMeister```

3. Install dependencies:

     ```npm install```

## Running Tests

To run the Cypress tests, follow these steps:

1. Ensure the project dependencies are installed as described in the Installation section.

2. Open package.json and go to `"cypress:open"` script to see which env variables the tests use:

```json
"scripts": {
  "cypress:open": "cypress open  --env current_env=prod,username=$TEST_USERNAME,password=$TEST_PASSWORD"
}
```
To set the environment variables current_env, username, and password,open your bash terminal in which you will be executing the tests and export ENV variables before running the tests:**

    export TEST_USERNAME=your_username
    export TEST_PASSWORD=your_password
    export TEST_ENV=your_env     (default env is 'prod')

Replace your_username and your_password with your actual credentials. If you need credentials please use:

    export TEST_PASSWORD=mindMeister123
    export TEST_USERNAME=kalauzovic.gorjan+test@gmail.com

3. Open Cypress test runner:

    npm run cypress:run

## Test Results

After running the tests, you can view the test results in Junit 'results' folder. 
