let count =0 ;
const allBtn = document.getElementsByClassName('btn');
    for(const btn of allBtn){
        btn.addEventListener("click", function handleSelect(){
            const price = document.getElementById('price');
            const convertedPrice = parseInt(price.innerText);
            const priceContainer = document.getElementById("price-container");
            const li = document.createElement("li");
            const p = document.createElement("p");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");

            p1.innerText = 'Seat Number';
            p2.innerText = 'Economy Class';
            p.innerText = convertedPrice + "Taka Only";
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p);
            priceContainer.appendChild(li);

            // total-price
            const totalPrice = document.getElementById("total-price").innerText;
            const total = parseFloat(totalPrice) + parseFloat(price.innerText);
            document.getElementById("total-price").innerText = total;

            // Grand-Total-Price
            const grandTotalPrice = document.getElementById("grand-total").innerText;
            const grandTotal = parseFloat(grandTotalPrice) + parseFloat(price.innerText);
            document.getElementById("grand-total").innerText = grandTotal;
            

            const totalTicket = document.getElementById("total-tickets").innerText;
            const totalT = parseInt(totalTicket) + parseInt(count+1);
            document.getElementById("total-tickets").innerText = totalT;


            const seatsTotal = document.getElementById("seats-left").innerText;
            const seatsLeft = parseInt(seatsTotal) + parseInt(count-1);
            document.getElementById("seats-left").innerText = seatsLeft ;


            const couponBtn = document.getElementById('coupon-input');
            const couponButton = couponBtn.value;
            if(couponButton === 'NEW15' || couponButton === 'Couple20'){
              couponBtn.classList.add('hidden');
            }else{
              return ('Invalid Coupon');
            }

            

            

        })
    }


    
        function grandTotal(couponInput) {
        const grandTotal = document.getElementById('grand-total');
        const convertedGrandTotal = parseFloat(grandTotal.innerText);
        const totalPrice = document.getElementById("total-price").innerText;
        const total = parseFloat(totalPrice) + parseFloat(price.innerText);
        document.getElementById("total-price").innerText = total;

        if (couponInput === "NEW15") {
          setInnerText("grand-total", total *0.85);
        } else if (couponInput === "Couple20") {
          setInnerText("grand-total", total *0.80);
        } else {
          setInnerText("grand-total", convertedGrandTotal);
        }
      }


      function setInnerText(id, value) {
        value = document.getElementById(id).innerText;
      }


      const couponBtn = document.getElementById('coupon-button');
      couponBtn.addEventListener('click', function() {
        let couponInput = document.getElementById('coupon-input').value;
        if(couponInput === 'NEW15' || couponInput === 'Couple20'){
          couponBtn.classList.add('hidden');
          couponInput.classList.add('hidden');
        }else{
          alert ("Invalid Coupon");
        }
        return couponInput;
 
      } )  



      function disableBtn(){
        document.getElementById('btn').disabled = true;
    }


    const allBttn = document.getElementsByClassName('btn');
    for(const btn of allBttn){
    btn.addEventListener("click", function buttonBackgroundColor(){
    btn.classList.add('bg-[#1DD100]');
    
  })
}