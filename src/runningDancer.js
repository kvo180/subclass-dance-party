var RunningDancer = function(top, left, timeBetweenSteps) { 
    MakeDancer.call(this, top , left);
  this.$node = $('<span class="runningDancer"></span>');
}

RunningDancer.prototype = Object.create(MakeDancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;
RunningDancer.prototype.oldStep = MakeDancer.prototype.step;

RunningDancer.prototype.step = function() {
  this.oldStep();
  this.animateSpan();
};

RunningDancer.prototype.newPosition = function(){
  var height = $(window).height();
  var width = $(window).width();

  var newHeight = Math.floor(Math.random() * height);
  var newWidth = Math.floor(Math.random() * width);

  return [newHeight, newWidth];
}

RunningDancer.prototype.animateSpan = function(){
  var newPosition = this.newPosition();
  var context = this;
  $('.runningDancer').animate({top: newPosition[0], left: newPosition[1]}, function(){
    context.animateSpan.bind(context);
  });
};