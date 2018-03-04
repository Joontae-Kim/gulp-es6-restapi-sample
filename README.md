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
- gulp
- gulp-babel
- gulp-concat
- gulp-file-cache
- gulp-imagemin
- gulp-livereload
- gulp-nodemon
- gulp-uglify
- gulp-util
- merge-stream
- babel-core
- babel-preset-es2015
- browser-sync
- del
- pump

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
    ├── gulpfile.babel.js
    └── package.json
```

## Reference
- **(official, en)** Gulp : Sample for gulpfile.js; (https://github.com/gulpjs/gulp)
- **(official, en)** nodemon : Examples Part Part (https://github.com/JacksonGariety/gulp-nodemon)
- **(official, en)** browser-sync : Usage and Examples Part (https://github.com/deepak1556/gulp-browserify)
- **(private, en)** nodemon + browser-sync part in gulpfile.js (https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e)
- **(private, kr)** gulp-concat (http://webclub.tistory.com/468)
- **(official, en, gulpjs.org/recipes)** Using multiple sources in one task
(https://gulpjs.org/recipes/using-multiple-sources-in-one-task)
- **(private, kr)** babel, webpack, nodemon, browser-sync   
  - https://velopert.com/1456
  - https://github.com/velopert/gulp-es6-webpack/tree/tut12-1
