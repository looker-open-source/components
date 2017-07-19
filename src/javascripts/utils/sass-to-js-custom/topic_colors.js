var topicColors = function(elementId, $elementId, guideClass) {

  var colorDataEl = document.getElementById(elementId);
  var colorData = sassToJs(colorDataEl);
  var colorString = JSON.parse(window.getComputedStyle (
                    document.querySelector($elementId), ':before'
                  ).getPropertyValue('content'));
  var colorJSON = JSON.parse(colorString);

  for (var colorClass in colorJSON) {
    var colorObj = colorJSON[colorClass];

      // Create LI and add class name to it
      var li = document.createElement("li");
      li.className = 'guide-color-item col-100-sm col-50-lg col-33-xl';

      for (var subProp in colorObj) {
        var colorHexValue = colorObj[subProp];

        // Create span to hold color
        var colorSpan = document.createElement('span');
        colorSpan.className = 'topic-bg-' + colorClass + '-' + subProp;

        // Create code element to hold var function and hex
        var nameSpan = document.createElement('span');

        // Create em to hold hex value
        var hexSpan = document.createElement('em');

        // Create var function for nameSpan
        var colorName = document.createTextNode(colorClass + '-' + subProp);
        var hexValue = document.createTextNode(colorHexValue);
        nameSpan.appendChild(colorName);
        hexSpan.appendChild(hexValue);

        // Append everything into the LI
        colorSpan.appendChild(nameSpan);
        colorSpan.appendChild(hexSpan);
        li.appendChild(colorSpan);

        // Append LI's into the color UL
        document.querySelector(guideClass).appendChild(li);
    }
  }
};

module.exports = topicColors;
