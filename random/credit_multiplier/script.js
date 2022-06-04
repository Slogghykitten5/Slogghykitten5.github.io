console.log("Type find_CM(Primary Deposit, CRR, Number of rounds) to find the credit multiplier directly from the console.");

        function find_CM(primaryDeposit = +prompt('What is the primary deposit?', '10000'),
        CRR = +prompt('What is the CRR', '10'),
        numOfLoops = +prompt('How many times should we loop?', '100')) {

            if (primaryDeposit == undefined || CRR == undefined || numOfLoops == undefined) {
                alert('You exited... ');
                return
            }

            if (isNaN(primaryDeposit)) {
                alert('Put a number for Primary Deposit ');
                find_CM()
                return
            } else if(isNaN(CRR)){
                alert('Put a number for CRR ');
                find_CM()
                return
            } else if(isNaN(numOfLoops)){
                alert('Put a number for Number of Loops ');
                find_CM()
                return
            }

            if (primaryDeposit < 0) {
                primaryDeposit *= -1;
                alert(`You put a negetive number for Primary Deposit so I'll continue with it's positive counterpart... ${primaryDeposit}`)
            } else if(CRR < 0){
                CRR *= -1;
                alert(`You put a negetive number for CRR so I'll continue with it's positive counterpart... ${CRR}`)
            } else if(numOfLoops < 0){
                numOfLoops *= -1;
                alert(`You put a negetive number for Number of Loops so I'll continue with it's positive counterpart... ${numOfLoops}`)
            }

            let realPD = 0;
            let realCR = 0;
            let realSD = 0;

            CRR = CRR / 100; //converting CRR to decimal form from pecentage

            theoAns(primaryDeposit, CRR);

            let ogPD = primaryDeposit;

            for(i = 1; i <= numOfLoops; i++){
            
            realPD += round(ogPD, 2);
            console.log(realPD)
            
            let newCR = ogPD*CRR;
            realCR += newCR;
            realCR = round(realCR, 2);
            console.log(realCR);

            newSD = +(ogPD - newCR);
            realSD += newSD
            realSD = round(realSD, 2);
            console.log(realSD);
            
            ogPD = round(newSD, 2)

            }

            realPD = +realPD.toFixed(2)
            realCR = +realCR.toFixed(2);
            realSD = +realSD.toFixed(2);
            
            diffPD = +theoPD - realPD;
            diffCR = +theoCR - realCR;
            diffSD = +theoSD - realSD;

            diffPD = +diffPD.toFixed(2);
            diffCR = +diffCR.toFixed(2);
            diffSD = +diffSD.toFixed(2);

            console.log(`
Given Information ---->
Primary Deposit = ${primaryDeposit}
CRR = ${CRR*100}%
Number of Loops = ${numOfLoops}

Theoretical Answer ---->
Total Credit Creation = ${theoPD}
Total Cash Reserve = ${theoCR}
Total Secondary Deposit = ${theoSD}

Answer Found ---->
Total Credit Creation = ${realPD}
Total Cash Reserve = ${realCR}
Total Secondary Deposit = ${realSD}

Difference --->
Total Credit Creation = ${theoPD} - ${realPD} = ${diffPD}
Total Cash Reserve = ${theoCR} - ${realCR} = ${diffCR}
Total Secondary Deposit = ${theoSD} - ${realSD} = ${diffSD}`);

            alert(`
Given Information --->
Primary Deposit = Rs.${primaryDeposit}
CRR = ${CRR * 100}%
Number of Loops = ${numOfLoops}

Theoretical Answer --->
Total Credit Creation = Rs.${theoPD}
Total Cash Reserve = Rs.${theoCR}
Total Secondary Deposit = Rs.${theoSD}

Answer Found --->
Total Credit Creation = Rs.${realPD}
Total Cash Reserve = Rs.${realCR}
Total Secondary Deposit = Rs.${realSD}

Difference --->
Total Credit Creation = ${theoPD} - ${realPD} = Rs.${diffPD}
Total Cash Reserve = ${theoCR} - ${realCR} = Rs.${diffCR}
Total Secondary Deposit = ${theoSD} - ${realSD} = Rs.${diffSD}`)


            let another = confirm('Find Another credit multiplier?');

            if(another) find_CM();
        };

            function theoAns(primaryDeposit,CRR){
            theoPD = (1/CRR * primaryDeposit);
            theoCR = theoPD * CRR;
            theoSD = theoPD - theoCR;
            };

            function round(number, decimalPlaces){
                const factorOfTen = Math.pow(10, decimalPlaces)
                return Math.round(number * factorOfTen) / factorOfTen
            }

            find_CM(20000,10,100)