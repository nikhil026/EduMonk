var boardUnivArray=[
   " Aligarh Muslim University","Board of Higher Secondary Education Delhi (BHSE)","Andhra Pradesh Board of Secondary Education","Gwalior Board of Education","Shivam Board of Secondary Education","Andhra Pradesh Open School Society","Assam Board of Secondary Education" ,"Assam Higher Secondary Education Council","Assam State Open School","Bihar Board of Open Schooling & Examinations","Bihar School Examination Board","Uttar Pradesh Board of High School and Intermediate Education Allahabad","Madhya Pradesh Board of Secondary Education (Madhya Bharat Gwalior)","Madhya Pradesh Board of Secondary Education","Madhya Pradesh State Open School","Rajasthan Board of Secondary Education","Rajasthan State Open School","Chhattisgarh Board of Education","Central Board of Education (Ajmer & New Delhi)","Central Board of Secondary Education (CBSE)","Council for the Indian School Certificate Examinations (CISCE)","Goa Board of Secondary & Higher Secondary Education","Gujarat Secondary Education Board","Gujarat State Open School","Haryana Board of School Education","Haryana State Open School","Himachal Pradesh Board of School Education","Himachal Pradesh State Open School","Jharkhand Academic Council","Jammu and Kashmir State Board of School Education","Jammu and Kashmir State Open School","Karnataka Secondary Education Examination Board","Karnataka State Open School","Kerala Higher Secondary Examination Board","Kerala State Open School","Maharashtra State Board of Secondary and Higher Secondary Education","Meghalaya Board of School Education","Mizoram Board of School Education","Nagaland Board of School Education","National Institute of Open Schooling","Orissa Board of Secondary Education","Orissa Council of Higher Secondary Education","Punjab School Education Board","Tamil Nadu Board of Secondary Education","Tripura Board of Secondary Education","Telangana Board of Intermediate Education","Telangana Board of Secondary Education","Uttarakhand Board of School Education","West Bengal Board of Madrasah Education","West Bengal Board of Primary Education","West Bengal Board of Secondary Education","West Bengal Council of Higher Secondary Education","West Bengal Council of Rabindra Open Schooling","West Bengal State Council of Vocational Education and Training"
];



var addOptionBoardUniv=function(element){
    for(var i=0;i<54;i++) {
        element.options[element.options.length]=new Option(boardUnivArray[i],boardUnivArray[i]);
    }

};




