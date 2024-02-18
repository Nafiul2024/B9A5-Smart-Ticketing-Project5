let count =0 ;
const allBtn = document.getElementsByClassName('btn');
    for(const btn of allBtn){
        btn.addEventListener("click", function handleSelect(event){
            const price = document.getElementById('price');
            const convertedPrice = parseInt(price.innerText);
            const priceContainer = document.getElementById("price-container");
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerText = convertedPrice;
            li.appendChild(p);
            priceContainer.appendChild(li);

            // total-price
            const totalPrice = document.getElementById("total-price").innerText;
            const total = parseFloat(totalPrice) + parseFloat(price.innerText);
            document.getElementById("total-price").innerText = total;

            // count = count + 1;

            const totalTicket = document.getElementById("total-tickets").innerText;
            const totalT = parseInt(totalTicket) + parseInt(count+1);
            document.getElementById("total-tickets").innerText = totalT;

            const seatsTotal = document.getElementById("seats-left").innerText;
            const seatsLeft = parseInt(seatsTotal) + parseInt(count-1);
            document.getElementById("seats-left").innerText = seatsLeft;

            

            

        })
    }

    function grandTotal(category) {
        const convertTotal = getValue(total);
        if (category === "NEW15") {
          setInnerText("grand-total", convertTotal *0.85);
        } else if (category === "Couple20") {
          setInnerText("grand-total", convertTotal *0.85);
        } else {
          setInnerText("grand-total", convertTotal);
        }
      }
      function setInnerText(id, value) {
        value = document.getElementById(id).innerText;
      }