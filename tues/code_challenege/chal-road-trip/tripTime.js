const tripTime = (arr) => {
  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: null,
  };
  //find the average speed limit and time of each segments and push in array
  for (let i = 0; i < stops.length; i++) {
    //variables for each segment
    let avg = 0;
    let distance = 0;
    let speed = 0;
    for (let j = 0; j < stops[i].speedLimits.length; j++) {
      //calculating weighted average of each segment
      let currSpeed = stops[i].speedLimits[j].speedLimit;
      let currDistance = stops[i].speedLimits[j].distance;
      //weightedAvg = (distance * speed + distance * speed...)/distance total
      //(10 * 50 + 20 * 35)/10+20 > 1200/30 > 40
      distance += stops[i].speedLimits[j].distance;
      speed += stops[i].speedLimits[j].speedLimit;
      avg += currSpeed * currDistance;
    }
    //calculate weighted average and push to array
    avg /= distance;
    result.avgSpeedLimits.push(+avg.toFixed(1));
    //time = distance/speed
    result.segmentTimes.push(+(distance / speed).toFixed(1));
  }
  //calculate total time
  result.totalTime = +result.segmentTimes
    .reduce((acc, curr) => acc + curr)
    .toFixed(1);
  return result;
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
  {
    name: `Gus's Gas`,
    speedLimits: [
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 97,
        speedLimit: 65,
      },
      {
        distance: 72,
        speedLimit: 70,
      },
      {
        distance: 25,
        speedLimit: 50,
      },
    ],
    traffic: 12,
  },
  {
    name: `Halle's House of Pancakes`,
    speedLimits: [
      {
        distance: 36,
        speedLimit: 50,
      },
      {
        distance: 141,
        speedLimit: 75,
      },
    ],
    traffic: 0,
  },
  {
    name: `Jake's Great Shakes`,
    speedLimits: [
      {
        distance: 100,
        speedLimit: 75,
      },
      {
        distance: 84,
        speedLimit: 70,
      },
      {
        distance: 20,
        speedLimit: 75,
      },
    ],
    traffic: 30,
  },
  {
    name: `Luna's Lunch Counter`,
    speedLimits: [
      {
        distance: 3,
        speedLimit: 35,
      },
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 20,
        speedLimit: 65,
      },
      {
        distance: 85,
        speedLimit: 75,
      },
      {
        distance: 3,
        speedLimit: 65,
      },
      {
        distance: 5,
        speedLimit: 55,
      },
    ],
    traffic: 7,
  },
];

console.log(tripTime(stops));
