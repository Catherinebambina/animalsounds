function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sy17zVDka/',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://c8.alamy.com/comp/2A8PF45/cute-cartoon-dog-with-blanket-kawaii-shiba-inu-puppy-in-warm-cozy-blanket-isolated-vector-clip-art-illustration-2A8PF45.jpg";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://c8.alamy.com/comp/2EJ464Y/cute-cartoon-cat-with-blanket-kawaii-white-kitten-in-cozy-pink-blanket-isolated-vector-clip-art-illustration-2EJ464Y.jpg";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://i.pinimg.com/originals/a5/f4/6c/a5f46c2cd33b21f439a4d2eac3bb7269.jpg";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://cdn.shopify.com/s/files/1/0448/4028/8405/products/Untitled_Artwork303_1024x1024@2x.jpg?v=1611020636";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://c.tenor.com/zw6xPc2NxcQAAAAM/confusedanime.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}
    
