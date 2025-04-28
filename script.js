function hasabNatiga() {
    let magmo3 = 0;

    // جمع درجات الإجابات
    for (let i = 1; i <= 11; i++) {
        let igaba = document.querySelector(`input[name="s${i}"]:checked`);
        if (igaba) {
            magmo3 = magmo3 + parseInt(igaba.value);
        } else {
            alert("جاوب على كل الأسئلة الأول!");
            return;
        }
    }

    // تحديد الوجهة
    let natiga = "";
    if (magmo3 <= 15) {
        natiga = "أفضل مكان ليك هو شرم الشيخ! هتحب البحر والهدوء هناك.";
    } else if (magmo3 <= 25) {
        natiga = "أفضل مكان ليك هو الأقصر وأسوان! هتعجبك الآثار والتاريخ.";
    } else {
        natiga = "أفضل مكان ليك هو سيوة! هتحب المغامرة في الصحراء.";
    }

    // عرض الوجهة
    document.getElementById("natiga").innerHTML = natiga;
}