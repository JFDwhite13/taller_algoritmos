
function Calcular_prom(){
    
    
    let Parc1 = document.getElementById('test1');
    let Parc2 = document.getElementById('test2');
    let Parc3 = document.getElementById('test3');

    let Par1 = parseInt(Parc1.value)
    let Par2 = parseInt(Parc2.value)
    let Par3 = parseInt(Parc3.value)

    let PromParcial = (Par1 + Par2 + Par3)/3;
    let FinalExme = document.getElementById("exmfinal");
    let FinalWorke = document.getElementById("pruebafinal");
    let FinalExm = parseInt(FinalExme.value)
    let FinalWork = parseInt(FinalWorke.value)


    let FNote = PromParcial*0.55 + FinalExm*0.3 + FinalWork*0.15;
    let x = document.getElementById("parrafo");
    x.innerHTML = FNote

}