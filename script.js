// Função que realiza o cálculo da soma
function somar() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'resultado' para armazenar o resultado da soma de 'num1' e 'num2'
    var resultado = num1 + num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(resultado)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da soma
        document.getElementById("resultado").innerHTML = "A soma é: " + resultado;
    }
}

// Função que realiza o cálculo da subtração
function subtrair() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'resultado' para armazenar o resultado da subtração de 'num1' e 'num2'
    var resultado = num1 - num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(resultado)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da subtração
        document.getElementById("resultado").innerHTML = "A subtração é: " + resultado;
    }
}

// Função que realiza o cálculo da multiplicação
function multiplicar() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'resultado' para armazenar o resultado da multiplicação de 'num1' e 'num2'
    var resultado = num1 * num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(resultado)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da multiplicação
        document.getElementById("resultado").innerHTML = "A multiplicação é: " + resultado;
    }
}

// Função que realiza o cálculo da divisão
function dividir() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificação para evitar divisão por zero
    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
        return;
    }

    // Criação da variável 'resultado' para armazenar o resultado da divisão de 'num1' e 'num2'
    var resultado = num1 / num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(resultado)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da divisão
        document.getElementById("resultado").innerHTML = "A divisão é: " + resultado;
    }
}
