const guestName = prompt('enter your name')
const gueslist = ['json','array','string','true','false']

const guest = gueslist.filter(e=> e === guestName)



if(guest[0]){
    alert(`welcome to party ${guestName}`)
}
else{
    alert('plz not come')
}
