let express = require('express');
let app = express();

app.use(express.static('./website'));

app.listen(8080);