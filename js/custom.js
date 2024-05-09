// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const catalogRow = document.getElementById("catalog_row");

  const products = [
    { name: "Onza Cherry", price: 1400, image: "images/strain_sin_fondo_2.png" },
    { name: "Cartucho de wax", price: 1200, image: "images/wax_catridges.png" },
  ];

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-sm-6 col-md-4 col-lg-3";
    productDiv.innerHTML = `
            <div class="box">
                <a href="">
                    <div class="img-box">
                        <img src="${product.image}" alt="${product.name}" />
                    </div>
                    <div class="detail-box">
                        <h6>${product.name}</h6>
                        <h6>Precio <span>$${product.price}</span></h6>
                    </div>
                    <div class="new">
                        <span>Nuevo</span>
                    </div>
                </a>
            </div>
        `;
    catalogRow.appendChild(productDiv);
  });

  console.log(JSON.stringify(products));
});
