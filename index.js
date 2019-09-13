const express = require('express');
require('./models/User');

require('./services/passport');
require('./services/mongoose');

const app = express();
require('./routes/authRoutes')(app);

app.listen(process.env.PORT || 5000);