function playerSelection(player, playerButton) {
  const getTheOlList = document.getElementById('cart-player-list');
  const createListItem = document.createElement('li');

  const appendListItem = getTheOlList.appendChild(createListItem);

  // Capture Player Name 

  const getThePlayerName = document.getElementById(player);
  const getThePlayerNameInValue = getThePlayerName.innerText;

  const seeListItem = document.querySelectorAll("li");

  if(seeListItem.length < 6) {

  // Set the player in the cart as items 

  appendListItem.innerText = getThePlayerNameInValue;

  document.getElementById(playerButton).disabled = true;

  }
  else if (seeListItem.length > 5){

  getTheOlList.removeChild(createListItem);

    alert('Error! You Can not select more than 5 players');
  }

}


// Calculate Player Cost

function calculatePlayerCost () {

      const getPerPlayerCostAmount = document.getElementById('player-cost');
      const getPerPlayerCostAmountInValue = parseInt(getPerPlayerCostAmount.value);
    
      const seeListItem = document.querySelectorAll("li");
      const totalPlayerCost = getPerPlayerCostAmountInValue * seeListItem.length;

      const showPlayerExpenseField = document.getElementById('player-expenses');

      showPlayerExpenseField.innerText = totalPlayerCost;

      const reserveTotalPlayerCost = parseInt(showPlayerExpenseField.innerText);
      
      console.log(typeof(reserveTotalPlayerCost));
}

// Calculate Total Cost

function calculateTotalCost () {

  const getManagerCostAmount = document.getElementById('manager-cost');
  const getManagerCostAmountInValue = parseInt(getManagerCostAmount.value);
  
  const getCoachCostAmount = document.getElementById('coach-cost');
  const getCoachCostAmountInValue = parseInt(getCoachCostAmount.value);

  const showTotalExpenseField = document.getElementById('total-Cost');

  const showPlayerExpenseField = document.getElementById('player-expenses');

  const reserveTotalPlayerCost = parseInt(showPlayerExpenseField.innerText);

  showTotalExpenseField.innerText = getManagerCostAmountInValue + getCoachCostAmountInValue + reserveTotalPlayerCost;


}