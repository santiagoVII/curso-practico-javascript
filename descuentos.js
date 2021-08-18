// const precioOriginal = 120;
// const descuento = 18;

const cupones = [
  { name: "Cupon 1", discount: 10 },
  { name: "Cupon 2", discount: 20 },
  { name: "Cupon 3", discount: 30 },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  // const inputDiscount = document.getElementById("inputDiscount");
  // const discountValue = inputDiscount.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = cupones.find(function (coupon) {
    return coupon.name === couponValue;
  });

  const resultPrice = document.getElementById("resultPrice");

  if (isCouponValueValid) {
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      isCouponValueValid.discount
    );
    resultPrice.innerText =
      "El precio con tu " +
      couponValue +
      " (" +
      isCouponValueValid.discount +
      "%) es: $" +
      precioConDescuento;
  } else {
    resultPrice.innerText = "El cupón " + couponValue + " no es válido";
  }
}
