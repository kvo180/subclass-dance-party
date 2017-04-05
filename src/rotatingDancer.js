var RotatingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

RotatingDancer.prototype = Object.create(MakeDancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function() {
  this.rotate();
};

RotatingDancer.prototype.rotate = function() {
  this.$node.addClass('rotatingDancer'); 
};
