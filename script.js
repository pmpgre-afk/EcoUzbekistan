function hisobla(masofa, nameId, dateId, peopleId, transportId, resultId){

  let name = document.getElementById(nameId).value;
  let sana = document.getElementById(dateId).value;
  let odam = document.getElementById(peopleId).value;
  let transport = document.getElementById(transportId);

  let transportText = transport.options[transport.selectedIndex].text;
  let narx = masofa * transport.value * odam;

  if(name=="" || sana=="" || odam=="" || odam<=0){
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  let resultBox = document.getElementById(resultId);

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h4>✅ Bron tasdiqlandi</h4>
    <p>Ism: ${name}</p>
    <p>Sana: ${sana}</p>
    <p>Odam: ${odam}</p>
    <p>Transport: ${transportText}</p>
    <p>💰 Narx: ${narx} so'm</p>
  `;
}