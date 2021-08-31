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
namesarray.push(student1);
}

    if(student2 !== ""){
        namesarray.push(student2);
        }
        if(student3 !== ""){
            namesarray.push(student3);
            }
            if(student4 !== ""){
                namesarray.push(student4);
                }
                if(student5 !== ""){
                    namesarray.push(student5);
                    }
                    if(student6 !== ""){
                        namesarray.push(student6);
                        }
                        if(student7 !== ""){
                            namesarray.push(student7);
                            }
                            if(student8 !== ""){
                                namesarray.push(student8);
                                }
                                if(student9 !== ""){
                                    namesarray.push(student9);
                                    }
                                    if(student10 !== ""){
                                        namesarray.push(student10);
                                        }
                                        if(student11 !== ""){
                                            namesarray.push(student11);
                                            }
                                            if(student12 !== ""){
                                                namesarray.push(student12);
                                                }
                                                if(student13 !== ""){
                                                    namesarray.push(student13);
                                                    }
                                                    if(student14 !== ""){
                                                        namesarray.push(student14);
                                                        }
                                                        if(student15 !== ""){
                                                            namesarray.push(student15);
                                                            }
                                                            if(student16 !== ""){
                                                                namesarray.push(student16);
                                                                }
                                                                if(student17 !== ""){
                                                                    namesarray.push(student17);
                                                                    }
                                                                    if(student18 !== ""){
                                                                        namesarray.push(student18);
                                                                        }
                                                                        if(student19 !== ""){
                                                                            namesarray.push(student19);
                                                                            }
                                                                            if(student20 !== ""){
                                                                                namesarray.push(student20);
                                                                                }

                                                                         
document.getElementById("answer1").innerHTML=namesarray.join("<br>");
document.getElementById("sort2").style.display="inline-block";
document.getElementById("submit").style.display="none";

};
function sortnames(){
 
namesarray.sort();
document.getElementById("answer2").innerHTML=namesarray.join("<br>");
document.getElementById("reset").style.display="inline-block";

};
function reset() {
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort2").style.display="none";
    document.getElementById("reset").style.display="none";
    namesarray = [];
}