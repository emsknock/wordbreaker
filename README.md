# Wordbreaker

My solution to Dream Broker's code challenge programming assignment [located here](https://challenge.dreambroker.jobs/245768c7-b82f-4a77-abbc-d1214acf7163) or alternatively in [./ASSIGNMENT.md](./ASSIGNMENT.md).

Hosted at https://ems-wordbreaker.herokuapp.com — since it's a free dyno, it might take a while to start up.

## Tests and CICD

I'm using [Jest](https://jestjs.io) as the testing framework for this project. Since the project is so small, I opted to store all unit tests along with the files they cover instead of having a separate `tests` directory. All of the features (e.g. `textLength`) have their own unit tests, and the server itself has a simple integration test that checks that all the analysers are included in the API reponse and that they have correct content for the "hello 2 times  " case.

The CI pipeline is handled by GitHub workflows: pull requests get tested automatically and linting errors will be reported, pushes to the main branch get automatically linted and tested. If all the tests pass, Heroku will automatically deploy a new build. The workflow YAML files can be found at [.github/workflows](.github/workflows).

## Installation, running, and testing

Install dependencies, build, and run the project:
```bash
npm install && npm run build && npm start
```

Specify the port (default 3000):
```bash
PORT=80 npm start
```

Run tests:
```bash
npm run test
```

Create coverage report in [./coverage](./coverage):
```bash
npm run test -- --coverage
```