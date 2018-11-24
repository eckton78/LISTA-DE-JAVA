function getAttributes(){
    document.getElementById("lbl1").innerHTML = document.getElementsByTagName("a")[0].getAttribute("hreflang");
    document.getElementById("lbl2").innerHTML = document.getElementsByTagName("a")[0].getAttribute("rel");
    document.getElementById("lbl3").innerHTML = document.getElementsByTagName("a")[0].getAttribute("target");
    document.getElementById("lbl4").innerHTML = document.getElementsByTagName("a")[0].getAttribute("href");
}