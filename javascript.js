function logg() {
            var väder, grader, kläder
            
            väder = prompt("Vad är det för väder? Regnigt/soligt");
            grader = prompt("Hur många grader är det?");
            
            if (väder == "Regnigt" || väder == "regnigt") {
                if (grader < 10) {
                    kläder = "Ta på dig en regnjacka!";
                } else if (grader < 15) {
                    kläder = "Ta på dig en regnjacka och en T-shirt!";
                } else if (grader < 20) {
                    kläder = "Dra på dig en T-shirt! Skit i regnet!";
                } else {
                    alert("Dra ut naken.");
                }
            } else if (väder == "Soligt" || väder == "soligt") {
                if (grader < 5) {
                    kläder = "DET ÄR JU SVIN KALLT! TA PÅ DIG ALLT DU ÄGER!!!";
                } else if (grader < 10) {
                    kläder = "Ta på dig en skön sommar jacka";
                } else if (grader < 15) {
                    kläder = "Dra på dig din finaste T-shirt!!";
                } else if (grader < 20) {
                    kläder = "ZOMG SÅ VARMT! DRA AV TRÖJAN";
                } else {
                    alert("Dra ut naken.");
                }
            } else {
                kläder = ("Är det inget väder alls?");
            }
            alert(kläder);
}