//https://teachablemachine.withgoogle.com/models/O57moi-Rl/
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O57moi-Rl/', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_R = Math.floor(Math.random() * 255) + 1;
        random_number_G = Math.floor(Math.random() * 255) + 1;
        random_number_B = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I Can Hear-" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy-" + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (results[0].label == "Barking") {
            img1.src="Dog 1";
        }
        else if (results[0].label == "Mooing") {
            img1.src="Cow 1";
        }
        else if (results[0].label == "Meowing") {
            img1.src = "Cat 1";
        }
        else if (results[0].label == "Roaring") {
            img1.src = "Lion 1";
        }
        else {
            img1.src = "Dog 1";
        }
    }
}


