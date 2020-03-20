# Movie collection management API

## Installation

### Project initialization

Clone the repo and install dependencies:

```
git clone https://github.com/dz9oo/dashboard-movie-back.git
cd dashboard-movie-back
npm i
```

### Database configuration

Edit the configuration file for your database _config.json_ in the folder _/config_

```
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "dashboard_development",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "dashboard_test",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "dashboard_production",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

Database creation and migrations:

```
npm run dbCreate
npm run migrate
```

### import test database

You can import the test database _dashboard_development.sql_ to test this API.

### Run server

```
npm run devstart
```
