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
                } else if (grader > 19) {
                    kläder = "Ta på dig badbrallorna o stick till stranden! Vem bryr sig om det regnar?"
                } else {
                    kläder = "Äre 0 grader?"
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
                } else if (grader > 19) {
                    kläder = "DRA O BADA!!"
                } else {
                    kläder = "Äre 0 grader?";
                }
            } else {
                kläder = ("Är det inget väder alls?");
            }
            alert(kläder);
}
function funktion() {

            var userName = "Vezel";
            var userPass = "password";
            var userAge = "16";
            var userReg;
            
            userReg = prompt("Do you want to register? Yes/No");
            if (userReg == "Yes" || userReg == "yes") {
                userName = prompt("Enter a username: ");
                userPass = prompt("Enter a password: ");
                userAge = prompt("Enter your age: ");
                
                alert("Please login!");
                var tempName = prompt("Username: ");
                var tempPass = prompt("Password: ");
                if (tempName === userName && tempPass === userPass) {
                    alert("Welcome back " + userName + "!");
                }else {
                    alert("Wrong username or password.");
                }
                
            }else if (userReg == "No" || userReg == "no") {
                alert("Please login!");
                var tempName = prompt("Username: ");
                var tempPass = prompt("Password: ");
                if (tempName === userName && tempPass === userPass) {
                    alert("Welcome back " + userName + "!");
                }else {
                    alert("Wrong username or password.");
                }
            
            }else {
                alert("Write Yes or No.");
            }
}