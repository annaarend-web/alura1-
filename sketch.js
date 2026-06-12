let container;

function setup() {
    container = document.getElementById('p5-container');
    let w = min(container.offsetWidth, 800);
    let h = w * 1.2;
    let canvas = createCanvas(w, h);
    canvas.parent('p5-container');
}

function draw() {
    background(245, 240, 225); // Cor de fundo similar ao quadro original
    
    // Desenha a figura da Mona Lisa
    drawMonaLisa();
}

function drawMonaLisa() {
    // Cabeça e rosto
    drawHead();
    
    // Cabelo
    drawHair();
    
    // Olhos com rastreamento do mouse
    drawEyes();
    
    // Nariz
    drawNose();
    
    // Boca (sorriso enigmático)
    drawMouth();
    
    // Corpo e roupas
    drawBody();
}

function drawHead() {
    // Tez (usar cores quentes e naturais)
    fill(220, 185, 150); // Tom de pele renascentista
    stroke(180, 140, 100);
    strokeWeight(2);
    
    // Cabeça oval
    ellipse(width / 2, height / 3, 120, 140);
    
    // Pescoço
    fill(215, 180, 145);
    rect(width / 2 - 20, height / 3 + 65, 40, 50);
}

function drawHair() {
    // Cabelo castanho-avermelhado (cores originais)
    fill(139, 90, 50);
    stroke(100, 60, 30);
    strokeWeight(2);
    
    // Cabelo traseiro
    beginShape();
    vertex(width / 2 - 65, height / 3 - 50);
    bezierVertex(width / 2 - 80, height / 3 - 40, width / 2 - 85, height / 3 + 20, width / 2 - 70, height / 3 + 60);
    bezierVertex(width / 2 - 60, height / 3 + 70, width / 2 + 60, height / 3 + 70, width / 2 + 70, height / 3 + 60);
    bezierVertex(width / 2 + 85, height / 3 + 20, width / 2 + 80, height / 3 - 40, width / 2 + 65, height / 3 - 50);
    bezierVertex(width / 2 + 40, height / 3 - 65, width / 2 - 40, height / 3 - 65, width / 2 - 65, height / 3 - 50);
    endShape();
    
    // Franja
    fill(120, 75, 40);
    beginShape();
    vertex(width / 2 - 50, height / 3 - 35);
    bezierVertex(width / 2 - 35, height / 3 - 25, width / 2 + 35, height / 3 - 25, width / 2 + 50, height / 3 - 35);
    bezierVertex(width / 2 + 40, height / 3 - 10, width / 2 - 40, height / 3 - 10, width / 2 - 50, height / 3 - 35);
    endShape();
}

function drawEyes() {
    let eyeY = height / 3 - 10;
    let leftEyeX = width / 2 - 35;
    let rightEyeX = width / 2 + 35;
    
    // Desenha os olhos com rastreamento do mouse
    drawEye(leftEyeX, eyeY);
    drawEye(rightEyeX, eyeY);
}

function drawEye(eyeX, eyeY) {
    let eyeSize = 20;
    
    // Branco do olho
    fill(255);
    stroke(150, 120, 90);
    strokeWeight(2);
    ellipse(eyeX, eyeY, eyeSize, eyeSize + 5);
    
    // Calcula a posição da íris seguindo o mouse
    let angle = atan2(mouseY - eyeY, mouseX - eyeX);
    let distance = 6;
    let irisX = eyeX + cos(angle) * distance;
    let irisY = eyeY + sin(angle) * distance;
    
    // Íris (azul-esverdeado, cores originais)
    fill(80, 120, 140);
    noStroke();
    ellipse(irisX, irisY, 10);
    
    // Pupila
    fill(20, 20, 30);
    ellipse(irisX, irisY, 6);
    
    // Brilho no olho
    fill(255);
    ellipse(irisX + 2, irisY - 2, 2);
    
    // Sobrancelha
    stroke(100, 60, 30);
    strokeWeight(2);
    noFill();
    arc(eyeX, eyeY - 12, 20, 12, PI, TWO_PI);
}

function drawNose() {
    fill(210, 170, 130);
    stroke(180, 140, 100);
    strokeWeight(1);
    
    // Estrutura do nariz
    beginShape();
    vertex(width / 2, height / 3 + 5);
    vertex(width / 2 - 8, height / 3 + 25);
    vertex(width / 2, height / 3 + 30);
    vertex(width / 2 + 8, height / 3 + 25);
    endShape(CLOSE);
    
    // Narinas
    fill(180, 130, 90);
    ellipse(width / 2 - 6, height / 3 + 28, 3, 4);
    ellipse(width / 2 + 6, height / 3 + 28, 3, 4);
}

function drawMouth() {
    // O famoso sorriso enigmático
    stroke(180, 100, 80);
    strokeWeight(2);
    noFill();
    
    // Linha superior do lábio
    bezierVertex(width / 2 - 30, height / 3 + 50, width / 2 - 20, height / 3 + 55, width / 2, height / 3 + 58);
    bezierVertex(width / 2 + 20, height / 3 + 55, width / 2 + 30, height / 3 + 50, width / 2 + 30, height / 3 + 50);
    
    // Linha inferior do lábio
    stroke(160, 80, 60);
    strokeWeight(2);
    bezierVertex(width / 2 + 30, height / 3 + 50, width / 2 + 20, height / 3 + 60, width / 2, height / 3 + 62);
    bezierVertex(width / 2 - 20, height / 3 + 60, width / 2 - 30, height / 3 + 50, width / 2 - 30, height / 3 + 50);
    
    // Preenchimento dos lábios
    fill(220, 150, 130);
    noStroke();
    beginShape();
    bezierVertex(width / 2 - 30, height / 3 + 50, width / 2 - 20, height / 3 + 55, width / 2, height / 3 + 58);
    bezierVertex(width / 2 + 20, height / 3 + 55, width / 2 + 30, height / 3 + 50, width / 2 + 30, height / 3 + 50);
    bezierVertex(width / 2 + 20, height / 3 + 60, width / 2, height / 3 + 62, width / 2 - 20, height / 3 + 60);
    endShape(CLOSE);
}

function drawBody() {
    // Vestido renascentista em tons de ouro e ocre
    fill(184, 134, 11); // Dourado escuro
    stroke(140, 100, 30);
    strokeWeight(2);
    
    // Torso
    beginShape();
    vertex(width / 2 - 50, height / 3 + 120);
    vertex(width / 2 - 60, height * 0.75);
    vertex(width / 2 + 60, height * 0.75);
    vertex(width / 2 + 50, height / 3 + 120);
    endShape(CLOSE);
    
    // Braços
    drawArm(width / 2 - 50, height / 3 + 140);
    drawArm(width / 2 + 50, height / 3 + 140);
    
    // Detalhe do tecido
    fill(210, 160, 80);
    noStroke();
    rect(width / 2 - 45, height / 3 + 130, 90, 20);
}

function drawArm(startX, startY) {
    fill(215, 180, 145); // Tez dos braços
    stroke(180, 140, 100);
    strokeWeight(2);
    
    // Braço
    beginShape();
    vertex(startX, startY);
    bezierVertex(startX - 20, startY + 30, startX - 15, startY + 80, startX + 10, startY + 100);
    bezierVertex(startX + 5, startY + 80, startX + 10, startY + 30, startX, startY);
    endShape(CLOSE);
    
    // Mão
    fill(220, 185, 150);
    ellipse(startX + 15, startY + 95, 18, 20);
}

function windowResized() {
    if (document.getElementById('p5-container')) {
        let container = document.getElementById('p5-container');
        let w = min(container.offsetWidth, 800);
        let h = w * 1.2;
        resizeCanvas(w, h);
    }
}