function populateWordCountPerDoc() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getActiveRange();
  /*
  if you want to manually input the range just comment out the above line
  and use the one below while filling in what you need, you could also do
  something like ('A1:B' + sheet.getLastRow()); if you wanted it to start
  at a certain point and go to the end of the docs
  */
  // var data = sheet.getRange('A1:B8');

  const vls = data.getValues();
  data.setValues(vls.map(countWords));
}

function countWords(documentURLAsArrayObject) {
  const documentURL = documentURLAsArrayObject[0].toString();

  if (documentURL.slice(0, 4) != "http") {
    return [documentURLAsArrayObject[0], ''];
  } else {
    const reg = new RegExp("[\\'\\w-]");
    const text = DocumentApp.openByUrl(documentURL)
      .getBody()
      .getText();

    var wordInProg = false;
    var count = 0;

    const textLength = text.length
    for (var i = 0; i < textLength; i++) {
      if (reg.test(text.charAt(i))) {
        if (!wordInProg) {
          wordInProg = true;
          count++;
        }
      } else if (wordInProg) {
        wordInProg = false;
      }
    }
    return [documentURLAsArrayObject[0], count];
  }
}
