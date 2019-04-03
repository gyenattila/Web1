function swapCSS(cssFilePath) {
  
  var oldLink = document.getElementsByTagName("link").item(1);

  var newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("type", "text/css");
  newLink.setAttribute("href", cssFilePath);

  document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}