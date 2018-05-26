function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastrow = sheet.getLastRow();
  var rangeName = sheet.getSheetValues(2, 3, lastrow-1, 1);
  Logger.log(rangeName);
}

function doGet() { 
  return HtmlService.createTemplateFromFile("index").evaluate(); 
}
