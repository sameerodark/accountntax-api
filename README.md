# AccountNTax
## Online GST and Accounting App


AccountNTax is an AR enabled mobile app for fitness and dancing training.  

## Tech

AccountNTax uses a number of open source projects to work properly:

- [Twitter Bootstrap] - great UI boilerplate for admin panel
- [node.js] - TypeScript enabled backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [MongoDB](https://www.mongodb.com/) - No SQL Database
## Installation

AccountNTax requires [Node.js](https://nodejs.org/) v10+ to run.


Create an .env file with below two environment variable: 
```sh
NODE_ENV=development
PORT=5000
```
Install the dependencies and devDependencies and start the server.


```sh
cd accountntax-api
npm i
node run dev
```

For production environments...

```sh
cd accountntax-api
npm i
npm run build
node dist/server.js
```