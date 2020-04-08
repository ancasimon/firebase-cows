const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card" id="${cow.id}">`;
  domString += `<div class="card-header">${cow.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${cow.breed}</h5>`;
  domString += `<p class="card-text">Weight: ${cow.weight} lbs</p>`;
  domString += `<p class="card-text">Location: ${cow.location}</p>`;
  domString += '<p class="card-text">Owner(s): </p>';
  domString += '<form>';
  cow.farmers.forEach((farmer) => {
    domString += '<div class="form-check">';
    domString += `<input type="checkbox" class="form-check-input farmer-cow-checkbox" id="${farmer.farmerCowId}" data-farmer-uid=${farmer.uid} ${farmer.isChecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1">${farmer.name}</label>`;
    domString += '</div>';
  });
  domString += '</form>';
  domString += '<button class="btn btn-danger delete-cow"><i class="fas fa-trash"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { cowMaker };
