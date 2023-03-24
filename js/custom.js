const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

   tabContents.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   tabBtn.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");
   btnTarget.classList.add("tab__btn--active"); 
}
   // inclusion and exclusion
   $(document).ready(function () {
   $(".inclusion_tab").click(function (){
      $(".inclusion").show();
      $(".exclusion").hide();
      $(".inclusion_tab").addClass("active_ex");
      $(".exclusion_tab").removeClass("active_ex");
  });
  $(".exclusion_tab").click(function () {
   $(".exclusion").show();
      $(".inclusion").hide();
      $(".exclusion_tab").addClass("active_ex");
      $(".inclusion_tab").removeClass("active_ex");
  });
});
