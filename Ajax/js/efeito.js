
            const texto = "A melhor loja de eletrônicos de São Paulo";
            const typingContainer = document.getElementById("titulo");
        
            function typeText() {
            typingContainer.textContent = "";
            let index = 0;
        
            function typeNextChar() {
                if (index < texto.length) {
                typingContainer.textContent += texto.charAt(index);
                index++;
                setTimeout(typeNextChar, 50); // Tempo entre cada caractere (em milissegundos)
                }
            }
        
            typeNextChar();
            }
        
            typeText();
