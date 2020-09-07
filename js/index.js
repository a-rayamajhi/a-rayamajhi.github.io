(function () {
  // Leverage Design Pattern for Toogle feature
  var courseToggler = {
    config: {
      courses: document.getElementsByClassName("bu-course"),
      dash: document.getElementById("dash-content"),
    },
    init: function () {
      var courses = this.config.courses;
      for (let i = 0; i < courses.length; i++) {
        courses[i].addEventListener("click", function () {
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
