function buttonChange(n) {

  if(n == 1){
    var x = document.getElementById("aboutme");
    document.getElementById("projects").style.display="none";
    document.getElementById("work").style.display="none";
    document.getElementById("contactinformation").style.display="none";
    if(x.style.display == "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }

  if(n == 2){
    var x = document.getElementById("projects");
    document.getElementById("aboutme").style.display="none";
    document.getElementById("work").style.display="none";
    document.getElementById("contactinformation").style.display="none";
    if(x.style.display == "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }

  if(n == 3){
    var x = document.getElementById("work");
    document.getElementById("aboutme").style.display="none";
    document.getElementById("projects").style.display="none";
    document.getElementById("contactinformation").style.display="none";
    if(x.style.display == "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }

  if(n == 4){
    var x = document.getElementById("contactinformation");
    document.getElementById("aboutme").style.display="none";
    document.getElementById("projects").style.display="none";
    document.getElementById("work").style.display="none";
    if(x.style.display == "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }
}
