$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addRunningDancerButton').on('click', function(event) {
    var runningDancerMakerFunctionName = $(this).data('running-dancer-maker-function-name');
    var runningDancerMakerFunction = window[runningDancerMakerFunctionName];

    var runningDancer = new runningDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(runningDancer.$node);
    window.dancers.push(runningDancer);
  });


  $('.addRotatingDancerButton').on('click', function(event) {
    var rotatingDancerMakerFunctionName = $(this).data('rotating-dancer-maker-function-name');
    var rotatingDancerMakerFunction = window[rotatingDancerMakerFunctionName];

    var rotatingDancer = new rotatingDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      );
    $('body').append(rotatingDancer.$node);
    window.dancers.push(rotatingDancer);
  });

  $('.addBoringDancerButton').on('click', function(event) {
    var boringDancerMakerFunctionName = $(this).data('boring-dancer-maker-function-name');
    var boringDancerMakerFunction = window[boringDancerMakerFunctionName];

    var boringDancer = new boringDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(boringDancer.$node);
    window.dancers.push(boringDancer);
  });



  $('.lineButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var node = window.dancers[i];
      if (node.$node.is(':animated')) {
        node.stop = true;
        node.$node.stop(true, true);
      }
      node.$node.animate({top: $('body').height() / 2}, function() {});
      node.$node.animate({left: node.$node.left + 10}, function() {});
    }
  });


});

