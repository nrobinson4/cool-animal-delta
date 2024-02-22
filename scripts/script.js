$(document).ready(function () {
    console.log("document is ready!");

    var userName;
// fixed up the unwanted name outputs
    $("#btnName").click(function () {
      userName = $("#userName").val();
      $("#nameOutput").append("Greetings one they call " + userName + "!" + "<br/>");
      $("#btnSecretAlien").show();
      $("#btnAnimal").show();
    });

    $("#btnSecretAlien").click(function () {
      var strings = ["WingZorp!", "Skweemz!", "BeebeeDii!", "Kersplunky!"];
      var randomIndex = Math.floor(Math.random() * strings.length);
      var selectedString = strings[randomIndex];
      $("#nameOutput").append(selectedString);
      $("#alienImage").show();
    });

    $("#btnAnimal").click(function () {
      var aniStrings = ["Lion", "Tiger", "Bear", "Conflibbian", "ShwingBorg"];
      var selectedString;
      var userNameLength = userName.length;

      if (userNameLength < 4) {
        selectedString = aniStrings[0]; // Lion
      } else if (userNameLength >= 4 && userNameLength < 6) {
        selectedString = aniStrings[1]; // Tiger
      } else if (userNameLength >= 6 && userNameLength < 10) {
        selectedString = aniStrings[2]; // Bear
      } else if (userNameLength >= 10 && userNameLength < 12) {
        selectedString = aniStrings[3]; // Conflibbian
      } else {
        selectedString = aniStrings[4]; // ShwingBorg
      }

      $("#nameOutput").append("You are a " + selectedString + ".\n");
    });

    $("#btnClear").click(function () {
      clearElement("#nameOutput", "html");
      clearElement("#userName", "input");
      clearElement("#stringOutput", "text");

      $("#btnSecretAlien").hide();
      $("#btnAnimal").hide();
      $("#alienImage").hide();
    });

    function clearElement(elementId, elementType) {
      if (elementType == "html") {
        $(elementId).html("");
      } else if (elementType == "input") {
        $(elementId).val(" ");
      } else if (elementType == "text") {
        $(elementId).text("");
      }
    }
});
