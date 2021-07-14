function chooseStations(stations){
  let array = [];
  for(let x = 0; x < stations.length; x++){
    if (stations[x][1] >= 20)
    {
      array.push(stations[x][0]);
    }
  }
  return array;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));