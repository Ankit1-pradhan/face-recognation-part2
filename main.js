

Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:95
});
    
camera = document.getElementById('camera');

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap(
        function (data_uri){

            document.getElementById('photo').innerHTML="<img id='capture_image' src="+data_uri+">";
        }
    );
}

console.log("ml5 version: ",ml5.version);

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xju9jEd44/model.json", model_loaded);

    function model_loaded(){

        console.log("model_loaded_successfully");
    }

    function identify_image(){
        img = document.getElementById('capture_image');

        classifier.classify(img, identify_img);
    }

    function identify_img(error, results){

        if (error) {
            console.error(error);
        }
        else {
            console.log(results);
            document.getElementById('object_name').innerHTML=results[0].label;
           document.getElementById('object_accuracy').innerHTML=results[0].confidence.toFixed(3);
        }
    }