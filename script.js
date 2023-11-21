/*const calculate=()=>{
  const originalPrice = number(document.getElementById("originalPrice").value);
  const discountedPrice= number(document.getElementById("discountedPrice").value);

  const discountPrecentage = (((originalPrice-discountedPrice)/originalPrice*100).toFixed(2));
  document.getElementById("result").innerText=discountPrecentage;

};*/
const calculate = () => {
  const originalPrice = Number(document.getElementById("originalPrice").value);
  const discountedPrice = Number(
    document.getElementById("discountedPrice").value
  );
  const discountPercentage = (((originalPrice - discountedPrice) / originalPrice) *100).toFixed(2);

  document.getElementById("result").innerText = discountPercentage;
};
