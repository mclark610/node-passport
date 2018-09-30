Created a copy/paste intro to using passport with a local strategy using jareds local file.
standard procedure:
to run -
nodemon   or npm start

in browser or curl: 
use localhost:3000/user/login
  user : jack
  password: secret

/user/profile - shows username
other options are in index.js and user.js


[thank you to jared and brad - both are inspirations]

references:

jared hansons work:
    passport
        http://www.passportjs.org
    connect-ensure-login:
        https://github.com/jaredhanson/connect-ensure-login
    connect-flash
        https://github.com/jaredhanson/connect-flash/blob/master/examples/express3/app.js
        https://github.com/jaredhanson/connect-flash

brad traversey video :
    passport/connect/flash
    https://www.youtube.com/watch?v=Z1ktxiqyiLA


vesse:
    passport/connect/flash
    https://gist.github.com/vesse/9e23ff1810089bed4426


I did not use these guys examples, just found them after I finished.
https://github.com/HackedByChinese/passport-examples/tree/master/example-simple
