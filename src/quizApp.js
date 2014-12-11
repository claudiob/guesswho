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
        name: 'Aziz Mohamed',
        image: '5399056/8d84a164-811c-11e4-830c-fc9b3e2f61d3.jpg',
        wrong: '5399055/8d7b5fb4-811c-11e4-8c54-61189eeca96b.jpg',
        right: '5399049/8d62aa64-811c-11e4-9d11-d07382b4b12a.jpg'
    },
    {
      name: 'Nancy Seiler',
      wrong: '5400635/1079e978-812a-11e4-992d-0f0183ef423c.jpg',
      image: '5400639/109aaf50-812a-11e4-80ed-2cfafd4cb67b.jpg',
      right: '5400641/109f12fc-812a-11e4-928d-7f0b24094cc4.jpg',
    },
    {
      name: 'Michael Ishii',
      wrong: '5400638/1099b866-812a-11e4-88dd-fb946feaa389.jpg',
      image: '5400637/10980f7a-812a-11e4-918d-096dce2a301c.jpg',
      right: '5400640/109d17f4-812a-11e4-860f-d0ce5f0b9a6e.jpg',
    },
    {
      name: 'Maria Gonima',
      wrong: '5400636/1091bbc0-812a-11e4-98a3-060889b14256.jpg',
      image: '5400642/10a47904-812a-11e4-9d89-171358983a5a.jpg',
      right: '5400643/10b11d6c-812a-11e4-8cd3-65451a021bfc.jpg',
    },
    {
      name: 'Lupita Seranno',
      wrong: '5400645/10b53b40-812a-11e4-9ec4-f719943672a7.jpg',
      image: '5400644/10b50dfa-812a-11e4-9e84-86b1474ff937.jpg',
      right: '5400646/10b76014-812a-11e4-85bc-aa4b51e12326.jpg',
    },
    {
      name: 'Kendyl Klein',
      wrong: '5400647/10b78a12-812a-11e4-8e90-70bd037330d8.jpg',
      image: '5400648/10bb2c08-812a-11e4-89c1-4c3eae8f3fdc.jpg',
      right: '5400649/10c7ab68-812a-11e4-90ce-635b09321984.jpg',
    },
    {
      name: 'Ken Chung',
      wrong: '5400650/10ccd12e-812a-11e4-906f-3bc682053ab1.jpg',
      image: '5400654/10d215a8-812a-11e4-881f-2218351aa691.jpg',
      right: '5400651/10ce4a90-812a-11e4-9200-ac31ba84146b.jpg',
    },
    {
      name: 'Kelly Furey',
      wrong: '5400652/10ceb458-812a-11e4-8de9-d1e12278d970.jpg',
      image: '5400655/10d3038c-812a-11e4-8aca-f713cc1781f0.jpg',
      right: '5400656/10dedf36-812a-11e4-9881-9cae3523d905.jpg',
    },
    {
      name: 'Jordan Bennedict',
      wrong: '5400657/10e2a814-812a-11e4-9156-11948fdbef1b.jpg',
      image: '5400660/10f04a3c-812a-11e4-8807-213d219485a9.jpg',
      right: '5400658/10e321f4-812a-11e4-9f1c-840e87a3595e.jpg',
    },
    {
      name: 'Gabe Galaza',
      wrong: '5400661/10f1783a-812a-11e4-9200-13fbb88119d5.jpg',
      image: '5400662/10fcf160-812a-11e4-8054-7b356410591a.jpg',
      right: '5400659/10ef0a8c-812a-11e4-821b-fd3fa99bfea7.jpg',
    },
    {
      name: 'Hana Woldin',
      wrong: '5400664/110211b8-812a-11e4-8d87-ed6a628894e1.jpg',
      image: '5400663/1101719a-812a-11e4-8e3e-5c6ec72e0a8d.jpg',
      right: '5400665/11027022-812a-11e4-8229-ad250db3e1da.jpg',
    },
    {
      name: 'Heather Brewster',
      wrong: '5400666/1105c268-812a-11e4-8c45-106e6e22b5ed.jpg',
      image: '5400668/112ba564-812a-11e4-9b4f-9ec71ff91656.jpg',
      right: '5400667/1108a01e-812a-11e4-9220-13307e59c19b.jpg',
    },
    {
      name: 'Francis Calma',
      wrong: '5400669/112d3b90-812a-11e4-893a-47c8f8b008f7.jpg',
      image: '5400670/11305dd4-812a-11e4-942a-3ca052d0b181.jpg',
      right: '5400671/11309222-812a-11e4-9330-f90204c90d48.jpg',
    },
    {
      name: 'Edwinna Wong',
      wrong: '5400672/1136278c-812a-11e4-870b-e6d358f5ccb0.jpg',
      image: '5400673/113bcbd8-812a-11e4-891a-046aae98723f.jpg',
      right: '5400675/115d9448-812a-11e4-92a5-778f7871d33e.jpg',
    },
    {
      name: 'Eddie Park',
      wrong: '5400677/1161ba00-812a-11e4-8dd5-3db052d246c4.jpg',
      image: '5400676/1161cf18-812a-11e4-81ab-23cda59cac75.jpg',
      right: '5400674/115cb7bc-812a-11e4-9874-fc45086f6a78.jpg',
    },
    {
      name: 'Dion Ho',
      wrong: '5402007/8c86049c-8135-11e4-977b-8a0435d2a901.jpg',
      image: '5402004/8c657628-8135-11e4-8d6e-343f103e428f.jpg',
      right: '5402010/8c8c9596-8135-11e4-8a52-6c27d5403e5c.jpg',
    },
    {
      name: 'Cyrus Behzadi',
      wrong: '5402008/8c8937a2-8135-11e4-8da6-1bdee751ed01.jpg',
      image: '5402009/8c8b5744-8135-11e4-9737-fb76b9c1ff8b.jpg',
      right: '5402006/8c84db80-8135-11e4-8ef1-c228075f933a.jpg',
    },
    {
      name: 'Chris Blackwell',
      wrong: '5402005/8c7c8f66-8135-11e4-80ea-e147dec27a9b.jpg',
      image: '5402011/8c9521f2-8135-11e4-8e3b-fd29e29f72d7.jpg',
      right: '5402012/8c9da05c-8135-11e4-845d-5d939fe9b5ad.jpg',
    },
    {
      name: 'Bianca Verdi',
      wrong: '5402014/8ca42526-8135-11e4-871a-c0171dded162.jpg',
      image: '5402013/8ca287ca-8135-11e4-8da4-80e434f66c4b.jpg',
      right: '5402015/8ca45b5e-8135-11e4-8621-21c3cd8decfd.jpg',
    },
    {
      name: 'Jon Wise',
      wrong: '5402017/8cacf26e-8135-11e4-8cf8-b6d2bc2473af.jpg',
      image: '5402018/8cb5b2be-8135-11e4-9b6f-90beb559c46a.jpg',
      right: '5402016/8ca4aec4-8135-11e4-82b8-78a01bb08bd5.jpg',
    },
    {
      name: 'Jon Shen',
      wrong: '5402019/8cbc070e-8135-11e4-9d3e-867305531a19.jpg',
      image: '5402020/8cbd5118-8135-11e4-913f-2d67ea2fae70.jpg',
      right: '5402021/8cbdbc52-8135-11e4-9c06-27f94eeb35e7.jpg',
    },
    {
      name: 'Joey De La Rosa',
      wrong: '5402023/8cc41b10-8135-11e4-99f8-10397076b8bb.jpg',
      image: '5402022/8cc0688a-8135-11e4-8b91-276531e5c488.jpg',
      right: '5402024/8ccbecc8-8135-11e4-8f2c-28169c92de71.jpg',
    },
    {
      name: 'Jessica Yuhara',
      wrong: '5402025/8cd508f8-8135-11e4-92d0-56ce084de193.jpg',
      image: '5402027/8cd5bd20-8135-11e4-85b5-f160cb4a7380.jpg',
      right: '5402026/8cd5abbe-8135-11e4-8974-701d7d72e284.jpg',
    },
    {
      name: 'Jason May',
      wrong: '5402028/8cd7ff36-8135-11e4-84d0-2baedc9cdec2.jpg',
      image: '5402029/8cdb899e-8135-11e4-97db-83fb1f01a164.jpg',
      right: '5402030/8ce5b6d0-8135-11e4-98b1-083e379ae63b.jpg',
    },
    {
      name: 'Jason Kwong',
      wrong: '5402033/8cf814ce-8135-11e4-82a7-7bf828e96246.jpg',
      image: '5402032/8cf6030a-8135-11e4-9148-d51e3483303d.jpg',
      right: '5402031/8cf5d8ee-8135-11e4-8f93-0a90e035133a.jpg',
    },
    {
      name: 'Will Gurman',
      wrong: '5402034/8cf8face-8135-11e4-97b1-6f1505b245fb.jpg',
      image: '5402035/8cff217e-8135-11e4-89d2-e2b53efd05c4.jpg',
      right: '5402036/8d070d8a-8135-11e4-8d35-9fd44dd2f80e.jpg',
    },
    {
      name: 'Victoria Wilburn',
      wrong: '5402039/8d0eef28-8135-11e4-9971-c2cce8f444f6.jpg',
      image: '5402041/8d0fb08e-8135-11e4-87c9-f6d057034861.jpg',
      right: '5402040/8d0f68c2-8135-11e4-8953-53cc6411e05e.jpg',
    },
    {
      name: 'Sheauen Park',
      wrong: '5402042/8d11a11e-8135-11e4-84d8-bed74b32d957.jpg',
      image: '5402043/8d15b506-8135-11e4-8adc-c0fcc63c0723.jpg',
      right: '5402044/8d326e76-8135-11e4-8660-b1c740c079e0.jpg',
    },
    {
      name: 'Ross Colette',
      wrong: '5402046/8d3c9aae-8135-11e4-85de-a93d4d75163e.jpg',
      image: '5402048/8d3f2bf2-8135-11e4-9c5a-3d5f263b79a2.jpg',
      right: '5402049/8d3fe420-8135-11e4-92c7-e704cdc19032.jpg',
    },
    {
      name: 'Nate Holbrook',
      wrong: '5402047/8d3d4968-8135-11e4-826c-b32676b5caf2.jpg',
      image: '5402050/8d5f076a-8135-11e4-8564-a86eec5bbbd4.jpg',
      right: '5402045/8d3becbc-8135-11e4-8350-95a8ed590ed7.jpg',
    },
    // {
    //   name: '',
    //   wrong: '',
    //   image: '',
    //   right: '',
    // },
    {
      name: 'Stephen Calvillo',
      wrong: '5402751/01be5902-813c-11e4-84bd-709adaa95529.jpg',
      image: '5402749/01a0dfc6-813c-11e4-9e1a-133998c63914.jpg',
      right: '5402754/01c3eaf2-813c-11e4-9571-6354dc4d689b.jpg',
    },
    {
      name: 'Sophie Aguhob',
      wrong: '5402752/01c0ad2e-813c-11e4-9c31-ff9337a5ffea.jpg',
      image: '5402753/01c36ba4-813c-11e4-82ff-e05a90ccc9f5.jpg',
      right: '5402755/01c5a34c-813c-11e4-8307-1daf5a76caf9.jpg',
    },
    {
      name: 'Sean Stavropoulos',
      wrong: '5402756/01cec846-813c-11e4-8030-7dc0111f5389.jpg',
      image: '5402750/01b88f4a-813c-11e4-8ebd-88a12bafc7e4.jpg',
      right: '5402757/01d3cada-813c-11e4-8ccb-b1693d309ac6.jpg',
    },
    {
      name: 'Kat Kitay',
      wrong: '5402759/01da978e-813c-11e4-895c-c9c98b9026f5.jpg',
      image: '5402758/01d843da-813c-11e4-9063-3b6c65a8aadc.jpg',
      right: '5402761/01dcecaa-813c-11e4-8929-01832ec25f07.jpg',
    },
    {
      name: 'Rian Bosak',
      wrong: '5402762/01e4ffe4-813c-11e4-87a0-3ceb321f1d6c.jpg',
      image: '5402760/01dc5ff6-813c-11e4-9b02-e02234597a79.jpg',
      right: '5402763/01e9c0b0-813c-11e4-9e02-4cd85b3acc6c.jpg',
    },
    {
      name: 'Jon Brence',
      wrong: '5402764/01f0a1d2-813c-11e4-93cd-cf8aa3f5e919.jpg',
      image: '5402765/01f0cdba-813c-11e4-8e75-aa36a8e29a72.jpg',
      right: '5402767/01f6f604-813c-11e4-8494-fc7594f31f65.jpg',
    },
    {
      name: 'Nick Vanahian',
      wrong: '5402768/01fbbaf4-813c-11e4-9e5c-d671656f44ca.jpg',
      image: '5402766/01f5a36c-813c-11e4-822e-3fa23ce9e830.jpg',
      right: '5402769/01ff5d76-813c-11e4-92cc-c513c1825479.jpg',
    },
    {
      name: 'Damian Skoczylas',
      wrong: '5402770/02095452-813c-11e4-9a7b-e3bcecd42d0a.jpg',
      image: '5402771/020a2b70-813c-11e4-9dd5-bef4aec08888.jpg',
      right: '5402772/020cb2f0-813c-11e4-91fe-5c84d5df9d2f.jpg',
    },
    {
      name: 'Ted Otte',
      wrong: '5402774/0214a0be-813c-11e4-8e5b-77a363f83e4b.jpg',
      image: '5402773/02102d40-813c-11e4-83e7-3f251115a864.jpg',
      right: '5402775/021640d6-813c-11e4-9bab-5e82dbd11e6b.jpg',
    },
    {
      name: 'Erica Putze',
      wrong: '5402777/0223d444-813c-11e4-9506-65d30d8dc14b.jpg',
      image: '5402776/02226032-813c-11e4-9278-73b7e31165a9.jpg',
      right: '5402778/0229baee-813c-11e4-8df4-faba1755e219.jpg',
    },
    {
      name: 'Dan Rosen',
      wrong: '5402780/02360984-813c-11e4-819b-8bf0139c5683.jpg',
      image: '5402779/02319886-813c-11e4-9739-8dc2cf15c379.jpg',
      right: '5402781/0238566c-813c-11e4-9621-838b41e313ef.jpg',
    },
    {
      name: 'Yakov Rabinovich',
      wrong: '5402783/023cde9e-813c-11e4-9c3c-c0f7fff28b4d.jpg',
      image: '5402782/023cbb12-813c-11e4-88cf-4330cea9adb5.jpg',
      right: '5402784/02453cd8-813c-11e4-9444-00898235104e.jpg',
    },
    {
      name: 'Jeff Wright',
      wrong: '5402787/0266b124-813c-11e4-9e57-b4184c155066.jpg',
      image: '5402785/0260b058-813c-11e4-9439-9432381e3907.jpg',
      right: '5402786/02640ece-813c-11e4-97dc-3bc55d742af7.jpg',
    },
    {
      name: 'Shannon Shelly',
      wrong: '5402788/0267cc12-813c-11e4-8d56-a943fa166f38.jpg',
      image: '5402789/02691824-813c-11e4-9737-4d2fc130acae.jpg',
      right: '5402790/0269a758-813c-11e4-996d-de81ae45bf3f.jpg',
    },
    {
      name: 'Almog Avidan Antonir',
      wrong: '5402792/028eaf76-813c-11e4-8161-2f5cda3b48c0.jpg',
      image: '5402793/028fe508-813c-11e4-8118-30ec7281a135.jpg',
      right: '5402791/0288db1e-813c-11e4-93fa-58e9e76413ea.jpg',
    },
    {
      name: 'Aaron Harpole',
      wrong: '5402795/0292243a-813c-11e4-8419-0d5619c61c15.jpg',
      image: '5402794/0290c522-813c-11e4-8cd1-0f41af2947c2.jpg',
      right: '5402796/02941a74-813c-11e4-9ecc-cafb9a0088ce.jpg',
    },
    {
      name: 'Dani Abraham',
      wrong: '5402798/02b8dc56-813c-11e4-917a-2112caeacd63.jpg',
      image: '5402797/02b77488-813c-11e4-973d-41778d745c1f.jpg',
      right: '5402800/02bdd1a2-813c-11e4-9378-6ff1330edbfb.jpg',
    },
    {
      name: 'Claudio Baccigalupo',
      wrong: '5402801/02bfa4d2-813c-11e4-9d8a-35ffa312550f.jpg',
      image: '5402799/02bdc590-813c-11e4-8159-21c7511fc49a.jpg',
      right: '5402802/02bfa676-813c-11e4-900f-7e16ca5ff062.jpg',
    },
    {
      name: 'Natalie Black',
      wrong: '5402052/8d63aaae-8135-11e4-8ef6-6c2ccf5a7b7f.jpg',
      image: '5402053/8d677bca-8135-11e4-95df-91799240b608.jpg',
      right: '5402051/8d61976e-8135-11e4-80ce-c04b10b46c4d.jpg',
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