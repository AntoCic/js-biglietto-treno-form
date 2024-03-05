// Scrivere un programma che chieda all’utente:
//
//  - Il numero di chilometri da percorrere
//  - Età del passeggero
//  - Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//      - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//      - va applicato uno sconto del 20% per i minorenni
//      - va applicato uno sconto del 40% per gli over 65.

const nCarrozze = 10;

const bt_submitE = document.getElementById("bt_submit");
const bt_resetE = document.getElementById("bt_reset");

bt_submitE.addEventListener("click", function () {
  const name_surnameE = document.getElementById("name_surname");
  const KmE = document.getElementById("km");
  const ageE = document.getElementById("age");
  const info_formE = document.getElementById("info_form");

  const tiket_tbodyE = document.getElementById("tiket_tbody");

  if (name_surnameE.value && KmE.value && ageE.value) {
    tiket_tbodyE.firstChild.remove();
    info_formE.textContent = "";
    const name_surname = name_surnameE.value;
    const km = parseInt(KmE.value);
    const age = ageE.value;
    // calcola prezzo base
    let prezzo = km * 0.21;
    // testo che viene aggiunto nel caso in cui viene applicato uno sconto
    let offerta = "";
    if (age === "minorenne") {
      const sconto = 20;
      // calcolo lo sconto tovando direttamente 80% del prezzo e arrotondo i decimali
      prezzo = ((prezzo * (100 - sconto)) / 100).toFixed(2);
      offerta = "Biglietto Minorenne -" + sconto + "% ";
    } else if (age === "over_65") {
      const sconto = 40;
      prezzo = ((prezzo * (100 - sconto)) / 100).toFixed(2);
      offerta = "Biglietto Over65 -" + sconto + "% ";
      100;
    } else {
      prezzo = prezzo.toFixed(2);
      offerta = "Biglietto Standard";
    }

    const carrozza = Math.round(Math.random() * nCarrozze) + 1;
    const codiceCP = String(Math.round(Math.random() * 10000)).padStart(4, "0");

    const tr = document.createElement("tr");

    const th_name_surname = document.createElement("th");
    th_name_surname.textContent = name_surname;

    const td_offerta = document.createElement("td");
    td_offerta.textContent = offerta;

    const td_carrozza = document.createElement("td");
    td_carrozza.textContent = carrozza;

    const td_codiceCP = document.createElement("td");
    td_codiceCP.textContent = codiceCP;

    const td_prezzo = document.createElement("td");
    td_prezzo.textContent = "€"+prezzo;

    tr.appendChild(th_name_surname);
    tr.appendChild(td_offerta);
    tr.appendChild(td_carrozza);
    tr.appendChild(td_codiceCP);
    tr.appendChild(td_prezzo);
    tiket_tbodyE.appendChild(tr);
  } else {
    info_formE.textContent = "Devi compilare tutti i campi";
  }
});

bt_resetE.addEventListener("click", function () {
  name_surnameE.value = "";
  KmE.value = "";
  ageE.value = "";
});
