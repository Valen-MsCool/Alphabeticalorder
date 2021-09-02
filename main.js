var namesarray=[];
function submitdata(){
var student1=document.getElementById("name1").value;
var student2=document.getElementById("name2").value;
var student3=document.getElementById("name3").value;
var student4=document.getElementById("name4").value;
var student5=document.getElementById("name5").value;
var student6=document.getElementById("name6").value;
var student7=document.getElementById("name7").value;
var student8=document.getElementById("name8").value;
var student9=document.getElementById("name9").value;
var student10=document.getElementById("name10").value;
var student11=document.getElementById("name11").value;
var student12=document.getElementById("name12").value;
var student13=document.getElementById("name13").value;
var student14=document.getElementById("name14").value;
var student15=document.getElementById("name15").value;
var student16=document.getElementById("name16").value;
var student17=document.getElementById("name17").value;
var student18=document.getElementById("name18").value;
var student19=document.getElementById("name19").value;
var student20=document.getElementById("name20").value;

if(student1 !== ""){
namesarray.push(student1.toLowerCase());
}

    if(student2 !== ""){
        namesarray.push(student2.toLowerCase());
        }
        if(student3 !== ""){
            namesarray.push(student3.toLowerCase());
            }
            if(student4 !== ""){
                namesarray.push(student4.toLowerCase());
                }
                if(student5 !== ""){
                    namesarray.push(student5.toLowerCase());
                    }
                    if(student6 !== ""){
                        namesarray.push(student6.toLowerCase());
                        }
                        if(student7 !== ""){
                            namesarray.push(student7.toLowerCase());
                            }
                            if(student8 !== ""){
                                namesarray.push(student8.toLowerCase());
                                }
                                if(student9 !== ""){
                                    namesarray.push(student9.toLowerCase());
                                    }
                                    if(student10 !== ""){
                                        namesarray.push(student10.toLowerCase());
                                        }
                                        if(student11 !== ""){
                                            namesarray.push(student11.toLowerCase());
                                            }
                                            if(student12 !== ""){
                                                namesarray.push(student12.toLowerCase());
                                                }
                                                if(student13 !== ""){
                                                    namesarray.push(student13.toLowerCase());
                                                    }
                                                    if(student14 !== ""){
                                                        namesarray.push(student14.toLowerCase());
                                                        }
                                                        if(student15 !== ""){
                                                            namesarray.push(student15.toLowerCase());
                                                            }
                                                            if(student16 !== ""){
                                                                namesarray.push(student16.toLowerCase());
                                                                }
                                                                if(student17 !== ""){
                                                                    namesarray.push(student17.toLowerCase());
                                                                    }
                                                                    if(student18 !== ""){
                                                                        namesarray.push(student18.toLowerCase());
                                                                        }
                                                                        if(student19 !== ""){
                                                                            namesarray.push(student19.toLowerCase());
                                                                            }
                                                                            if(student20 !== ""){
                                                                                namesarray.push(student20.toLowerCase());
                                                                                }

                                                                         
document.getElementById("answer1").innerHTML=namesarray.join("<br>");
document.getElementById("sort2").style.display="inline-block";
document.getElementById("submit").style.display="none";

};
function sortnames(){
 
namesarray.sort();
document.getElementById("answer2").innerHTML=namesarray.join("<br>");
document.getElementById("reset").style.display="inline-block";
document.getElementById("delete").style.display="inline-block";
document.getElementById("sort2").style.display="none";
};
function reset() {
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort2").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("delete").style.display="none";
    namesarray = [];
}
function deletestuff() {
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort2").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("delete").style.display="none";
    namesarray = [];
    document.getElementById("answer1").innerHTML="";
    document.getElementById("answer2").innerHTML="";
    for (i=1; i < 21; i++){
document.getElementById("name"+i).value="";

        
    }
}