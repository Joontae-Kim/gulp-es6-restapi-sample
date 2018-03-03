# gulp-es6-restapi-sample
- REST framework sample for Node.js express >= v8.9.4
- Use gulp to automatize ES6 transpilation in server-side. (Express.js, gulp, babel, browser-sync, nodemon)
## Get Started

```
git clone https://github.com/Joontae-Kim/gulp-es6-restapi-sample.git
cd gulp-es6-restapi-sample && cd backend
npm install
npm run dev
```

## Stack
### Back-end
 - Node.js : JavaScript runtime built on Chrome's V8 JavaScript engine
 - Express : Node.js Web framework
 - NPM : Node Package management
 - Gulp : Javascript build automation tool

#### Third Party Libraries for Gulp task
  - babel-core
  - babel-preset-es2015
  - del
  - gulp-imagemin
  - gulp-uglify
  - gulp-util

## Directory Structrue
```
.(root)
├── .gitignore
├── README.md
└── backend/
    ├── bin
    │     └── www.js
    ├── dist
    │     ├── lib
    │     │     └── common.js
    │     └── routes
    │           └── index.js
    ├── src
    │     ├── lib
    │     │    └── something.js
    │     └── routes
    │          └── index.js
    ├── node_modules
    ├── .babelrc
    ├── app.js
    ├── gulpfile.bable.js
    └── package.json
```
