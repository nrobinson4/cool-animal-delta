$(function () {
  console.log("document is ready!");

  var userName,
    nameLength,
    nameMsg,
    nameReverse = "";

  $("#btnName").click(function () {
    userName = $("#userName").val();
    // console.log(userName);
    // console.log($('#userName').val().length);
    // console.log(getStringLength(userName));
    //$("#nameOutput").append(
      //"Greetings one they call " + userName + "!" + "<br/>"
    //)
    ;

    //nameLength = getStringLength(userName);
   // nameMsg = "The Length of your name is: ";
    //$("#nameOutput").append(nameMsg + nameLength + "<br/>");

    // console.log(reverseString(userName));

    nameReverse = reverseString(userName);
    //nameMsg = "Your Name reversed letters is: ";
    //$("#nameOutput").append(nameMsg + nameReverse + "<br/>");

    console.log(thirdLetter(userName));

    stringArrayPosition(userName);

    $("#btnSecretAlien").show();
    $("#btnAnimal").show();
  });
  $("#btnSecretAlien").click(function () {
    var strings = ["WingZorp!", "Skweemz!", "BeebeeDii!", "Kersplunky!"];
    var randomIndex = Math.floor(Math.random() * strings.length);
    var selectedString = strings[randomIndex];
    $("#stringOutput").text(selectedString);

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

  function getStringLength(stringVal) {
    var stringLength = stringVal.length;
    return stringLength;
  }

  function reverseString(stringVal) {
    var revString = stringVal.split("").reverse().join("");
    return revString;
  }

  function thirdLetter(stringVal) {
    return thirdString;
    var thirdString = stringVal[2];
  }

  function clearElement(elementId, elementType) {
    if (elementType == "html") {
      $(elementId).html("");
    } else if (elementType == "input") {
      $(elementId).val(" ");
    } else if (elementType == "text") {
      $(elementId).text("");
    }
  }

  function stringArrayPosition(stringVal) {
    for (i = 0; i < stringVal.length; i++) {
      console.log(i + " " + stringVal[i]);
    }
  }
});
