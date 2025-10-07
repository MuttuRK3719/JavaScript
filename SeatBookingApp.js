function seatBooking(seatNum,availableSeats){
for (const element of availableSeats) {
    if(seatNum==element){ 
        console.log("Seat", element, "Already Booked" )
        return
    }
}
availableSeats.push(seatNum)
console.log("Seat", element, "Booked" )
}
let num=5;
let arr=[3, 5, 12]
seatBooking(num,arr)
