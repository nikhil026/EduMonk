var course=[
    "Bachelor of Arts","Bachelor of Science","Bachelor of Commerce","Bachelor of Engg./Tech","Bachelor of Business Admisnistration",
    "Bachelor of Computer Application","Bachelor of Law",
    "Bachelor of Medicine","IIM 5-year Integrated Mgmt. Programme"];
var addCourse=function(element) {
    for (var i = 0; i<9 ; i++) {
        element.options[element.options.length] = new Option(course[i], course[i]);
    }
};