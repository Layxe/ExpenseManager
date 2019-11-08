// Funktionen um das Datum standardmäßig einzufügen
// #####################################################################################################################

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}

$(function() {
	$('#select').selectize({
    create: function(input, callback) {
      callback();
    }
  });
});

let datePicker = document.getElementById('date-picker')

let desc = document.getElementById('description')
let descButton = document.getElementById('descr-button')
let descArea = document.getElementById('descr-textarea')

let value = document.getElementById('value-input')
let selection = document.getElementById('selection')

function setDateToday() {
  datePicker.value = formatDate(new Date());
}

setDateToday()

// Funktionen für die Beschreibung
// #####################################################################################################################

/**
 * Setze die Einstellungen auf ihre default-values zurück
 */

function hide() {

  desc.style.height = '0px'
  desc.style.marginTop = '0px'
  descButton.style.opacity = '1'
  descButton.style.cursor = 'pointer'
  descArea.value = ''

}

/**
 * Ändere die Einstellung der Beschreibung und des
 * Beschreibungsknopfes
 */

function show() {


  desc.style.height = '230px'    // Ändere die Höhe der Beschreibungs-Box
  desc.style.marginTop = '-46px' // Ändere den oberen Abstand
  descButton.style.opacity = '0'      // Lasse den Knopf langsam verschwinden
  // Ändere den Cursor dazu, dass nichts passiert, wenn man drüber hovert
  descButton.style.cursor = 'default'
}

/**
 * Setzt die Eingabe Felder auf ihre Anfangswerte zurück.
 */
 function reset() {

   selection.selectedIndex = 0
   value.value = ""
   setDateToday()
   hide()
 }
