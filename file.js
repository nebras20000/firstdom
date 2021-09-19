function pluss(x) {
    var number = document.getElementById(x);
    
        number.value=parseInt(number.value)+1;
}

function minus(y) {
    var number = document.getElementById(y);
        if (parseInt(number.value)!=1) {
            number.value=parseInt(number.value)-1;
        }
}

function deletee(div,num) {
    var x = document.getElementById(div);
    var number = document.getElementById(num);
    if (x.style.display != "none") {
      x.style.display = "none";
    }
  }

function heart(like) {
    var heart = document.getElementById(like);
    if (heart.style.color != "red") {
        heart.style.color = "red";
    } else {
        heart.style.color = "black";
    }
    
}

function sum(z,v) {
    var number=document.getElementById(z);
    var price =document.getElementById(v);
    var total =document.getElementById('itemprice'+z.slice(z.length - 1));

    number =parseInt(number.value);
    price =parseInt(price.innerText);

    total.value= number*price;
    
    console.log(number)
    console.log(price)
    console.log(total.value)
    console.log(total)


    
}
function finalprice(x) {
    var total1 =parseInt(document.getElementById('itemprice1').value);
    var total2 =parseInt(document.getElementById('itemprice2').value);
    var total3 =parseInt(document.getElementById('itemprice3').value);

    var final =document.getElementById('finalPrice');

    final.value= total1+total2+total3;

    console.log(final.value);
    

    
}
