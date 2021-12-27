// HOME PAGE RESPONISVE SALE BAR SLIDES
if ($("#res_saleBar_slides")) {
  $("#res_saleBar_slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    nextArrow: "#next",
    prevArrow: "#prev",
  });
}
// HOME PAGE COLLECTION CAROUSEL
if ($("#home_collections")) {
  function Slick_Unslick() {
    if (
      window.innerWidth <= 475 &&
      $("#home_collections").hasClass("slick-initialized")
    ) {
      $("#home_collections").slick("unslick");
    } else if (
      window.innerWidth > 475 &&
      !$("#home_collections").hasClass("slick-initialized")
    ) {
      $("#home_collections").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
      });
    }
  }
  Slick_Unslick();
  window.addEventListener("resize", Slick_Unslick);
}
// HOME PAGE PRODUCTS LIST ONE
if ($("#home_products_one")) {
  $("#home_products_one").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true,
    autoplay: true,
  });
}
// HOME PAGE PRODUCTS LIST TWO
if ($("#home_products_two")) {
  $("#home_products_two").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true,
    autoplay: true,
  });
}
// HOME PAGE TESTIMONIALS

  // function Testimonial_Position() {
  //   const centered_testimonial = document.querySelector(
  //     "#home_testimonials .review_box_wrapper.slick-center"
  //   );
  //   document
  //     .querySelectorAll("#home_testimonials .review_box_wrapper .review_box")
  //     .forEach((element) => {
  //       element.style.left = "unset";
  //       element.style.right = "unset";

  //       let _height = parseInt(getComputedStyle(element).height);
  //       let new_height;
  //       if (window.innerWidth <= 767 && window.innerWidth > 375) {
  //         new_height = _height + _height / 1.9;
  //       } else if (window.innerWidth <= 375) {
  //         new_height = _height + _height / 3.9;
  //       } else {
  //         new_height = _height + _height / 1.5;
  //       }

  //       element.parentElement.style.height = `${new_height}px`;
  //     });
  //   if (centered_testimonial && centered_testimonial.previousSibling) {
  //     let prev_testimonial =
  //       centered_testimonial.previousSibling.querySelector(".review_box");
  //     prev_testimonial.style.left = "96px";
  //   }
  //   if (centered_testimonial && centered_testimonial.nextSibling) {
  //     let next_testimonial =
  //       centered_testimonial.nextSibling.querySelector(".review_box");
  //     next_testimonial.style.right = "96px";
  //   }
  // }
  // Testimonial_Position();
  // const testimonials = document.querySelectorAll(
  //   "#home_testimonials .review_box_wrapper"
  // );
  // testimonials.forEach((testimonial) => {
  //   testimonial.addEventListener("click", () => {
  //     Testimonial_Position();
  //   });
  //   testimonial.addEventListener("mouseover", () => {
  //     Testimonial_Position();
  //   });
  //   testimonial.addEventListener("mouseout", () => {
  //     Testimonial_Position();
  //   });
  // });
  // window.addEventListener("resize", Testimonial_Position());
  if ($("#home_testimonials")) {
    $("#home_testimonials").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:'#testimonial_next',
      prevArrow: "#testimonial_prev",
      
      dots: false,
      autoplay: true,
      responsive:[
        {
          breakpoint:1600,
          settings:{
            variableWidth:true,
          }
        },
        {
          breakpoint:767,
          settings:{
            arrows:false,
            variableWidth:true,
          }
        },
        {
          breakpoint:575,
          settings:{
            variableWidth:false,
            arrows:false
          }
        }
      ]
    });
  }
// HOME PAGE PRODUCTS LIST TWO
if ($("#home_products_three")) {
  $("#home_products_three").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false,
    autoplay: true,
  });
}
// PRODUCT PAGE TABS
function Tabs(parent, tabs_count) {
  const links = document.querySelectorAll(`#${parent} .tabs a`);
  const data_boxes = document.querySelectorAll(`#${parent} .tabs_data .box`);
  for (let index = 1; index <= tabs_count; index++) {
    let tab = document.querySelector(`#${parent} .tab_${index}`);
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach((element) => {
        if (element.className.includes("active")) {
          element.classList.remove("active");
        }
      });
      data_boxes.forEach((element) => {
        if (element.className.includes("active")) {
          element.classList.remove("active");
        }
      });
      if (!e.target.className.includes("active")) {
        e.target.classList.add("active");
        let target_box = document.querySelector(
          `#${parent} .${e.target.getAttribute("target-data")}`
        );

        if (!target_box.className.includes("active")) {
          target_box.classList.add("active");
        }
      }
    });
  }
}
if (document.querySelector("#productPage_tabs")) {
  Tabs("productPage_tabs", 3);
}
// PRODUCT PAGE PRODUCT GALLERY
$("#img_for_slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: "#img_gallery_nav",
});
$("#img_gallery_nav").slick({
  variableWidth: true,
  slidesToScroll: 1,
  asNavFor: "#img_for_slide",
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  focusOnSelect: true,
});
// PRODUCT PAGE CAROUSEL ONE
if ($("#productPage_products_one")) {
  $("#productPage_products_one").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "#productPage_products_one_prev",
    nextArrow: "#productPage_products_one_next",
    dots: false,
    autoplay: true,
  });
}
// PRODUCT PAGE CAROUSEL TWO
if ($("#productPage_products_two")) {
  $("#productPage_products_two").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "#productPage_products_two_prev",
    nextArrow: "#productPage_products_two_next",
    dots: false,
    autoplay: true,
  });
}
// PRODUCT PAGE CAROUSEL THREE
if ($("#productPage_products_three")) {
  $("#productPage_products_three").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "#productPage_products_three_prev",
    nextArrow: "#productPage_products_three_next",
    dots: false,
    autoplay: true,
  });
}
// MODELS
function Models(TargetBtn, closeBtn, BoxToShow) {
  const TargetedBtn = document.querySelector(TargetBtn);
  const ToCloseBtn = document.querySelector(closeBtn);
  const BoxToShowing = document.querySelector(BoxToShow);
  const body = document.querySelector("body");
  TargetedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    BoxToShowing.style.display = "flex";
    body.style.overflowY = "hidden";
  });
  ToCloseBtn.addEventListener("click", () => {
    BoxToShowing.style.display = "none";
    body.style.overflowY = "auto";
  });
}
// REVIEW FORM MODEL
if (document.querySelector(".review_model")) {
  Models("#reviewForm_btn", "#reviewForm_close_btn", ".review_model");
}
// CART MODEL
if (document.querySelector(".shopping_cartSide")) {
  Models("#cart_btn", "#cart_close_btn", ".shopping_cartSide");
}
// SIGN IN FORM MODEL
if(document.querySelector(".signIn_form")){
  Models("#signIn_btn", "#signIn_close_btn", ".signIn_form");
}
// SIGN UP FORM MODEL
if(document.querySelector(".signUp_form")){
  Models("#signUp_btn", "#signUp_close_btn", ".signUp_form");
}

// DRAG AND DROP
if (document.querySelector(".dragArea")) {
  const dragArea = document.querySelector(".dragArea");
  const dragArea_head = document.querySelector(".dragArea h4");
  const dragArea_btn = document.querySelector(".dragArea button");
  const dragArea_inp = document.querySelector(".dragArea input");
  let file;

  dragArea_btn.onclick = () => {
    dragArea_inp.click();
  };
  dragArea_inp.addEventListener("change", function () {
    file = this.files[0];
    Show_File();
  });
  dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("active");
    dragArea_head.textContent = "release to upload file";
  });
  dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    dragArea_head.textContent = "Drag and drop here to upload";
  });
  dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    Show_File();
  });
  function Show_File() {
    let file_type = file.type;
    let validExtensions = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "video/mp4",
      "video/mov",
      "video/wmv",
      "video/flv",
      "video/avi",
    ];
    if (validExtensions.includes(file_type)) {
      let file_reader = new FileReader();
      file_reader.onload = () => {
        let fileUrl = file_reader.result;
        let Tag;
        if (file_type.includes("image")) {
          Tag = `<img src=${fileUrl}>`;
          console.log("image");
        } else if (file_type.includes("video")) {
          Tag = `<video src=${fileUrl}></video>`;
          console.log("video");
        }
        dragArea.innerHTML = Tag;
      };
      file_reader.readAsDataURL(file);
    } else {
      alert("!!! File shoud be image or video ");
      dragArea.classList.remove("active");
      dragArea_head.textContent = "Drag and drop here to upload";
    }
  }
}
// HIDE AND SHOW PASSWORD
function Toggle_Password(clicked_id){
  let inp = document.getElementById(clicked_id).previousElementSibling;
  let attr = inp.getAttribute('type');
  if(attr == 'password'){
    inp.setAttribute("type","text");
  }
  else{
    inp.setAttribute("type","password");
  }
};

// FOOTER RESPONSIVE SEARCH BAR
const res_search = document.querySelector("#res_search");
if (res_search) {
  const res_searchBar = document.querySelector(".res_searchBar");
  res_search.addEventListener("click", () => {
    if ((res_searchBar.style.left = "102%")) {
      res_searchBar.style.left = "0%";
    }
  });
  const close_search = document.querySelector("#close_search");
  close_search.addEventListener("click", () => {
    if ((res_searchBar.style.left = "0%")) {
      res_searchBar.style.left = "102%";
    }
  });
}
