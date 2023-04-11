var images = ["https://img.freepik.com/premium-vector/little-asian-boy-showing-thumbs-up-gesture-happy-cute-kid-smiling-toddler-preteen-child-cartoon-character_71593-840.jpg?w=2000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dWko7_an7Kgtn6HEFtKmlPv37MRD72KL6A&usqp=CAU","https://img.freepik.com/premium-vector/business-man-cartoon-character-smart-clothes-office-style_51635-5680.jpg?w=2000"];
var text = ["João Jr.","Miranda","João"];
var i = 0;
var j;
function next(){
    if(i>=3){
        i=0;
    }
    document.getElementById("image").src = images[i];
    document.getElementById("text").innerHTML = text[i];
    i++;
}