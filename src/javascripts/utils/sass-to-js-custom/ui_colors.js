var uiColors = function(elementId, $elementId, guideClass) {

  var colorDataEl = document.getElementById(elementId);
  var colorData = sassToJs(colorDataEl);
  var colorString = JSON.parse(window.getComputedStyle (
                    document.querySelector($elementId), ':before'
                  ).getPropertyValue('content'));
  var colorJSON = JSON.parse(colorString);

  for (var colorClass in colorJSON) {
    var colorObj = colorJSON[colorClass];
    var colorHexValue = colorObj;

    // Create LI and add class name to it
    var li = document.createElement("li");
    li.className = 'guide-color-item col-100-sm col-33-lg col-20-xl';

    // Create span to hold color
    var colorSpan = document.createElement('span');
    colorSpan.className = 'bg-' + colorClass;

    // Create code element to hold var function and hex
    var nameSpan = document.createElement('span');

    // Create em to hold hex value
    var hexSpan = document.createElement('em');

    // Create var function for nameSpan
    var colorName = document.createTextNode(colorClass);
    var hexValue = document.createTextNode(colorObj);
    nameSpan.appendChild(colorName);
    hexSpan.appendChild(hexValue);

    // Append everything into the LI
    colorSpan.appendChild(nameSpan);
    colorSpan.appendChild(hexSpan);
    li.appendChild(colorSpan);

    // Append LI's into the color UL
    document.querySelector(guideClass).appendChild(li);
  }
};

module.exports = uiColors;
