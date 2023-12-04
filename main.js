
function setup(){
    canvas=createCanvas(280,280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
}
function draw(){
strokeWeight(13)
stroke(0)
if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY)
}
}
function limpar(){
    background("white")
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet")
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        nome = results[0].label
        confianca = Math.round(results[0].confidence * 100) + "%"  
        document.getElementById("nome").innerHTML = "Nome: " + nome
        document.getElementById("z").innerHTML = "Precisão: " + confianca
    }
}