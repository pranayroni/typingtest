const { text } = require("stream/consumers");

function startTest() {
    console.log("startTest");

    let test = document.getElementById("testcontent");



    var list = ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", "I can't understand why people are frightened of new ideas. I'm frightened of the old ones", "The tragedy of life is not so much what men suffer, but rather what they miss.", "Anyone who has never made a mistake has never tried anything new.", "It's better to hang out with people better than you.", "The question is not who is going to let me, it's who is going to stop me.", "The dumbest people I know are those who know it all.", "If what you're doing is not your passion, you have nothing to lose.", "The person who says something is impossible should not interrupt the person who is doing it."];

    // choose random string from list
    var content = list[Math.floor(Math.random() * list.length)];

    // var content = "Tt";
    // 9 words.
    // find words in content

    var words = 0;
    for (var i = 0; i < content.length; i++) {
        if (content[i] == ' ') {
            words++;
        }
    }
    words++;
    console.log("Words: " + words);
    var reds = "<FONT color=#FF0000>"
    var green = "<FONT color=#00FF00>"
    var end = "</FONT>"
    test.innerHTML = content;

    var user = "";
    var correct = "";
    var length = content.length;
    console.log("Content Length: " + content.length);
    var complete = false;
    var started = false;
    var startTime = 0;
    var endTime = 0;
    window.addEventListener('keydown', function (e) {
        if (complete && e.key != "Enter") {
            return;
        }
        else if (complete && e.key == "Enter") {
            this.location.reload();
            return;
        }
        if (started == false && e.key.length == 1) {
            started = true;
            console.log("Started");
            startTime = new Date().getTime();
            console.log("Start Time: " + startTime);

        }
        // console.log("User length: " + correct.length);
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
            complete = true;
            endTime = new Date().getTime();

            console.log("Start Time: " + startTime);
            console.log("End Time: " + endTime);
            time = (endTime - startTime) / 1000;
            test.innerHTML = "Test Complete<br>Test Time: " + time + " seconds" + "<br>WPM: " + (words / time * 60).toFixed(2);
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

function reload() {
    this.location.reload();
}