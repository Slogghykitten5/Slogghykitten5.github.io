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

            clearcontent('tbody');
            
            let table = document.getElementById('tbody');

            for(i = 1; i <= numOfLoops; i++){

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');

            table.appendChild(tr).appendChild(td1).innerHTML += i;
            table.appendChild(tr).appendChild(td2).innerHTML += ogPD.toFixed(2);
            
            realPD += ogPD;
            console.log(realPD)
            
            let newCR = ogPD*CRR;
            realCR += newCR;
            console.log(realCR);

            newSD = +(ogPD - newCR);
            realSD += newSD
            console.log(realSD);
            
            ogPD = newSD
            table.appendChild(tr).appendChild(td3).innerHTML += newCR.toFixed(2);
            table.appendChild(tr).appendChild(td4).innerHTML += newSD.toFixed(2);

            if(realPD.toFixed(2) == theoPD.toFixed(2)){
                console.log(i);
                break;
            } 

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

            add_ans_tr('Theoretical Answer', theoPD, theoCR, theoSD, 4);
            add_ans_tr('Real Answer', realPD, realCR, realSD, 4);
            add_ans_tr('Difference', diffPD, diffCR, diffSD, 4);

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

            function add_ans_tr(round, pd, cr, sd, num_of_td){
                let table = document.getElementById('tbody');
                let tr = document.createElement('tr');
                tr.className = 'ans_tr';

                let input = [round, pd, cr, sd]

                for(i = 1; i<= num_of_td; i++){
                    let td = document.createElement('td');
                    td.className = 'ans_td'
                    table.appendChild(tr).appendChild(td).innerHTML += input[i-1];
                }

            }

            function clearcontent(elementID) {
                document.getElementById(elementID).innerHTML = "";
            }

            //find_CM(20000,10,10)