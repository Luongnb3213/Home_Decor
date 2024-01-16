const menu_btn = document.querySelector("#menu");
const mobile_nav = document.querySelector(".mobile-nav");
const close_navbar_btn = document.querySelectorAll(".close_navbar_btn");
const back_icon = document.querySelectorAll(".nav_bar_head_text i");
const nav_bar_mobile = document.querySelector(".nav-bar_mobile");
const mobile_item_menu = document.querySelectorAll(".menu_item_link[id]");
const close_header = document.querySelector("#close_header");

const menu = document.querySelector("#menu_mobile");
const category = document.querySelector("#cate");
const menu_mobile = document.querySelector(".menu");
const category_mobile = document.querySelector(".cate");

menu.onclick = function () {
  if (!menu.classList.contains("active")) {
    category.classList.remove("active");
    menu.classList.add("active");
    menu_mobile.classList.toggle("mobile-item-close");
    menu_mobile.style.display = "block";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

category.onclick = function () {
  if (!category.classList.contains("active")) {
    menu.classList.remove("active");
    category.classList.add("active");
    menu_mobile.style.display = "none";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

Array.from(mobile_item_menu).forEach(function (item) {
  item.onclick = (e) => {
    let list_item = document.querySelector(`.${item.id}`);
    list_item.classList.add("go_in");
  };
});

Array.from(back_icon).forEach(function (back) {
  back.onclick = (e) => {
    let nav_bar = e.target.closest(".nav-bar_mobile");
    if (nav_bar) {
      nav_bar.classList.remove("go_in");
    }
  };
});

menu_btn.onclick = function (e) {
  mobile_nav.classList.add("layer");
  nav_bar_mobile.classList.add("go_in");
  document.body.style.overflow = "hidden";
};

Array.from(close_navbar_btn).forEach(function (btn) {
  btn.onclick = function (e) {
    const nav_bar_mobile = document.querySelectorAll(".nav-bar_mobile");
    Array.from(nav_bar_mobile).forEach(function (nav) {
      nav.classList.remove("go_in");
    });
    document.body.style.overflow = "";
    mobile_nav.classList.remove("layer");
  };
});

//------------------------------------------------------------------------------------------------------------------------------------------------------

const footer_content = document.querySelectorAll(".footer_content");

footer_content.forEach((i) => {
  i.onclick = function () {
    let footer_icon = i.querySelector(".open-children-toogle");
    if (footer_icon) {
      let footer_list = i.querySelector(".footer_list");
      let computedStyle = window.getComputedStyle(footer_list);

      footer_list.style.maxHeight =
        computedStyle.maxHeight === "0px"
          ? footer_list.scrollHeight + "px"
          : "0";
      footer_list.classList.toggle("footer-list-padding");
      footer_icon.classList.toggle("open");
    }
  };
});

mobile_nav.onclick = (e) => {
  if (e.target.classList.contains("layer")) {
    let go_in_mobile = document.querySelectorAll(".go_in");
    mobile_nav.classList.remove("layer");
    go_in_mobile.forEach((a) => {
      a.classList.remove("go_in");
    });
    document.body.style.overflow = "";
  }
};

const load_more_btn = document.querySelector(".load_more_btn");
load_more_btn.onclick = (e) => {
  e.target.innerHTML = ` <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
 </svg>
`;
  setTimeout(() => {
    loadMoreProduct();
    load_more_btn.remove();
  }, 2000);
};
const data = [
  {
    id: 1,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_1.webp",
    image2: "./images/img_TD/HD_TD_1_2.webp",
    price: 150,
  },
  {
    id: 2,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_2_1.webp",
    image2: "./images/img_TD/HD_TD_2_2.webp",
    price: 150,
  },
  {
    id: 3,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_3_1.webp",
    image2: "./images/img_TD/HD_TD_3_2.webp",
    price: 150,
  },
  {
    id: 4,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_4_1.webp",
    image2: "./images/img_TD/HD_TD_4_2.webp",
    price: 150,
  },
  {
    id: 5,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_5.webp",
    image2: "./images/img_TD/HD_TD_5_2.webp",
    price: 150,
  },
  {
    id: 6,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_6.webp",
    image2: "./images/img_TD/HD_TD_6_2.webp",
    price: 150,
  },
  {
    id: 7,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_7.webp",
    image2: "./images/img_TD/HD_TD_7_2.webp",
    price: 150,
  },
  {
    id: 8,
    name: "Square Textured Striped",
    iamge1: "./images/img_TD/HD_TD_8.webp",
    image2: "./images/img_TD/HD_TD_8_2.webp",
    price: 150,
  },
];
const top_trend_container = document.querySelector("#top_trend");
function loadMoreProduct() {
  data.forEach((d) => {
    let html = "";
    let top_trend_product = document.createElement("div");
    top_trend_product.classList.add(
      "top_trend_product",
      "invisible",
      "opacity-0",
      "animate-fadein"
    );
    html = `<div class="top_trend_img aspect-3/4 group relative overflow-hidden rounded-2xl">
        <a href="#">
            <img src=${d.iamge1}
                class="transition-all duration-300 ease-linear w-full h-full rounded-2xl group-hover:invisible group-hover:opacity-0" />
            <img src=${d.image2}
                class="top-0 left-0 group-hover:visible group-hover:opacity-100 group-hover:scale-110 invisible opacity-0  w-full h-full rounded-2xl absolute transition-all duration-300 ease-linear" />
        </a>
        <div
            class="trending_icon_list flex flex-col gap-2 absolute xl:top-6 bottom-4 right-4 md:right-6 xl:group-hover:translate-x-0 xl:group-hover:visible xl:group-hover:opacity-100 xl:translate-x-8 xl:invisible xl:opacity-0 transition-all duration-200 ease-linear">
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear md:w-4-5 md:h-4-5 w-3-5 h-3-5 flex items-center justify-center text-2xl bg-white rounded-100 heart"
                aria-label="icon">
                <i class="icon-heart_icon"></i>
                <span class="tooltip_heart">Add to Wishlist</span>
            </a>
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear md:w-4-5 md:h-4-5 w-3-5 h-3-5 flex items-center justify-center text-2xl bg-white rounded-100 cart"
                aria-label="icon">
                <i class="icon-compare"></i>
                <span class="tooltip_heart">Add to Compare</span>
            </a>
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear md:w-4-5 md:h-4-5 w-3-5 h-3-5 flex items-center justify-center text-2xl bg-white rounded-100 search"
                aria-label="icon">
                <i class="icon-search_icon"></i>
                <span class="tooltip_heart">Quick View</span>
            </a>
        </div>
        <a href="#" id="${d.id}"
            class=" hover:text-white add-cart hover:bg-black group-hover:translate-y-0 group-hover:visible group-hover:opacity-100  absolute text-center p-4 text-black text-2xl font-medium bg-white rounded-30 transition-all duration-200 ease-linear trending_btn bottom-8 invisible opacity-0 translate-y-8">ADD
            TO CART</a>
    </div>
    <div class="top_trend_text mt-6 flex gap-3 flex-col">
        <h3 class="text-black text-3xl font-normal">
        <a href="#">
           Square Textured Striped
        </a>
        </h3>
        <div class="star">
            <i class="icon-star"></i>
            <i class="icon-star"></i>
            <i class="icon-star"></i>
            <i class="icon-star"></i>
            <i class="icon-star"></i>
        </div>
        <p class="price text-2xl text-black font-medium">$150.00</p>
    </div>`;
    top_trend_product.innerHTML = html;
    top_trend_container.appendChild(top_trend_product);
  });
}

const next_btns = document.querySelectorAll(".next-btn");
const back_btns = document.querySelectorAll(".back-btn");

Array.from(next_btns).forEach((next_btn) => {
  next_btn.onclick = (e) => {
    let parentElement = next_btn && getParentElement(next_btn, "ymh_section");
    let trending_list_product =
      parentElement.querySelector(".like_section_list");
    if (trending_list_product) {
      let product = trending_list_product.querySelector(".top_trend_product");
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft += product.clientWidth;
    }
  };
});
Array.from(back_btns).forEach((back_btn) => {
  back_btn.onclick = (e) => {
    let parentElement = back_btn && getParentElement(back_btn, "ymh_section");
    let trending_list_product =
      parentElement.querySelector(".like_section_list");
    if (trending_list_product) {
      let product = trending_list_product.querySelector(".top_trend_product");
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft -= product.clientWidth;
      console.log(trending_list_product.scrollLeft);
    }
  };
});

function getParentElement(element, parentElementSelector) {
  let parentElement = element;
  while (!parentElement.classList.contains(parentElementSelector)) {
    parentElement = parentElement.parentElement;
  }
  return parentElement;
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
var product_auto = setInterval(() => {
  let randomProduct = data[getRandomInt(data.length)];
  let time_random = getRandomInt(10) + 1;
  if (auto_delete) {
    clearTimeout(auto_delete);
  }
  if (document.querySelector("#main_auto")) {
    document.querySelector("#main_auto").remove();
  }
  let main_auto = document.createElement("div");
  main_auto.id = "main_auto";
  let html = ` <div class="autobuy after:animate-diminish translate-y-full invisible opacity-0 after:w-full after:border-b-2 after:rounded-lg after:border-solid after:bottom-0 after:absolute after:-translate-x-4 after:border-black w-32 z-10 transition-all duration-500 ease-linear fixed bottom-20 left-12 hidden md:flex justify-start gap-5 p-4 pb-5 bg-white rounded-2xl">
  <div class="autobuy_image"> 
      <a href="#">
          <img src=${randomProduct.iamge1}  width="60" class="rounded-lg" height="80" alt="image"  />
      </a>
  </div>
  <div class="autobuy_text cursor-pointer flex gap-1 justify-center flex-col">
       <p class="text-12 text-black">Jonson(Amirica) <span class="text-12 text-gray ml-1">purchased</span></p>
       <p class="text-2xl text-black mb-3 ">Square Textured Striped</p>
       <p class="flex items-center gap-1 text-12 text-gray">
          <span class="text-12 text-black mr-4">${time_random} minutes ago</span>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 5.03906V5.49609C10.5 6.12109 10.3828 6.70703 10.1484 7.25391C9.91406 7.80078 9.58984 8.27734 9.17578 8.68359C8.76953 9.08984 8.29297 9.41016 7.74609 9.64453C7.19922 9.87891 6.61719 9.99609 6 9.99609C5.375 9.99609 4.78906 9.87891 4.24219 9.64453C3.69531 9.41016 3.21875 9.08594 2.8125 8.67188C2.40625 8.26562 2.08594 7.78906 1.85156 7.24219C1.61719 6.69531 1.5 6.11328 1.5 5.49609C1.5 4.87109 1.61719 4.28906 1.85156 3.75C2.08594 3.20313 2.41016 2.72266 2.82422 2.30859C3.23047 1.90234 3.70703 1.58203 4.25391 1.34766C4.80078 1.11328 5.38281 0.996094 6 0.996094C6.33594 0.996094 6.65625 1.03125 6.96094 1.10156C7.27344 1.17188 7.5625 1.26562 7.82812 1.38281C7.95312 1.44531 8.07812 1.45312 8.20312 1.40625C8.33594 1.35156 8.42969 1.26172 8.48438 1.13672C8.54688 1.01172 8.55078 0.886719 8.49609 0.761719C8.44922 0.628906 8.36328 0.535156 8.23828 0.480469C7.91016 0.324219 7.55469 0.207031 7.17188 0.128906C6.79688 0.0429687 6.40625 0 6 0C5.625 0 5.25781 0.0351562 4.89844 0.105469C4.53906 0.183594 4.19141 0.292969 3.85547 0.433594C3.52734 0.566406 3.21875 0.734375 2.92969 0.9375C2.63281 1.13281 2.35938 1.35547 2.10938 1.60547C1.85938 1.85547 1.63672 2.125 1.44141 2.41406C1.24609 2.71094 1.07812 3.02344 0.9375 3.35156C0.796875 3.67969 0.6875 4.02344 0.609375 4.38281C0.539062 4.74219 0.503906 5.11328 0.503906 5.49609C0.503906 5.87109 0.539062 6.23828 0.609375 6.59766C0.6875 6.95703 0.792969 7.30469 0.925781 7.64062C1.06641 7.96875 1.23828 8.27734 1.44141 8.56641C1.63672 8.86328 1.85938 9.13672 2.10938 9.38672C2.35938 9.63672 2.62891 9.85938 2.91797 10.0547C3.21484 10.2578 3.52734 10.4258 3.85547 10.5586C4.18359 10.6992 4.52734 10.8086 4.88672 10.8867C5.24609 10.957 5.61719 10.9922 6 10.9922C6.375 10.9922 6.74219 10.957 7.10156 10.8867C7.46094 10.8086 7.80469 10.6992 8.13281 10.5586C8.46875 10.4258 8.78125 10.2578 9.07031 10.0547C9.36719 9.85938 9.64062 9.63672 9.89062 9.38672C10.1406 9.13672 10.3633 8.86719 10.5586 8.57812C10.7539 8.28125 10.9219 7.96875 11.0625 7.64062C11.2031 7.3125 11.3125 6.96875 11.3906 6.60938C11.4609 6.25 11.4961 5.87891 11.4961 5.49609V5.03906C11.4961 4.89844 11.4453 4.78125 11.3438 4.6875C11.25 4.58594 11.1367 4.53516 11.0039 4.53516C10.8633 4.53516 10.7422 4.58594 10.6406 4.6875C10.5469 4.78125 10.5 4.89844 10.5 5.03906ZM10.6523 1.14844L6 5.80078L4.85156 4.65234C4.75781 4.55078 4.64062 4.5 4.5 4.5C4.35938 4.5 4.24219 4.55078 4.14844 4.65234C4.04688 4.74609 3.99609 4.86328 3.99609 5.00391C3.99609 5.14453 4.04688 5.26172 4.14844 5.35547L5.64844 6.85547C5.74219 6.95703 5.85938 7.00781 6 7.00781C6.14062 7.00781 6.25781 6.95703 6.35156 6.85547L11.3555 1.85156C11.4492 1.75781 11.4961 1.64062 11.4961 1.5C11.4961 1.35938 11.4492 1.24219 11.3555 1.14844C11.2539 1.04688 11.1328 0.996094 10.9922 0.996094C10.8594 0.996094 10.7461 1.04688 10.6523 1.14844Z"
                fill="#111111"></path>
            </svg>
            Verify
       </p>
  </div>
  <div class="close_autobuy cursor-pointer top-4 right-4 absolute">
      <i class="icon-close"></i>
  </div>
</div>
  `;
  main_auto.innerHTML = html;

  var auto_delete = setTimeout(() => {
    document.querySelector(".autobuy").classList.remove("show");
  }, 5000);

  document.querySelector("body").appendChild(main_auto);
  setTimeout(() => {
    document.querySelector(".autobuy").classList.add("show");
  }, 20);

  let close_autobuy = document.querySelector(".close_autobuy");
  close_autobuy.onclick = (e) => {
    document.querySelector(".autobuy").classList.remove("show");
    clearTimeout(auto_delete);
  };
}, 8000);

var check = true;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.clientHeight;
  const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
  const back_top = document.querySelector(".back-top");

  const scrollYValue = window.scrollY;
  if (scrollYValue > 100) {
    if (check) {
      back_top.classList.add("back-top_show");
      back_top.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      check = false;
    }
  } else {
    if (!check) {
      back_top.classList.remove("back-top_show");
      check = true;
    }
  }

  const percentage = ((scrollYValue / maxScrollHeight) * 100).toFixed(0);

  const test = document.querySelector(".bls_back-top");

  test.style.height = `${percentage}%`;

  let header_top_list = document.querySelector(".header_mid");
  header.classList.toggle("stickyy", this.window.scrollY > header.clientHeight);
  header_top_list.classList.toggle(
    "d-none",
    this.window.scrollY > header.clientHeight
  );
});
//
/* ======================================== 
    Cart
   ====================================== */

var cart_list = JSON.parse(localStorage.getItem("cart_list")) || [];

if (cart_list.length) {
  render_cart_product(cart_list);
  have_cart();
  increase_cart();
  decrease_cart();
  render_text_cart();
  render_subtotal();
} else {
  no_cart();
}
render_cart_length();

const bls_cart = document.querySelectorAll(".bls_cart");
bls_cart.forEach((i) => {
  i.onclick = function (e) {
    let element = document.getElementsByClassName(this.id);
    let bls_cart_layer = document.querySelector(".bls_cart_layer");
    element[0].classList.add("translate-y-0");
    bls_cart_layer.classList.add("show_up");
  };
});

const cancel_btn = document.querySelectorAll(".cancel_btn");
cancel_btn.forEach((i) => {
  i.onclick = function (e) {
    let parentElement = this.parentElement;
    let bls_cart_layer = document.querySelector(".bls_cart_layer");
    parentElement.classList.remove("translate-y-0");
    bls_cart_layer.classList.remove("show_up");
  };
});

const term = document.querySelector("#term");
term.onclick = function (e) {
  let checkout_btn = document.querySelector("#checkout");
  if (term.checked) {
    checkout_btn.removeAttribute("disabled");
    checkout_btn.classList.remove("opacity-80");
    checkout_btn.classList.add("hover:text-black", "hover:bg-white");
  } else {
    checkout_btn.setAttribute("disabled", true);
    checkout_btn.classList.add("opacity-80");
    checkout_btn.classList.remove("hover:text-black");
    checkout_btn.classList.remove("hover:bg-white");
  }
};

const close_cart_btn = document.querySelector(".close_cart_btn");
close_cart_btn.onclick = function () {
  cart_hide();
};
const cart_layer = document.querySelector(".cart-layer");
cart_layer.onclick = (e) => {
  if (e.target.classList.contains("cart-layer")) {
    cart_hide();
  }
};
const return_to_shop = document.querySelector(".return-to-shop");
return_to_shop.onclick = (e) => {
  cart_hide();
};
function cart_show_up() {
  let cart = document.querySelector(".cart_block");
  let cart_layer = document.querySelector(".cart-layer");
  cart.classList.remove("translate-x-full");
  cart_layer.classList.remove("after:invisible");
  cart_layer.classList.remove("after:opacity-0");
  document.body.style.overflow = "hidden";
}
function cart_hide() {
  let cart = document.querySelector(".cart_block");
  let cart_layer = document.querySelector(".cart-layer");
  cart.classList.add("translate-x-full");
  cart_layer.classList.add("after:invisible", "after:opacity-0");
  document.body.style.overflow = "";
}

function no_cart() {
  let cart_body_item = document.querySelector(".cart_body_item");
  let no_cart = document.querySelector(".no-cart");
  cart_body_item.classList.add("hidden");
  no_cart.classList.remove("hidden");
}

function have_cart() {
  let cart_body_item = document.querySelector(".cart_body_item");
  let no_cart = document.querySelector(".no-cart");
  no_cart.classList.add("hidden");
  cart_body_item.classList.remove("hidden");
}

function setLocalStorage(cart_list) {
  localStorage.setItem("cart_list", JSON.stringify(cart_list));
}

const cart_btn = document.querySelector("#cart_btn");
cart_btn.onclick = function () {
  cart_show_up();
};
function render_cart_product(cart_list) {
  let bls_items = document.querySelector(".bls-items");
  bls_items.innerHTML = "";
  cart_list.forEach((e) => {
    let div = document.createElement("div");
    div.className = "minicart-product flex gap-6 pb-8 mb-8 border-dashed border-b border-border-color";
    let html = `<img src="${e.iamge1}" width="87" height="116" alt="image" class="rounded-xl" />
      <div class="minicart-product-info flex flex-col justify-start relative flex-1">
          <a href="#" class="text-black text-3xl font-normal">${e.name}</a>
          <p class="text-text-color font-medium text-3xl mt-4">${e.price.toFixed(
            2
          )}$</p>
          <div class="quantity mt-4">
              <div
                  class="bg-floor_1-BM rounded-lg border border-solid border-border-color items-center inline-flex">
                  <button data-id="${
                    e.id
                  }" aria-label="Button" class="w-10 decrease flex items-center justify-center">
                      <svg width="11" height="12" viewBox="0 0 11 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 0.5L11 1.5L-4.37114e-08 1.5L0 0.5L11 0.5Z" fill="#111111">
                          </path>
                      </svg>
                  </button>
                  <input type="text" value="${e.quantity}"
                      class="text-2xl h-12 quantity w-12 text-center font-normal bg-floor_1-BM " aria-label="Quantity" />
                  <button data-id="${
                    e.id
                  }" aria-label="Button" class="w-10 increase flex items-center justify-center">
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5 11.5H6L6 6.5H11V5.5H6L6 0.5H5L5 5.5H0V6.5H5L5 11.5Z"
                              fill="#111111"></path>
                      </svg>
                  </button>

              </div>
          </div>
      </div>`;
    div.innerHTML = html;
    bls_items.appendChild(div);
  });
}

function render_cart_length() {
  let cart_count = document.querySelectorAll(".cart_count");
  cart_count.forEach(function (c) {
    c.innerHTML = cart_list.reduce((sum, e) => {
      return e.quantity + sum;
    }, 0);
  });
}

function increase_cart() {
  let increase = document.querySelectorAll(".increase");
  increase.forEach((item) => {
    item.onclick = function (e) {
      let parentElement = this.parentElement;
      let quantity = parentElement.querySelector(".quantity");
      let d = parseInt(quantity.value);
      d += 1;
      quantity.value = d;
      let product_cart = cart_list.find((e) => e.id == this.dataset.id);
      product_cart.quantity += 1;
      render_cart_length();
      setLocalStorage(cart_list);
      render_subtotal();
    };
  });
}
function decrease_cart() {
  let decrease = document.querySelectorAll(".decrease");
  decrease.forEach((item) => {
    item.onclick = function (e) {
      let parentElement = this.parentElement;
      let quantity = parentElement.querySelector(".quantity");
      let parentElement2 = getParentElement(this, "minicart-product");
      let d = parseInt(quantity.value);
      d -= 1;
      let product_cart = cart_list.find((e) => e.id == this.dataset.id);
      product_cart.quantity -= 1;
      if (d === 0) {
        parentElement2.remove();
        cart_list = cart_list.filter((e) => e.id != this.dataset.id);
      }
      quantity.value = d;
      render_cart_length();
      setLocalStorage(cart_list);
      render_subtotal();
      if (!cart_list.length) {
        no_cart();
        render_text_cart();
      }
    };
  });
}
function render_text_cart() {
  let text_cart = document.querySelector(".text-cart");
  let percent_shipping = document.querySelector(".percent-shipping");
  let car_icon = document.querySelector(".car_icon")
  if (cart_list.length) {
    text_cart.innerHTML = "Congratulations! You've got free shipping!";
    percent_shipping.classList.add("go");
    car_icon.classList.add("left-95")
  } else {
    text_cart.innerHTML = `Spend $100.00 more to enjoy <span
      class="uppercase text-2xl text-ship-color font-semibold">Free Shipping! </span>`;
    percent_shipping.classList.remove("go");
    car_icon.classList.add("remove-95")

  }
}
function render_subtotal() {
  let subtotal = document.querySelector("#subtotal");
  subtotal.innerHTML = cart_list
    .reduce((sum, e) => {
      return sum + e.price * e.quantity;
    }, 0)
    .toFixed(2) + "$";
}

const add_cart = document.querySelectorAll(".add-cart");
add_cart.forEach((cart) => {
  cart.onclick = function (e) {
    let product = data.find((e) => e.id == this.id);
    let product_cart = cart_list.find((e) => e.id === product.id);

    product_cart
      ? (product_cart.quantity += 1)
      : cart_list.push({ ...product, quantity: 1 });

    cart_show_up();
    render_cart_product(cart_list);
    render_cart_length();
    increase_cart();
    decrease_cart();
    have_cart();
    render_text_cart();
    setLocalStorage(cart_list);
    render_subtotal();
  };
});

//------------------------------------------------------------------------------------------------------------------------------------------------------

/* ======================================== 
   End  Cart
   ====================================== */
