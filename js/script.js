function luasBtn() {
    let SL1= document.getElementById("SL1").value;
    let SL2= document.getElementById("SL2").value;
    let HL = (parseInt(SL1) * parseInt(SL2));
    console.log (HL)
    document.getElementById("outluas").innerHTML=`
    L = s x s <br>
    L = ${HL}`
}

function rlBtn() {
    SL1.value=null
    SL2.value=null
    document.getElementById("outluas").innerHTML=null
    console.log ("Reset")
}

function kelBtn() {
    let SK= parseInt (document.getElementById("skel").value);
    Keliling = SK * 4
    console.log (Keliling)
    document.getElementById("outkeliling").innerHTML=`
    K = s x 4<br>
    K = ${Keliling}`
}

function rkBtn() {
    skel.value=null
    document.getElementById("outkeliling").innerHTML=null
    console.log ("Reseted")
}