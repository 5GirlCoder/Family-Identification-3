function setup()
{
    canvas = createCanvas(300, 300);
    canvas.position(195, 340);

    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tcdaqPNH4/model.json', modelLoaded);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("ObjectResult").innerHTML = results[0].label;
        document.getElementById("AccuracyResult").innerHTML = results[0].confidence.toFixed(2);
    }
}