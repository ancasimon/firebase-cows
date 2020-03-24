const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card">';
  domString += `<div class="card-header">${cow.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${cow.breed}</h5>`;
  domString += `<p class="card-text">Weight: ${cow.weight} lbs</p>`;
  domString += `<p class="card-text">Location: ${cow.location}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { cowMaker };
