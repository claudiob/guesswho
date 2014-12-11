var quizApp = angular.module('quizApp', []);

quizApp.factory('Quizzes', function() {
  return [
    {
        name: 'Ashley Downs',
        image: '5399050/8d6e4f0e-811c-11e4-8c8b-554c784a34c5.jpg',
        wrong: '5399052/8d70bb7c-811c-11e4-884e-ad383b8121d1.jpg',
        right: '5399048/8d4d0a74-811c-11e4-8664-d45acd1b2e1d.jpg'
    },
    {
        name: 'Doris Willette',
        image: '5399053/8d74561a-811c-11e4-8441-49ddcb4d2008.jpg',
        wrong: '5399054/8d77511c-811c-11e4-9916-cf5945c70c20.jpg',
        right: '5399051/8d707e78-811c-11e4-9fd2-0eae252bbe40.jpg'
    },
    {
        name: 'Mohamed Aziz',
        image: '5399056/8d84a164-811c-11e4-830c-fc9b3e2f61d3.jpg',
        wrong: '5399055/8d7b5fb4-811c-11e4-8c54-61189eeca96b.jpg',
        right: '5399049/8d62aa64-811c-11e4-9d11-d07382b4b12a.jpg'
    }
  ];
});

quizApp.directive('kycFocus', [function () {
  return function focusIf(scope, element, attr) {
    scope.$watch(attr.kycFocus, function (newVal) {
      if (newVal) {
        scope.$evalAsync(function() {
          if(!(navigator.userAgent.match(/iPhone/i)) && !(navigator.userAgent.match(/iPod/i))) {
            element[0].focus();
          }
        });
      }
    });
  }
}]);

function QuizCtrl($scope, $interval, Quizzes) {
  function shuffle(array){
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  };

  $scope.quizzes = shuffle(Quizzes).slice(0, 10);
  var quizIndex = 0;
  var tickCount = $scope.quizzes.length;
  var timer = $interval();

  $scope.ticks = function() {
    return new Array(tickCount);
  };

  $scope.$watch('guess', function(value) {
    if($scope.guess.length == $scope.quiz.answer.length) {
      setOutcome()
    }
  });

  function setOutcome() {
    $interval.cancel(timer);
    $scope.quiz.outcome = ($scope.guess == $scope.quiz.answer);
    if($scope.quiz.outcome)
      $scope.quiz.hint = baseUrl() + $scope.quiz.right;
    else
      $scope.quiz.hint = baseUrl() + $scope.quiz.wrong;
    mixpanel.track("Guess", {
      "guess": $scope.guess,
      "answer": $scope.quiz.answer,
      "outcome": $scope.quiz.outcome,
      "index": quizIndex
    });
  };

  function baseUrl() {
    return 'https://cloud.githubusercontent.com/assets/7408595/';
  };

  $scope.isGuessed = function(quiz) {
    return typeof(quiz.outcome) != 'undefined'
  };

  $scope.isRight = function(quiz) {
    return quiz.outcome == true
  };

  $scope.isWrong = function(quiz) {
    return quiz.outcome == false
  };

  $scope.quizzes.over = function() {
    return quizIndex >= $scope.quizzes.length;
  };

  $scope.quizzes.next = function() {
    $scope.quiz = $scope.quizzes[quizIndex++];
    $scope.quiz.hint = baseUrl() + $scope.quiz.image;
    $scope.quiz.hint_right = baseUrl() + $scope.quiz.right;
    $scope.quiz.hint_wrong = baseUrl() + $scope.quiz.wrong;
    $scope.quiz.answer = $scope.quiz.name.substr(0,3).toLowerCase();
    $scope.guess = '';

    $scope.tick = 0;
    timer = $interval(function () {$scope.tick++}, 15000/tickCount, tickCount)
    timer.then(setOutcome);
  };

  $scope.quizzes.next();
}