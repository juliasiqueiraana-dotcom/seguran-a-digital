/* ================================= TAMANHO DA FONTE ================================= */ 
let tamanhoFonteAtual = 16; 
const valorAdicionado = 2; 
const valorSubtraido = 2; 
const tamanhoFonteMinimo = 12; 
const tamanhoFonteMaximo = 30; 

/* BOTÕES DE FONTE */ 
let btnAumentaFonte = document.getElementById("btnAumentaTexto"); 
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto"); 

/* AUMENTAR FONTE */ 
btnAumentaFonte.addEventListener("click", aumentaFonte); 

function aumentaFonte() { 
    if (tamanhoFonteAtual < tamanhoFonteMaximo) { 
        tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado; 
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`; 
    } 
} 

/* DIMINUIR FONTE */ 
btnDiminuiFonte.addEventListener("click", diminuiFonte); 

function diminuiFonte() { 
    if (tamanhoFonteAtual > tamanhoFonteMinimo) { 
        tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido; 
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`; 
    } 
}
