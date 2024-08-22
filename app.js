"use strict";

const stuffData = {
  firstName: "John",
  secondName: "Smith",
  age: 42,
  gender: "male",
  role: "CEO",
  yearsOfExperience: 1,
  inCompanySince: "03 Aug 2005",
  subordinators: [
    {
      firstName: "Jane",
      secondName: "Clark",
      age: 34,
      gender: "female",
      role: "Chief HR officer",
      yearsOfExperience: 12,
      inCompanySince: "12 May 2017",
      subordinators: [
        {
          firstName: "Ferenz",
          secondName: "Derd",
          age: 27,
          gender: "male",
          role: "Senior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "15 Oct 2019",
          subordinators: [
            {
              firstName: "Gregor",
              secondName: "Bur",
              age: 26,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 7,
              inCompanySince: "22 Apr 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
                {
                  firstName: "Peri",
                  secondName: "Hafar",
                  age: 22,
                  gender: "female",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "18 Dec 2021",
                  subordinators: null,
                },
              ],
            },
          ],
        },
        {
          firstName: "Syenn",
          secondName: "Gungvind",
          age: 38,
          gender: "female",
          role: "Senior HR manager",
          yearsOfExperience: 15,
          inCompanySince: "12 May 2012",
          subordinators: [
            {
              firstName: "Enos",
              secondName: "Zey",
              age: 30,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 5,
              inCompanySince: "18 Dec 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
              ],
            },
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Enos",
          secondName: "Zey",
          age: 30,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 5,
          inCompanySince: "18 Dec 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Gregor",
          secondName: "Bur",
          age: 26,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 7,
          inCompanySince: "22 Apr 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Caleb",
          secondName: "Ottvik",
          age: 24,
          gender: "male",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "04 Jun 2020",
          subordinators: null,
        },
        {
          firstName: "Peri",
          secondName: "Hafar",
          age: 22,
          gender: "female",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "18 Dec 2021",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Olga",
      secondName: "Petrenko",
      age: 31,
      gender: "female",
      role: "CTO",
      yearsOfExperience: 12,
      inCompanySince: "15 Apr 2019",
      subordinators: [
        {
          firstName: "Peter",
          secondName: "Barton",
          age: 29,
          gender: "male",
          role: "JS competence manager",
          yearsOfExperience: 11,
          inCompanySince: "01 Feb 2020",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Jack",
      secondName: "Black",
      age: 45,
      gender: "male",
      role: "Office manager",
      yearsOfExperience: 20,
      inCompanySince: "24 Apr 2016",
      subordinators: null,
    },
  ],
};


// дістати вложені об'єкти
// відфільтрувати працівників
// посортувати працівників
// відобразити інформацію по працівниках

function parssingStuff(stuffData, sortProperty) {
  let workersArray = [];
  flatStuff(stuffData, workersArray);

  const uniqueWorkers = filterWorkers(workersArray);
  const sortedWorkers = [...uniqueWorkers].sort(sortWorkers(sortProperty))

  displayWorkers(sortedWorkers);
}

function flatStuff(stuffData, workersArray) {
  workersArray.push(stuffData);

  if (stuffData.subordinators === null) {
    return null;
  }

  stuffData.subordinators.forEach((subordinator) => {
    flatStuff(subordinator, workersArray)
  })
}

function filterWorkers(workersArray) {
  const dataForMap = workersArray.map((worker) => {
    return [`${worker.firstName}_${worker.secondName}_${worker.role}`, worker]
  });

  const workersMap = new Map(dataForMap);
  const workersMapValues = workersMap.values();

  return [...workersMapValues];
}

function filterWorkers2(workersArray) {
  const uniqueWorkersKeys = [];

  const filteredWorkers = workersArray.filter((worker) => {
    const key = `${worker.firstName}_${worker.secondName}_${worker.role}`;

    if (!uniqueWorkersKeys.includes(key)) {
      uniqueWorkersKeys.push(key);
      return true;
    }

    // return undefined
  });

  return filteredWorkers;
}

function sortWorkers(property = "firstName") {
  return (workerA, workerB) => workerA[property] > workerB[property] ? 1 : -1;
}

function displayWorkers(workes) {
  workes.forEach((worker) => {
    const duration = Math.floor((new Date() - new Date(worker.inCompanySince)) / 1000 / 60 / 60 / 24 / 365)

    const workerFullName = `${worker.firstName} ${worker.secondName}`;

    const workerInfo = `
      ${workerFullName} as a ${worker.role}, has ${worker.yearsOfExperience} of experience and works ${duration} in the company
    `;



    console.log(workerInfo)
  });
}

parssingStuff(stuffData)