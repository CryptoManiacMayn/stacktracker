document.addEventListener("DOMContentLoaded", function() {
    // Slide in when the page loads
    document.body.classList.add("sidebar-visible");
    document.getElementById("main").style.marginLeft = "350px";
  
    // Slide out when leaving the page
    window.addEventListener("beforeunload", function() {
      document.body.classList.remove("sidebar-visible");
      document.getElementById("main").style.marginLeft = "0PX";
    });
  });
  