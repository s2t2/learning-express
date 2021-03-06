# Robots App

## Contributing

### Prerequisites

Install node and npm.

Install postgresql.

Install source code.

```` sh
git clone git@github.com:s2t2/express-robots.git
cd express-robots/
npm install
````

Create database user.

```` sh
psql
CREATE USER robot WITH ENCRYPTED PASSWORD 'r0b0t!';
ALTER USER robot CREATEDB;
ALTER USER robot WITH SUPERUSER;
\q
````

Create database.

```` sh
psql -U robot --password -d postgres -f $(pwd)/db/create.sql
````

Migrate database.

```` sh
knex migrate:latest --knexfile db/config.js
````

Seed the database.

```` sh
knex seed:run --knexfile db/config.js
````

### Usage

Start the server and visit localhost:3000 in a browser.

```` sh
DEBUG=robots_app:* npm start
````

### Deploying

Set environment variable(s). Setting `NODE_ENV` is technically unnecessary because heroku does it automatically during deploy.

```` sh
heroku config:set NODE_ENV=production SESSION_SECRET=s0m3l0ngstr1ng123456
````

Ensure postgresql addon is installed.

```` sh
heroku addons:create heroku-postgresql:hobby-dev
````

Deploy.

```` sh
git push heroku master
````

Create, migrate, and seed production database (NOTE: this is already happening as post-installation scripts in package.json).
```` sh
heroku pg:reset DATABASE
heroku run NODE_ENV=production knex migrate:latest --knexfile db/config.js
heroku run NODE_ENV=production knex seed:run --knexfile db/config.js
````
