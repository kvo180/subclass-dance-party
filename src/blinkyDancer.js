var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
  this.blink();
};

MakeBlinkyDancer.prototype.blink = function() {
  this.$node.addClass('blinkyDancer'); 
};
