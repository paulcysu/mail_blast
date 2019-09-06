const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// http://localhost:5000/auth/google/callback (if wildcard error)

passport.use(new GoogleStrategy({

}))

const PORT = process.env.PORT || 5000;
app.listen(PORT);