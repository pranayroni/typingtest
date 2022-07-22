const { text } = require("stream/consumers");

function startTest() {
    console.log("startTest");

    let test = document.getElementById("testcontent");
    var content = "The quick brown fox jumps over the lazy dog.";
    var reds = "<FONT color=#FF0000>"
    var green = "<FONT color=#00FF00>"
    var end = "</FONT>"
    test.innerHTML = content;

    var user = "";
    var correct = "";
    var length = content.length;
    console.log("Content Length: " + content.length);
    var complete = false;

    window.addEventListener('keydown', function (e) {

        console.log("User length: " + correct.length);
        if (complete && e.key == "Enter") this.location.reload();
        if (e.key.length != 1) {
        }
        else if (e.key == content.substring(0, 1)) {
            user += green + e.key + end;
            correct += e.key;
            content = content.substring(1);
            test.innerHTML = user + content;

        } else {
            // user += reds + content.substring(0, 1) + end;
            // content = content.substring(1);
            test.innerHTML = user + reds + content.substring(0, 1) + end + content.substring(1);
        }

        if (correct.length == length) {
            test.innerHTML = "Test Complete";
            complete = true;
        }


        // if (e.key == "Backspace") {
        //     var text = test.innerHTML;
        //     text = text.substring(0, text.length - 28);
        //     test.innerHTML = text;
        // } else if (e.key == "Enter") {
        //     var text = test.innerHTML;
        //     text = text + "<br>";
        //     test.innerHTML = text;
        // } else if (e.key.length != 1) {

        // } else {
        //     test.innerHTML += reds + e.key + rede;
        // }



    }, false);


    // let test = document.getElementById("testcontent");
    // var reds = "<FONT color=#FF0000>"
    // var rede = "</FONT>"
    // test.innerHTML = reds + "Test" + rede;
}

