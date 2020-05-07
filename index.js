const express = require('express');
const app = express();
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;
app.listen(port,() => {console.log('listening on port 3000');
});
