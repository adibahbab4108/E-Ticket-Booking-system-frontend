const seatBtns = document.querySelectorAll(".seat-btn");
const selectedSeat = document.getElementById("selected-seat-info");
let availableSeat = document.getElementById('available-seat').innerText;
let totalPrice = 0;

const selectedSeatList = [];
for (btn of seatBtns) {
    btn.addEventListener("click", function (e) {
        document.getElementById('default-no-seat-info').classList.add('hidden')
        selectedSeat.innerHTML += `
       <h3 class="flex justify-between">
            <span>${e.target.innerText}</span>
            <span>Economy</span>
            <span>550</span>
       </h3>
       `
        e.target.classList.add('bg-primary', 'text-white');
        selectedSeatList.push(e.target.innerText);

        document.getElementById('seatCount').innerText = selectedSeatList.length;

        if (selectedSeatList.length >= 5) {
            alert("Maximum seat selected")
            return;
        }
        availableSeat--;
        document.getElementById('available-seat').innerText = availableSeat;

        totalPrice += 550;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        console.log(totalPrice)
    })
}