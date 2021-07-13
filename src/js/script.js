window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("id-navbar").style.backgroundColor = "#795389";
    } else {
        document.getElementById("id-navbar").style.backgroundColor = "#795389";
    }
}

function calculate() {
    var name = in_name.value;
    var employ = Number(in_employ.value);
    var payment = Number(in_payment.value);
    var meters = Number(in_meters.value);
    var pack = Number(se_pack.value);
    var absenteeism = Number(in_absenteeism.value);
    var absenteeism_percent =  (absenteeism / 100)/((employ*175) / 100)  * 100;
    var pack_percent = pack / 100;
    var eco = (employ * payment) * (pack_percent / absenteeism_percent);
    var price_meters = (meters * 400) * (pack_percent / absenteeism_percent);

    div_javascript.style.display = 'block';
    result_name.innerHTML = `${name}`;
    result_eco.innerHTML = `${eco}`;
    result_price.innerHTML = `${price_meters}`;
    result_porcent.innerHTML = `${pack}`;
    result_absent.innerHTML = `${absenteeism_percent.toFixed(1)}`;
}