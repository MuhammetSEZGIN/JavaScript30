const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const inventorsTableBody = document.querySelector('#inventors-table tbody');
  inventors.forEach(inventor => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${inventor.first}</td>
          <td>${inventor.last}</td>
          <td>${inventor.year}</td>
          <td>${inventor.passed}</td>
      `;
      inventorsTableBody.appendChild(row);
  });
  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  const peopleList= document.querySelector('#people-list');
  people.forEach(person => {
      const li = document.createElement('li');
      li.textContent = person;
      peopleList.appendChild(li);
  });

  // Array.prototype.filter()

      var filter1 = inventors.filter(inventor=>inventor.year>=1500 && inventor.year<1600);
      document.querySelector('p[name="answer1"]').textContent = JSON.stringify(filter1);
      console.table(filter1);
      // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
      var filter2 = inventors.map(inventor=>inventor.first+" "+inventor.last);
      document.querySelector('p[name="answer2"]').textContent= JSON.stringify(filter2);
      console.table(filter2);
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
      var sorted= inventors.sort((a,b)=>a.year-b.year);
      document.querySelector('p[name="answer3"]').textContent= JSON.stringify(sorted);
      console.table(sorted);
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
      var totalYears= inventors.reduce((total, inventor)=>total+(inventor.passed- inventor.year),0);
      document.querySelector('p[name="answer4"]').textContent= JSON.stringify(totalYears);
      console.log(totalYears);
      console.table(totalYears);
  // 5. Sort the inventors by years lived
      var sortedByYears= inventors.sort((a,b)=>(a.passed-a.year)-(b.passed-b.year));
      document.querySelector('p[name="answer5"]').textContent= JSON.stringify(sortedByYears);
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

      
  // 7. sort Exercise
  // Sort the people alphabetically by last name
    var sortedNames= people.sort((a,b)=>{
       return a.split(",")[1].localeCompare(b.split(",")[1]);
    })

    console.table(sortedNames);
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  var sumData= data.reduce((total,item)=>total+ item);
  console.log(sumData);
