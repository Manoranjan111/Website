function skillsFunction() {
    // const element = document.getElementById("3rd-li");
    // element.add();
    // console.log("Skilled Function Clicked");
    document.getElementById("1st-li").innerHTML = "HTML CSS & JavaScript, PHP, React";
    document.getElementById("2nd-li").innerHTML = "Python, Java, C++";
    document.getElementById("3rd-li").innerHTML = "DBMS,SQL,Oracle,MongoDB";
}
function expFunction() {
    // const element = document.getElementById("3rd-li");
    // element.remove();
    // console.log("exp Function Clicked");
    document.getElementById("1st-li").innerHTML = "Employed as a Web Developer Intern at <b>Alea IT Solution</b> during the period of January 2022 to February 2022.";
    document.getElementById("2nd-li").innerHTML = "Developed a Hotel Management System utilizing the Django framework, showcasing effective management of hotel operations and guest services.";
    document.getElementById("3rd-li").innerHTML = "";
}
function eduFunction() {
    // console.log("edu Function Clicked");
    document.getElementById("1st-li").innerHTML = "12th in Bihar School Examination Board Patna (2016-19)";
    document.getElementById("2nd-li").innerHTML = "Bachelor's Degree in University of Technology Jaipur (2019-22)";
    document.getElementById("3rd-li").innerHTML = "Master's Degree in Kalinga Institute of Industrial Technology (2022-24) <b>Prusuing<b/>";
}

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to target section when clicking a link with a hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});




