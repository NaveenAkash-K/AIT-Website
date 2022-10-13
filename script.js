function func(){
    var x = document.getElementById("sym");
    var y = document.getElementById("btn").innerHTML="show less";
    if(x.innerHTML==""){
    x.innerHTML="Symposium'22 is a state level symposium hosted by AIT club of Sri Venkateswara College of Engineering, Chennai. The symposium points in creating enterprising abilities while investigating their specialized abilities and improving their reasonable information and thinking of imaginative and remarkable arrangements.";
    }

    else {
        x.innerHTML="";
        var y = document.getElementById("btn").innerHTML="LEarn more";
    }
}

function boutfunc(){
    var x = document.getElementById("abt");
    var y = document.getElementById("abtbtn").innerHTML="show less";
    if(x.innerHTML==""){
    x.innerHTML="AIT stands for Association of Information Technologists which is meant for students and faculties only belongs to IT department. This club focuses on developing the standards IT students and as well as the department.  ";
    }

    else {
        x.innerHTML="";
        var y = document.getElementById("abtbtn").innerHTML="click here";
    }
}