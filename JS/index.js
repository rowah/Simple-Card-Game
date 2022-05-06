let deckId = ""


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('.player1button').addEventListener('click', drawOne)
document.querySelector('.player2button').addEventListener('click', drawTwo)

function drawOne(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        // let player1Value = convertToNum(data.cards[0].value)
        // let player2Value = convertToNum(data.cards[1].value)
        // if(player1Value > player2Value) {
        //   document.querySelector('h3').innerText = 'Player 1 Wins'
        // } else if(player2Value > player1Value) {
        //   document.querySelector('h3').innerText = 'Player 2 Wins'
        // } else {
        //   document.querySelector('h3').innerText = 'War Time!'
        // }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

function drawTwo(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        document.querySelector('#player2').src = data.cards[0].image

        //winning conditions
        let player1Value = convertToNum(data.cards[0].value)
        let player2Value = convertToNum(data.cards[1].value)
        if(player1Value > player2Value) {
          document.querySelector('h3').innerText = 'Player 1 Wins'
        } else if(player2Value > player1Value) {
          document.querySelector('h3').innerText = 'Player 2 Wins'
        } else {
          document.querySelector('h3').innerText = 'War Time!'
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}
function convertToNum (val) {
  if(val === 'ACE') {
    return 14
  } else if(val=== 'KING'){
    return 13
  } else if(val==='QUEEN'){
    return 12
  } else if(val==='JACK'){
    return 11
  } else {
    return Number(val)
  }
}
