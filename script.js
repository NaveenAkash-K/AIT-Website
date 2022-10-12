function func(){
    var x = document.getElementById("abt");
    var y = document.getElementById("btn").innerHTML="Collapse";
    if(x.innerHTML==""){
    x.innerHTML="Symposium'22 is a state level virtual symposium hosted by AIT club of Sri Venkateswara College of Engineering, Chennai. The symposium points in creating enterprising abilities while investigating their specialized abilities and improving their reasonable information and thinking of imaginative and remarkable arrangements.";
    }

    else {
        x.innerHTML="";
        var y = document.getElementById("btn").innerHTML="LEarn more";
    }
}
