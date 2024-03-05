// Scrivere un programma che chieda all’utente:
//
//  - Il numero di chilometri da percorrere
//  - Età del passeggero
//  - Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//      - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//      - va applicato uno sconto del 20% per i minorenni
//      - va applicato uno sconto del 40% per gli over 65.

const name_surnameE = document.getElementById("name_surname");
const KmE = document.getElementById("km");
const ageE = document.getElementById("age");
const info_formE = document.getElementById("info_form");
const bt_submitE = document.getElementById("bt_submit");
const bt_resetE = document.getElementById("bt_reset");
const tiket_containerE = document.getElementById("tiket_container");


bt_submitE.addEventListener("click", function () {
  if (name_surnameE.value && KmE.value && ageE.value) {
    info_formE.textContent="";

    const km = parseInt(KmE.value);
    const age = ageE.value;
    // calcola prezzo base
    let prezzo = km * 0.21;
    // testo che viene aggiunto nel caso in cui viene applicato uno sconto
    let textSconto = "";
    if (age === "minorenne") {
      const sconto = 20;
      // calcolo lo sconto tovando direttamente 80% del prezzo e arrotondo i decimali
      prezzo = ((prezzo * (100 - sconto)) / 100).toFixed(2);
      textSconto = "scontato del " + sconto + "% ";
    } else if (age === "over_65") {
      const sconto = 40;
      prezzo = ((prezzo * (100 - sconto)) / 100).toFixed(2);
      textSconto = "scontato del " + sconto + "% ";
      100;
    }
    // se la fascia di etá sta nel mezzo il prezzo non cambia
    const tiketMsg = "Il prezzo del biglietto " + textSconto + "é di €" + prezzo;
    const tiketMsgE = document.createElement("p");
    tiketMsgE.textContent=tiketMsg;
    tiket_containerE.appendChild(tiketMsgE);

  }else{
    info_formE.textContent="Devi compilare tutti i campi";
  }
});

bt_resetE.addEventListener("click", function () {
  name_surnameE.value = "";
  KmE.value = "";
  ageE.value = "";
});
