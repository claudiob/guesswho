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
      name: 'Stefan Sundin',
      wrong: '5403593/1a82a0f4-8143-11e4-8c7c-b7c01797137a.jpg',
      image: '5403589/1a6089c4-8143-11e4-984d-aff3135e3ec1.jpg',
      right: '5403592/1a80a150-8143-11e4-893c-f6e449919d76.jpg',
    },
    {
      name: 'Barbara Evett',
      wrong: '5403594/1a862940-8143-11e4-9c5e-3206ebf92f92.jpg',
      image: '5403591/1a7f881a-8143-11e4-9edd-65e31f41e5a5.jpg',
      right: '5403595/1a88bade-8143-11e4-95b7-7cd1abce26e9.jpg',
    },
    {
      name: 'Tim Dawbarn',
      wrong: '5403596/1a8f8062-8143-11e4-8a15-d60a8d462426.jpg',
      image: '5403590/1a77df5c-8143-11e4-9efc-11daf8493999.jpg',
      right: '5403597/1a97ce52-8143-11e4-9f36-bd0e0f9a9eef.jpg',
    },
    {
      name: 'Chris Griffin',
      wrong: '5403599/1a9a532a-8143-11e4-95fd-78d1d644598c.jpg',
      image: '5403598/1a98bc7c-8143-11e4-8629-d3b4515e33e3.jpg',
      right: '5403600/1a9ee1f6-8143-11e4-88d0-c888cb4e2bd5.jpg',
    },
    {
      name: 'Brett Ulrich',
      wrong: '5403602/1aa577dc-8143-11e4-9255-cf1ea411cba4.jpg',
      image: '5403601/1a9ff154-8143-11e4-9a27-f5839704f554.jpg',
      right: '5403605/1ab514da-8143-11e4-8de9-2c871b236de4.jpg',
    },
    {
      name: 'Jeremy Hoffing',
      wrong: '5403604/1ab2c77a-8143-11e4-9c95-419b95433817.jpg',
      image: '5403603/1ab20efc-8143-11e4-8c53-4e6117c627d6.jpg',
      right: '5403606/1ab5f0c6-8143-11e4-8fda-522b56b9501d.jpg',
    },
    {
      name: 'Borislav Ivanov',
      wrong: '5403607/1abdbcac-8143-11e4-9528-66b7ddfde8d6.jpg',
      image: '5403608/1abea6c6-8143-11e4-9bb5-6e975a4b438f.jpg',
      right: '5403609/1ad1f7ee-8143-11e4-841d-9afb4dcba459.jpg',
    },
    {
      name: 'Khang Pham',
      wrong: '5403611/1ad4e9cc-8143-11e4-8509-f107666d1b2d.jpg',
      image: '5403610/1ad2ad06-8143-11e4-9f86-1abfdc7059cd.jpg',
      right: '5403612/1ad6b248-8143-11e4-83ed-48c7c8dfc7d4.jpg',
    },
    {
      name: 'Vincent Seah',
      wrong: '5403614/1ae89f08-8143-11e4-9a51-57ad82ba18b6.jpg',
      image: '5403613/1adfd72e-8143-11e4-9479-ac16cd807b36.jpg',
      right: '5403615/1af607b0-8143-11e4-9d23-17f46142898a.jpg',
    },
    {
      name: 'Brando Madden',
      wrong: '5403616/1af6d190-8143-11e4-9276-36549b893c6d.jpg',
      image: '5403618/1af9c954-8143-11e4-9100-b61380b25218.jpg',
      right: '5403617/1af741f2-8143-11e4-98d9-7137c4cade4e.jpg',
    },
    {
      name: 'Jay Stakelon',
      wrong: '5403620/1b1ad6e4-8143-11e4-9651-7a3f295595ab.jpg',
      image: '5403619/1afc00fc-8143-11e4-9414-2b6c594ae388.jpg',
      right: '5403623/1b23f120-8143-11e4-8bbf-4c6d3e1786aa.jpg',
    },
    {
      name: 'Chuck Lee',
      wrong: '5403622/1b2348b0-8143-11e4-95d6-11f6dacd9d85.jpg',
      image: '5403621/1b2065fa-8143-11e4-9b93-7d5db96fd3b3.jpg',
      right: '5403624/1b2450e8-8143-11e4-84ad-01416ef5da51.jpg',
    },
    {
      name: 'Matt Danna',
      wrong: '5403626/1b5199fe-8143-11e4-919c-40d3748ca40a.jpg',
      image: '5403625/1b25e6ce-8143-11e4-94b6-ba9fde77bbe9.jpg',
      right: '5403627/1b527568-8143-11e4-9772-d499641b04e8.jpg',
    },
    {
      name: 'Tim Mohn',
      wrong: '5403629/1b5703bc-8143-11e4-9d5a-209f05ccfdfd.jpg',
      image: '5403630/1b5b256e-8143-11e4-8124-d1e3924e8669.jpg',
      right: '5403628/1b55d794-8143-11e4-8239-fc36a59c8480.jpg',
    },
    {
      name: 'Brandon Lynch',
      wrong: '5403635/1b84c176-8143-11e4-9b78-c403c4c3e483.jpg',
      image: '5403631/1b5d0456-8143-11e4-8ca8-728c39d2cd0b.jpg',
      right: '5403632/1b805276-8143-11e4-847a-8329010b195d.jpg',
    },
    {
      name: 'Jennifer Laughlin',
      wrong: '5403634/1b84a164-8143-11e4-873b-02139c689f13.jpg',
      image: '5403633/1b833fcc-8143-11e4-938b-3f0235d3db35.jpg',
      right: '5403636/1b864e88-8143-11e4-9e78-2c8ed8b144aa.jpg',
    },
    {
      name: 'Dana Alibrandi',
      wrong: '5403640/1bbde46a-8143-11e4-8619-95881a2bc8b3.jpg',
      image: '5403637/1b88467a-8143-11e4-89e3-2049126c7f91.jpg',
      right: '5403639/1bbaba06-8143-11e4-97bb-7d4bf0c69a98.jpg',
    },
    {
      name: 'Jordan Worona',
      wrong: '5404399/e200286a-814b-11e4-8807-441df4412cd8.jpg',
      image: '5404400/e200c20c-814b-11e4-891f-c7a6ba831abd.jpg',
      right: '5404397/e1de1df6-814b-11e4-8f24-7d9395f968af.jpg',
    },
    {
      name: 'Clara Bottoms',
      wrong: '5404402/e2036e30-814b-11e4-94d1-a2753ed922b6.jpg',
      image: '5404401/e200f11e-814b-11e4-8a98-ab660056780c.jpg',
      right: '5404403/e203e608-814b-11e4-8631-07c56e4839fc.jpg',
    },
    {
      name: 'Stephen Jaffe',
      wrong: '5404404/e2165068-814b-11e4-97f3-9d0a544547f2.jpg',
      image: '5404398/e1f54580-814b-11e4-9f5d-e6a496df839a.jpg',
      right: '5404405/e21b179c-814b-11e4-856a-223bd8ac97fc.jpg',
    },
    {
      name: 'Kabibi Dagogo-Jack',
      wrong: '5404407/e21c4f18-814b-11e4-8867-907cd7d15c35.jpg',
      image: '5404406/e21b7264-814b-11e4-95b1-8d6e8202efeb.jpg',
      right: '5404409/e21e28ec-814b-11e4-86a1-489713d19cc8.jpg',
    },
    {
      name: 'Taylor Pullen',
      wrong: '5404415/e249e25c-814b-11e4-905f-ae3bd10d4cc1.jpg',
      image: '5404408/e21d6e52-814b-11e4-8e19-c935d2543bff.jpg',
      right: '5404410/e235c042-814b-11e4-9288-25a14e14c47c.jpg',
    },
    {
      name: 'Phil Ranta',
      wrong: '5404411/e235d9ce-814b-11e4-9384-51c3f7b19768.jpg',
      image: '5404412/e2366678-814b-11e4-9e1a-bd0669ff76ad.jpg',
      right: '5404413/e237dd1e-814b-11e4-97d3-ed89b26aa71a.jpg',
    },
    {
      name: 'Michael Roach',
      wrong: '5404417/e2555f74-814b-11e4-876f-6a5a0fa6d7cd.jpg',
      image: '5404414/e2388f3e-814b-11e4-9666-ac55fbc7efe7.jpg',
      right: '5404416/e2545778-814b-11e4-92e7-25ed5216d5b6.jpg',
    },
    {
      name: 'Brian Stavis',
      wrong: '5404419/e2594b70-814b-11e4-89ad-8db2cd9aed36.jpg',
      image: '5404418/e2557e78-814b-11e4-9a6e-a489fe4bc0b2.jpg',
      right: '5404420/e25af6f0-814b-11e4-8513-ba05f6d1a356.jpg',
    },
    {
      name: 'Carter Brown',
      wrong: '5404424/e273c392-814b-11e4-8fb4-033ce5652663.jpg',
      image: '5404421/e26d97ce-814b-11e4-9700-7f8f1ba1630d.jpg',
      right: '5404423/e272384c-814b-11e4-917a-d2b0b987ffce.jpg',
    },
    {
      name: 'Eric Ryu',
      wrong: '5404426/e2750892-814b-11e4-82d9-a65ee8e9b578.jpg',
      image: '5404422/e2722b4a-814b-11e4-9a8a-21b022b0b343.jpg',
      right: '5404425/e274de80-814b-11e4-90e0-df2bae883fd8.jpg',
    },
    {
      name: 'Luan Ton',
      wrong: '5404428/e29f2b90-814b-11e4-9d4d-4a6465167e25.jpg',
      image: '5404427/e29bda26-814b-11e4-97f3-ab775bd0aab3.jpg',
      right: '5404429/e2a0100a-814b-11e4-911e-376d4f2e6cfd.jpg',
    },
    {
      name: 'Adam Perly',
      wrong: '5404431/e2a4e832-814b-11e4-8353-c60c2bb736a0.jpg',
      image: '5404430/e2a287f4-814b-11e4-811f-ff7b5b1a55a2.jpg',
      right: '5404432/e2aa2536-814b-11e4-8f53-b00a5c1f639c.jpg',
    },
    {
      name: 'Briana Wilson',
      wrong: '5404436/e2ced336-814b-11e4-97ca-a5da3baf7bcd.jpg',
      image: '5404433/e2c68ce4-814b-11e4-827d-e3bbfb0c556d.jpg',
      right: '5404434/e2cb08f0-814b-11e4-91f5-467a2347155c.jpg',
    },
    {
      name: 'Praveen Kumar Bala',
      wrong: '5404438/e2d0e040-814b-11e4-9559-9beefd8ace46.jpg',
      image: '5404435/e2ceb6da-814b-11e4-824c-022f17f78b20.jpg',
      right: '5404437/e2d03910-814b-11e4-815e-4e39b43607c6.jpg',
    },
    {
      name: 'Valentine Hidayat',
      wrong: '5404441/e2f7f612-814b-11e4-83e6-54eba83cb64b.jpg',
      image: '5404439/e2f64b50-814b-11e4-9f48-6fc1cb84977c.jpg',
      right: '5404442/e2fc67f6-814b-11e4-9d8c-b6f192b56add.jpg',
    },
    {
      name: 'Pear Phongsawad',
      wrong: '5404443/e2fd5d32-814b-11e4-82c7-c52960ed2828.jpg',
      image: '5404440/e2f7d538-814b-11e4-9266-056593fbd56f.jpg',
      right: '5404444/e2ffbc76-814b-11e4-8ec6-47b802ce18df.jpg',
    },
    {
      name: 'Jared Tibshraeny',
      wrong: '5404448/e322e7be-814b-11e4-9f6f-26e567be0d9e.jpg',
      image: '5404445/e31e8728-814b-11e4-84e6-a9a988c3a5a4.jpg',
      right: '5404446/e320f760-814b-11e4-9d00-d7ec9c9a7ca5.jpg',
    },
    {
      name: 'Bill Colella',
      wrong: '5404449/e3258794-814b-11e4-8792-737143666236.jpg',
      image: '5404450/e3269ab2-814b-11e4-9434-610d621a60b9.jpg',
      right: '5404447/e322c414-814b-11e4-9a6f-6e6da8c8d378.jpg',
    },
    {
      name: 'Adam Ford',
      wrong: '5404452/e346c422-814b-11e4-836e-306574868ac2.jpg',
      image: '5404451/e345105a-814b-11e4-95f2-a2849aa132c7.jpg',
      right: '5404453/e3490a98-814b-11e4-9d83-cc12a38def59.jpg',
    },
    {
      name: 'Nick Dazé',
      wrong: '5404456/e34e9440-814b-11e4-8719-baba318566b4.jpg',
      image: '5404454/e34968f8-814b-11e4-8043-2d4121f1b620.jpg',
      right: '5404455/e34dca4c-814b-11e4-8995-f1bcd16d599b.jpg',
    },
    {
      name: 'Justin Greene',
      wrong: '5404460/e37601d8-814b-11e4-9dcc-199e8f0a0b8c.jpg',
      image: '5404459/e375b4bc-814b-11e4-9c82-f8af3937def2.jpg',
      right: '5404458/e373d2fa-814b-11e4-9777-bb2fc46c3e40.jpg',
    },
    {
      name: 'Drew Stokes',
      wrong: '5404461/e3762eec-814b-11e4-86a9-2459684667ec.jpg',
      image: '5404457/e3706912-814b-11e4-80a4-22090c290250.jpg',
      right: '5404462/e3774d5e-814b-11e4-8f25-2470a87f5e50.jpg',
    },
    {
      name: 'Jeff Uyeno',
      wrong: '5404464/e3a48d1e-814b-11e4-85b3-ee2ad5c792b0.jpg',
      image: '5404463/e387253a-814b-11e4-860b-696f19429f1b.jpg',
      right: '5404468/e3ac3f1e-814b-11e4-9d67-30c9edb37d0c.jpg',
    },
    {
      name: 'Steve Kye',
      wrong: '5404465/e3a5f992-814b-11e4-9780-aaff37d48f57.jpg',
      image: '5404466/e3a80ca0-814b-11e4-8773-f9b34bfa6737.jpg',
      right: '5404467/e3ab55ae-814b-11e4-966f-2cd5199aa586.jpg',
    },
    {
      name: 'Thibault Alix',
      wrong: '5404470/e3c611be-814b-11e4-82da-ceb1ef9d6217.jpg',
      image: '5404469/e3afcada-814b-11e4-8d6f-aff69a25bf4f.jpg',
      right: '5404471/e3c7eec6-814b-11e4-85f4-a2647e4a7a79.jpg',
    },
    {
      name: 'Stephanie Wettstein',
      wrong: '5404473/e3cac9c0-814b-11e4-807c-c67f69fbe701.jpg',
      image: '5404472/e3c9b026-814b-11e4-9ac2-c803a582786a.jpg',
      right: '5404474/e3cd29c2-814b-11e4-9e28-dad2a8a38299.jpg',
    },
    {
      name: 'Alex Vodovoz',
      wrong: '5404476/e3f36916-814b-11e4-8891-249be164c97d.jpg',
      image: '5404475/e3cdbd6a-814b-11e4-9a35-a0e0767e3fb8.jpg',
      right: '5404477/e3f60ebe-814b-11e4-9608-f451752115d6.jpg',
    },
    {
      name: 'Scott Chiang',
      wrong: '5404480/e3f9b46a-814b-11e4-9645-d23de6dc0871.jpg',
      image: '5404478/e3f72cb8-814b-11e4-8be1-6018e714f79a.jpg',
      right: '5404479/e3f780c8-814b-11e4-894b-aa8380a5a46b.jpg',
    },
    {
      name: 'Jake Boggan',
      wrong: '5404482/e423ee6a-814b-11e4-8314-91b995591a3e.jpg',
      image: '5404481/e3fc3dd4-814b-11e4-99dc-9518eeb78929.jpg',
      right: '5404483/e4285568-814b-11e4-9c71-4afbb5ef4978.jpg',
    },
    {
      name: 'Howard Pinskie',
      wrong: '5404484/e42a5278-814b-11e4-8ba0-3664a93eec7f.jpg',
      image: '5404486/e42c835e-814b-11e4-9286-d0ff7e3a1808.jpg',
      right: '5404485/e42aa142-814b-11e4-9fae-acb46f435266.jpg',
    },
    {
      name: 'Jacob Masga',
      wrong: '5404488/e43d70f6-814b-11e4-93b9-58d2919e4425.jpg',
      image: '5404487/e42dc6ba-814b-11e4-84ec-47c4cfa14e20.jpg',
      right: '5404489/e440945c-814b-11e4-82fa-d7a65710efa8.jpg',
    },
    {
      name: 'Tariq Abouddafar',
      wrong: '5405357/5a713f20-8159-11e4-96b8-659a50e073d7.jpg',
      image: '5405353/5a4f5090-8159-11e4-914a-587ed33ad97e.jpg',
      right: '5405358/5a747c4e-8159-11e4-966d-2c09fa2c44dc.jpg',
    },
    {
      name: 'Hwanmoon Lee',
      wrong: '5405356/5a6f25d2-8159-11e4-8bb9-3fe48542a5f2.jpg',
      image: '5405359/5a75ae34-8159-11e4-8625-9dad214d9534.jpg',
      right: '5405360/5a783ed8-8159-11e4-8dd2-629e8649a7ec.jpg',
    },
    {
      name: 'Jody Belliveau',
      wrong: '5405355/5a6b3bf2-8159-11e4-8b81-b7f7882bc7df.jpg',
      image: '5405362/5a877830-8159-11e4-9050-187862ecccdf.jpg',
      right: '5405361/5a824978-8159-11e4-86ce-eaef82bd608e.jpg',
    },
    {
      name: 'Mahzad Babayan',
      wrong: '5405363/5a886574-8159-11e4-8d20-0f6568f0406f.jpg',
      image: '5405365/5a8ce55e-8159-11e4-8610-8579081d2d6f.jpg',
      right: '5405364/5a8c0abc-8159-11e4-8766-a1e15219efc4.jpg',
    },
    {
      name: 'Daniel Reyes',
      wrong: '5405367/5a985fe2-8159-11e4-95c1-bb0b506a0e8f.jpg',
      image: '5405366/5a8e216c-8159-11e4-8976-5f68a33aa203.jpg',
      right: '5405368/5a9ef032-8159-11e4-9ba6-4d99d18e3f30.jpg',
    },
    {
      name: 'Calvin Wilson',
      wrong: '5405372/5aab8194-8159-11e4-8f4b-a1747ab560f4.jpg',
      image: '5405371/5aaaf094-8159-11e4-8397-48a555c92c7b.jpg',
      right: '5405369/5aa6152e-8159-11e4-931b-44fbdec07994.jpg',
    },
    {
      name: 'Kalman Lee',
      wrong: '5405373/5aae5356-8159-11e4-8d46-463a901cdc86.jpg',
      image: '5405370/5aa6dce8-8159-11e4-9339-9288fb63fc39.jpg',
      right: '5405374/5abec416-8159-11e4-9d41-41f51d8626d6.jpg',
    },
    {
      name: 'Lyndsay Miller',
      wrong: '5405377/5ac7e0e6-8159-11e4-994a-5e71bf4934f4.jpg',
      image: '5405376/5ac576da-8159-11e4-9dce-5e76cbdb6091.jpg',
      right: '5405375/5ac55c86-8159-11e4-8710-239a191bebe6.jpg',
    },
    {
      name: 'JJ Aguhob',
      wrong: '5405378/5ac8e482-8159-11e4-93e8-928ad54f2dce.jpg',
      image: '5405379/5acba0fa-8159-11e4-9b3f-069054b54beb.jpg',
      right: '5405380/5ad61b20-8159-11e4-930e-53eecebf9159.jpg',
    },
    {
      name: 'Matthew Canoy',
      wrong: '5405382/5af75f74-8159-11e4-93a5-d4548c0e5bac.jpg',
      image: '5405381/5af65566-8159-11e4-8588-57877b53046d.jpg',
      right: '5405383/5af89c4a-8159-11e4-968e-5f0ff60aa814.jpg',
    },
    {
      name: 'Jeremy Grodberg',
      wrong: '5405384/5afbe85a-8159-11e4-9d0e-5a0ebb586e0e.jpg',
      image: '5405385/5afc15c8-8159-11e4-8161-2bc2176204cb.jpg',
      right: '5405386/5afdd4e4-8159-11e4-8276-66877cad8ba3.jpg',
    },
    {
      name: 'Jin Kim',
      wrong: '5405388/5b241ece-8159-11e4-8123-8dc3a8bb937a.jpg',
      image: '5405387/5b231b46-8159-11e4-8786-0389f5fee3b8.jpg',
      right: '5405389/5b26121a-8159-11e4-90c4-1268e1296ee9.jpg',
    },
    {
      name: 'Edward Park',
      wrong: '5405391/5b29d53a-8159-11e4-8c04-9af39228bc43.jpg',
      image: '5405390/5b2812fe-8159-11e4-8c62-d526e3aa3689.jpg',
      right: '5405393/5b2df624-8159-11e4-90f6-1a7f8a345754.jpg',
    },
    {
      name: 'Kate McGuire',
      wrong: '5405396/5b51973c-8159-11e4-906a-770cc8395d11.jpg',
      image: '5405394/5b4e85e2-8159-11e4-963b-3026f4f3cf87.jpg',
      right: '5405398/5b51de7c-8159-11e4-9421-6fa8ad0a2537.jpg',
    },
    {
      name: 'Kachon Lei',
      wrong: '5405397/5b51da08-8159-11e4-816f-706dea422b1b.jpg',
      image: '5405395/5b50186c-8159-11e4-8911-30eda3868fd9.jpg',
      right: '5405399/5b528bb0-8159-11e4-9e70-d4234662a6b7.jpg',
    },
    {
      name: 'Rob Martinez',
      wrong: '5405402/5b788072-8159-11e4-8d8e-57b1bbf5530b.jpg',
      image: '5405400/5b76b256-8159-11e4-942f-a497f903bad9.jpg',
      right: '5405401/5b770e72-8159-11e4-8ee0-92ea7640d396.jpg',
    },
    {
      name: 'Johnny Shin',
      wrong: '5405404/5b7cc34e-8159-11e4-8285-818c26491460.jpg',
      image: '5405403/5b7a31c4-8159-11e4-9327-916d8aeb2e0e.jpg',
      right: '5405405/5b7d84a0-8159-11e4-9162-f42b1fabaa39.jpg',
    },
    {
      name: 'Ashley Nichols',
      wrong: '5405407/5b9b7b36-8159-11e4-89d0-8ba534d3587a.jpg',
      image: '5405406/5b99f040-8159-11e4-8658-7549a757b96d.jpg)',
      right: '5405409/5b9fd96a-8159-11e4-9604-b0f785899c68.jpg',
    },
    {
      name: 'Tony Hsieh',
      wrong: '5405410/5ba124a0-8159-11e4-93b8-ccb904ec0e63.jpg',
      image: '5405411/5ba17838-8159-11e4-9442-0a98a2739ec5.jpg',
      right: '5405408/5b9efc48-8159-11e4-9aab-f39221894a5f.jpg',
    },
    {
      name: 'Cole Guerin',
      wrong: '5405413/5bbd1f7a-8159-11e4-9d93-46b8022e941d.jpg',
      image: '5405412/5bb6b6ee-8159-11e4-99ad-7097c4ffcdfb.jpg',
      right: '5405414/5bbef93a-8159-11e4-8a23-12f196a06b84.jpg',
    },
    {
      name: 'Ming Sheu',
      wrong: '5405417/5bc473e2-8159-11e4-96e8-b0fc2a9803e0.jpg',
      image: '5405415/5bc0ed80-8159-11e4-9174-d6fb08470dd0.jpg',
      right: '5405416/5bc2dc26-8159-11e4-884b-a7aca0d5b70d.jpg',
    },

    {
      name: 'Ryan Cooper',
      wrong: '5405419/5be85c12-8159-11e4-9ccc-110fff3eec0b.jpg',
      image: '5405418/5be67c62-8159-11e4-844a-13f36034d90d.jpg',
      right: '5405421/5bebe936-8159-11e4-83a6-661b7e641abd.jpg',
    },

    {
      name: 'Jeremy Floyd',
      wrong: '5405422/5bedf26c-8159-11e4-98c2-e9ef94f7e0e5.jpg',
      image: '5405423/5bf17202-8159-11e4-9a51-ed4cc1cdb6ad.jpg',
      right: '5405420/5be9b31e-8159-11e4-9b63-f7bfd8051219.jpg',
    },
    {
      name: 'Sam Kimbrell',
      wrong: '5405425/5c13ca78-8159-11e4-9144-d1175c106a2e.jpg',
      image: '5405426/5c144cd2-8159-11e4-83c1-d5b1bae1cad1.jpg',
      right: '5405424/5c11df24-8159-11e4-8bfa-7099440e9c83.jpg',
    },
    {
      name: 'Gaylen Burton-Williams',
      wrong: '5405428/5c16bcce-8159-11e4-868d-3d95345b174f.jpg',
      image: '5405427/5c163cc2-8159-11e4-9e01-8d226d5f06b4.jpg',
      right: '5405429/5c19a736-8159-11e4-84bc-8775087a4662.jpg',
    },
    {
      name: 'Chris Chaisson',
      wrong: '5405430/5c3faf58-8159-11e4-894b-3e2fe8473502.jpg',
      image: '5405432/5c44469e-8159-11e4-9c77-dbf86f2e490a.jpg',
      right: '5405431/5c447394-8159-11e4-9c8e-225b05bbcf6c.jpg',
    },
    {
      name: 'Rosie Spindel',
      wrong: '5405434/5c462a40-8159-11e4-8181-71c3a199ae19.jpg',
      image: '5405433/5c44f5d0-8159-11e4-9e06-4cb345c0768d.jpg',
      right: '5405435/5c477314-8159-11e4-9ca9-07986e89c60d.jpg',
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