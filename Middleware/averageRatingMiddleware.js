const jwt = require("jsonwebtoken");

procedureSchema.pre('save', function(next) {
    const ratings = this.ratings;
    const totalRatings = ratings.length;
    const averageRating = totalRatings > 0 ? ratings.reduce((acc, rating) => acc + rating, 0) / totalRatings : 0;
    this.averageRating = averageRating;
    next();
  });