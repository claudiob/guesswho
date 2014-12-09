var quizApp = angular.module('quizApp', []);

quizApp.factory('Quizzes', function() {
  return [
    {
        name: 'Aaron Harpole',
        path: '2014-10-20/2840638594_192.jpg'
    },
    {
        name: 'Adam Feuerberg',
        path: '2014-11-05/2945165349_c82f9e5ae36deac761cc_192.jpg'
    },
    {
        name: 'Adam Perly',
        path: '2014-10-14/2806496756_192.jpg'
    },
    {
        name: 'Alex Geller',
        path: '2014-09-25/2715180973_72.jpg'
    },
    {
        name: 'Alex Vodovoz',
        path: '2014-05-19/2346253520_192.jpg'
    },
    {
        name: 'Alice Lee',
        path: '2014-11-06/2955162058_daaa5e8e902bbe540f44_192.jpg'
    },
    {
        name: 'Alyssa Manning',
        path: '2014-11-05/2948442100_d9a37c65e2e56dd94f0e_192.jpg'
    },
    {
        name: 'Ashtanti Ishakarah',
        path: '2014-11-05/2946775790_2fc077a0b50d1d677432_72.jpg'
    },
    {
        name: 'Barbara Evett',
        path: '2014-10-07/2768169639_192.jpg'
    },
    {
        name: 'Ben Stein',
        path: '2014-10-02/2750066699_192.jpg'
    },
    {
        name: 'Ben Singer',
        path: '2014-11-05/2947871814_1a4267e52ae5f2e7bd9d_192.jpg'
    },
    {
        name: 'Brando Madden',
        path: '2014-07-08/2445753934_192.jpg'
    },
    {
        name: 'Borislav Ivanov',
        path: '2014-10-08/2773916977_192.jpg'
    },
    {
        name: 'Carter Brown',
        path: '2014-10-03/2755876249_192.jpg'
    },
    {
        name: 'Chas Lacaillade',
        path: '2014-10-16/2820755934_192.jpg'
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

  $scope.quizzes = shuffle(Quizzes);
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
    mixpanel.track("Guess", {
      "guess": $scope.guess,
      "answer": $scope.quiz.answer,
      "outcome": $scope.quiz.outcome,
      "index": quizIndex
    });
  };

  function baseUrl() {
    return 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/';
  };

  $scope.isGuessed = function(quiz) {
    return typeof(quiz.outcome) != 'undefined'
  };

  $scope.scrollKeyboard = function() {
    window.scrollTo(-100, -100);
  };

  $scope.isRight = function(quiz) {
    return quiz.outcome == true
  };

  $scope.isWrong = function(quiz) {
    return quiz.outcome == false
  };

  $scope.quizzes_next = function(quiz) {
    window.scrollTo(0, 0);
  };

  $scope.quizzes.over = function() {
    return quizIndex >= $scope.quizzes.length;
  };

  $scope.quizzes.next = function() {
    $scope.quiz = $scope.quizzes[quizIndex++];
    $scope.quiz.hint = baseUrl() + $scope.quiz.path;
    $scope.quiz.answer = $scope.quiz.name.substr(0,3).toLowerCase();
    $scope.guess = '';

    $scope.tick = 0;
    timer = $interval(function () {$scope.tick++}, 15000/tickCount, tickCount)
    timer.then(setOutcome);
  };

  $scope.quizzes.next();
}