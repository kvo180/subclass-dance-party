var RotatingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left);
  this.$node = $('<span class="rotatingDancer"></span>');
}

RotatingDancer.prototype = Object.create(MakeDancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.oldStep = MakeDancer.prototype.step;

RotatingDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
}

RotatingDancer.prototype.rotate = function() {

  var rotateSettings = {
    position: absolute,
      // top: 50%,
      // left: 50%,
      width: 120px,
      height: 120px,
      margin:-60px 0 0 -60px,
      -webkit-animation:spin 4s linear infinite,
      -moz-animation:spin 4s linear infinite,
      animation:spin 4s linear infinite
  }

  this.$node.css(rotateSettings); 
}