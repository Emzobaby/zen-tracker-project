const footprint = {
  drive_car: true,
  fly_plane: false,
  renewable_energy: false,
  vegan: false,
  cold_water_wash: true,
  recycle: true,
  tumble_dryer: false,
  energy_saving_lightbulbs: true
}

const calculator = function(footprint){
  let score = 0
  if (footprint.drive_car === false){
    score += 2.4;
  }
  if (footprint.fly_plane === false){
    score += 1.6;
  }
  if (footprint.renewable_energy === true){
    score += 1.5;
  }
  if (footprint.vegan === true){
    score += 0.8;
  }
  if (footprint.cold_water_wash === true){
    score += 0.247;
  }
  if (footprint.recycle === true){
    score += 0.2125;
  }
  if (footprint.tumble_dryer === false){
    score += 0.21;
  }
  if (footprint.energy_saving_lightbulbs === true){
    score += 0.1;
  }
  return score
};
console.log(calculator(footprint));