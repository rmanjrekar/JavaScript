const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numOfPeople = Number(numOfPeopleDiv.innerText)
//console.log('Number of people', numOfPeople)

// ** Calculate the total bill per person **
const calculateBill = () => {
  const inputBill = Number(billTotalInput.value)
  //console.log('Total bill', inputBill)

  const tipPercentage = Number(tipInput.value) / 100
  //console.log('Tip percentage', tipPercentage)

  const tipAmount = inputBill * tipPercentage
  const totalBill = inputBill + tipAmount
  const perPersonTotal = totalBill / numOfPeople
  //perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  perPersonTotalDiv.innerText = `$${perPersonTotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
}

const increasePeople = () => {
  numOfPeople++
  numOfPeopleDiv.innerText = numOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numOfPeople <= 1) {
    //alert('Hey you can\'t have less than 1 person!')
    //return
    throw 'Hey you can\'t have less than 1 person!'

  }
  numOfPeople--
  numOfPeopleDiv.innerText = numOfPeople
  calculateBill()
}
