const calculate=()=>{
  const originalPrice = number(document.getElementById("originalPrice").value);
  const discountedPrice= number(document.getElementById("discountedPrice").value);

  const discountPrecentage = (((originalPrice-discountedPrice)/originalPrice*100).toFixed(2));
  document.getElementById("result").innerText=discountPrecentage;

};