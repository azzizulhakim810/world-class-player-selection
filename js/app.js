// Select Messi 
document.getElementById('btn-messi').addEventListener('click', function(){

  playerSelection('name-messi','btn-messi');
  
})

// Select Naymar
document.getElementById('btn-neymar').addEventListener('click', function(){

  playerSelection('name-neymar','btn-neymar');
})

// Select Mbappe
document.getElementById('btn-mbappe').addEventListener('click', function(){

  playerSelection('name-mbappe','btn-mbappe');
})

// Select Machado
document.getElementById('btn-vitor').addEventListener('click', function(){

  playerSelection('name-vitor','btn-vitor');
})

// Select Ramos
document.getElementById('btn-ramos').addEventListener('click', function(){

  playerSelection('name-ramos','btn-ramos');
})

// Select Renato
document.getElementById('btn-renato').addEventListener('click', function(){

  playerSelection('name-renato','btn-renato');
})


// Cart Section ----Player Total Cost

document.getElementById('calculate-player').addEventListener('click', function(){

  calculatePlayerCost();

})


// Cart Section ----Manager & Coach Cost & total cost

document.getElementById('calculate-total').addEventListener('click', function(){

  calculateTotalCost();

})