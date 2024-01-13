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

// const footer_icon = document.querySelectorAll(".open-children-toogle");

// footer_icon.forEach((i) => {
//   i.onclick = function () {
//     let parentElement = i.parentElement.parentElement;
//     let footer_list = parentElement.querySelector(".footer_list");
// window.getComputedStyle để lấy giá trị của thuộc tính từ kiểu đã tính
//  (computed style) thay vì từ thuộc tính trực tiếp được thiết lập trong
//  style attribute.
// Ví dụ: ở trên nếu sử dụng  footer_list.style.maxHeight thì sẽ ra là = "" nên cần sử dụng  window.getComputedStyle để nó lấy luôn giá trị đã tính
//     let computedStyle = window.getComputedStyle(footer_list);

//     footer_list.style.maxHeight =
//       computedStyle.maxHeight === "0px" ? footer_list.scrollHeight + "px" : "0";
//     footer_list.classList.toggle("footer-list-padding");
//     this.classList.toggle("open");
//   };
// });

// var check = true;
// window.addEventListener("scroll", () => {
//   const windowHeight = document.documentElement.clientHeight;
//   const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
//   const back_top = document.querySelector(".back-top");

//   const scrollYValue = window.scrollY;
//   if (scrollYValue > 100) {
//     if (check) {
//       back_top.classList.add("back-top_show");
//       back_top.onclick = function () {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       };
//       check = false;
//     }
//   } else {
//     if (!check) {
//       back_top.classList.remove("back-top_show");
//       check = true;
//     }
//   }

//   const percentage = ((scrollYValue / maxScrollHeight) * 100).toFixed(0);

//   const test = document.querySelector(".bls_back-top");

//   test.style.height = `${percentage}%`;

//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", this.window.scrollY > header.clientHeight);
//   // header_top_list.clientHeight
//   let header_top = document.querySelector(".header_top");
//   let header_mid = document.querySelector(".header_mid");
//   if (header_top) {
//     header_top.classList.toggle(
//       "d-none",
//       this.window.scrollY > header.clientHeight
//     );
//   }
//   header_mid.classList.toggle(
//     "d-none",
//     this.window.scrollY > header.clientHeight
//   );
// });

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
  }, 3000);
};
const data = [
  {
    iamge1: "./images/img_TD/HD_TD_1.webp",
    image2: "./images/img_TD/HD_TD_1_2.webp",
  },
  {
    iamge1: "./images/img_TD/HD_TD_2_1.webp",
    image2: "./images/img_TD/HD_TD_2_2.webp",
  },
  {
    iamge1: "./images/img_TD/HD_TD_3_1.webp",
    image2: "./images/img_TD/HD_TD_3_2.webp",
  },
  {
    iamge1: "./images/img_TD/HD_TD_4_1.webp",
    image2: "./images/img_TD/HD_TD_4_2.webp",
  }
];
const top_trend_container = document.querySelector("#top_trend");
function loadMoreProduct() {
 
    data.forEach(d => {
      console.log(d)
    })
  data.forEach((d) => {
       let html = "";
    let top_trend_product = document.createElement("div");
    top_trend_product.classList.add("top_trend_product","invisible","opacity-0","animate-fadein");
    html = `<div class="top_trend_img aspect-3/4 group relative overflow-hidden rounded-2xl">
        <a href="#">
            <img src=${d.iamge1}
                class="transition-all duration-300 ease-linear w-full h-full rounded-2xl group-hover:invisible group-hover:opacity-0" />
            <img src=${d.image2}
                class="top-0 left-0 group-hover:visible group-hover:opacity-100 group-hover:scale-110 invisible opacity-0  w-full h-full rounded-2xl absolute transition-all duration-300 ease-linear" />
        </a>
        <div class="absolute top-6 left-6 flex flex-col gap-2">
            <div>
                <span
                    class="py-1 w-20 px-5 bg-main-color flex items-center justify-center font-normal text-13 text-white rounded-30">-10%</span>
            </div>
            <div>
                <span
                    class="px-5 py-1 font-normal text-13 flex items-center justify-center bg-dicount_color  text-white rounded-30">Pre-Order</span>
            </div>
        </div>
        <div
            class="trending_icon_list flex flex-col gap-2 absolute top-6 right-6 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100 translate-x-8 invisible opacity-0 transition-all duration-200 ease-linear">
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear w-4-5 h-4-5 flex items-center justify-center text-2xl bg-white rounded-100 heart"
                aria-label="icon">
                <i class="icon-heart_icon"></i>
                <span class="tooltip_heart">Add to Wishlist</span>
            </a>
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear w-4-5 h-4-5 flex items-center justify-center text-2xl bg-white rounded-100 cart"
                aria-label="icon">
                <i class="icon-compare"></i>
                <span class="tooltip_heart">Add to Compare</span>
            </a>
            <a href="#"
                class="trending_icon hover:bg-black relative transition-all duration-200 ease-linear w-4-5 h-4-5 flex items-center justify-center text-2xl bg-white rounded-100 search"
                aria-label="icon">
                <i class="icon-search_icon"></i>
                <span class="tooltip_heart">Quick View</span>
            </a>
        </div>
        <a href="#"
            class=" hover:text-white hover:bg-black group-hover:translate-y-0 group-hover:visible group-hover:opacity-100  absolute text-center p-4 text-black text-2xl font-medium bg-white rounded-30 transition-all duration-200 ease-linear trending_btn bottom-8 invisible opacity-0 translate-y-8">ADD
            TO CART</a>
    </div>
    <div class="top_trend_text mt-6 flex gap-3 flex-col">
        <h3 class="text-black text-3xl font-normal">Square Textured Striped</h3>
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
    let parentElement = next_btn.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".like_section_list"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".top_trend_product"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft += product.clientWidth;
    }
  };
});
Array.from(back_btns).forEach((back_btn) => {
  back_btn.onclick = (e) => {
    let parentElement = back_btn.parentElement;
    let trending_list_product = parentElement.querySelector(
      ".like_section_list"
    );
    if (trending_list_product) {
      let product = trending_list_product.querySelector(
        ".top_trend_product"
      );
      trending_list_product.style.scrollBehavior = "smooth";
      trending_list_product.scrollLeft -= product.clientWidth;
      console.log(trending_list_product.scrollLeft);
    }
  };
});