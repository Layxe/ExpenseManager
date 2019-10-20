const fs = require('fs')

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

document.getElementById('date-picker').value = formatDate(new Date());         

let desc = document.getElementById('description')
let descButton = document.getElementById('descr-button')
let descArea = document.getElementById('descr-textarea')

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

// Funktionen für die Kategorien
// #####################################################################################################################

function refreshCategories() {

  let categories = loadCategories()
  let element    = document.getElementById('categories')

  element.innerHTML = ''

  categories.forEach(val => {
    element.innerHTML += `<option>${val}</option>`
  });

}

function saveCategory(name) {

  let categories = loadCategories()

  if (categories.indexOf(name) != -1) {
    alert('Category already exists!')
    return
  }

  categories.push(name)
  fs.writeFileSync('./data/category.json', JSON.stringify(categories))

  refreshCategories()

}

function deleteCategory(name) {

  let categories = loadCategories()

  if (categories.indexOf(name) == -1) {
    alert('Category does not exist!')
    return
  }

  categories.splice(categories.indexOf(name), 1)
  fs.writeFileSync('./data/category.json', JSON.stringify(categories))

  refreshCategories()

}

function loadCategories() {

  return JSON.parse(fs.readFileSync('./data/category.json'))

}

function showAddCategory() {

  document.getElementById('add-category').style.display = 'block'

}

function finishAddCategory() {

  let name = document.getElementById('category-input').value
  
  if (name == null || name.length == 0) {
    return
  }

  saveCategory(name)

  hideAddCategory()

}

function hideAddCategory() {

  document.getElementById('add-category').style.display = 'none'
  document.getElementById('category-input').value = ''

}

refreshCategories()