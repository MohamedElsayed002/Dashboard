# Dashboard
MERN Stack
---
project link (link)['https://www.linkedin.com/feed/update/urn:li:activity:7078024475929157633/']
in order to run the project <br/>

server side <br/>
npm install && npm run dev <br/>

client side <br/>
cd Application && npm run dev 
 ---
 
 
 server side explantion 
 first we need to install some dependencies
 ```js
     "bcryptjs": "^2.4.3",
    "cloudinary": "^1.37.0",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.1.0",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "http-status-codes": "^2.2.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nanoid": "^4.0.2",
    "nodemailer": "^6.9.3",
    "nodemon": "^2.0.22",
    "validator": "^13.9.0"
 ```
 ### to run the server
``` js
 import express from 'express'
 import dotenv from 'dotenv'
 import 'express-async-errors'
 import cors from 'cors'
 import morgan from 'morgan'
 import cloudinary from 'cloudinary'
 dotenv.config()
 
 const app = express()
 
 app.get('/' , (req,res) => {
  res.send('Hello')
 })
 
 const PORT = process.env.PORT || 3050
```

and you need to make your file file structure to orginize your file <br/>
1- controllers 2-models 3-database 4-middleware 5-routes 6-utils 7-uploads 8-errors <br/>

In folder errors we need to handle Errors to avoid stop of the server create file custom-api.js and if you want to make other file to handle different errors you can do as you wish <br/>

```js
class CustomAPIError extends Error {
    constructor(message) {
    super(message)
    }
}
export default CustomAPIError
```

In folder Middleware we need to make to important files to error-handler & not-fount route 
```error.handler.js

import { StatusCodes } from 'http-status-codes';


const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === 'CastError') {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware

```

```not-found.js
const notFoundMiddleware = (req,res) => {
    res.status(404).send('route does not exist')
}

export default notFoundMiddleware
```

and we need to use error middleware in the main file in app.js
```js
 app.use(notFoundMiddleware)
 app.use(errorHandlerMiddleware)
```
