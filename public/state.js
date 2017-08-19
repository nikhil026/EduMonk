var state=[
    "Andaman and Nicobar Islands", "Andhra Pradesh (AP) ","Arunachal Pradesh (AR) ","Assam (AS)","Bihar (BR)","Chandigarh","Chhattisgarh (CG)","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa (GA)","Gujarat (GJ)","Haryana (HR)","Himachal Pradesh (HP)","Jammu and Kashmir (JK)","Jharkhand (JH)","Karnataka (KA)","Kerala (KL)","Lakshadweep","Madhya Pradesh (MP)","Maharashtra (MH)","Manipur (MN)","Meghalaya (ML)","Mizoram (MZ)","Nagaland (NL)","Odisha(OR)","Punjab (PB)","Puducherry","Rajasthan (RJ)","Sikkim (SK)","Tamil Nadu (TN)","Telangana (TS)","Tripura (TR)","Uttar Pradesh (UP)","Uttarakhand (UK)","West Bengal (WB)"
];




var addState=function(element) {
    for (var i = 0; i< 29; i++) {
        element.options[element.options.length] = new Option(state[i], state[i]);
    }
};