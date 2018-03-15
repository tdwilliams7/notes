const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const BCRYPT_COST = 11;

const userSchema = new Schema({
  username: { type: String, required: true, index: true },
  password: { type: String, required: true }
});

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, BCRYPT_COST).then(hashedPass => {
    this.password = hashedPass;
    next();
  });
});

userSchema.methods.checkPassword = function(plainText, cb) {
  bcrypt.compare(plainText, this.password, (err, isMatch) => {
    if (err) return err;
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
