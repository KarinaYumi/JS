<html>
    <body>
        <script>
            
            var anoNasc = prompt("Por favor, informe o ano do seu nascimento: ");
           
            while(anoNasc >= 2022){
                alert("Por favor, informe seu ano de nascimento corretamente!");
                anoNasc = prompt("Por favor informe o ano do seu nascimento.")
            } 

            var anoAtual = prompt("Qual seu ano?");

            var idadeFinal = anoAtual - anoNasc;
                alert("A idade é: "+idadeFinal);

        </script>
    </body>
</html>
