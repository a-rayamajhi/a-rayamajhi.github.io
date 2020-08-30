(function () {
  //   if ($(window).width() > 992) {
  //     $(window).scroll(function () {
  //       if ($(this).scrollTop() > 40) {
  //         $("#navbar_top").addClass("fixed-top");
  //         // add padding top to show content behind navbar
  //         $("body").css("padding-top", $(".navbar").outerHeight() + "px");
  //       } else {
  //         $("#navbar_top").removeClass("fixed-top");
  //         // remove padding top from body
  //         $("body").css("padding-top", "0");
  //       }
  //     });
  //   }

  var courseToggler = {
    config: {
      courses: document.getElementsByClassName("bu-course"),
      dash: document.getElementById("dash-content"),
    },
    init: function () {
      var courses = this.config.courses;
      for (let i = 0; i < courses.length; i++) {
        courses[i].addEventListener("click", function () {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
          }

          courseToggler.resetActiveCourse();
          courseToggler.activateCourse(this.id);
        });
      }
    },
    resetActiveCourse: function () {
      var courses = this.config.courses;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].classList.contains("active")) {
          courses[i].classList.remove("active");
        }
      }
    },
    activateCourse: function (id) {
      var activateCourse = document.getElementById(id),
        dash = this.config.dash,
        courseContent = activateCourse.getElementsByClassName(
          "course-content"
        )[0];

      activateCourse.classList.add("active");
      dash.innerHTML = courseContent.innerHTML;
    },
  };

  courseToggler.init();
})();
