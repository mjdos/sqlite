# Criando um Banco de Dados SQLITE

O evento onDeviceReady() é essencial para qualquer aplicativo. Ele sinaliza que as APIs de dispositivos do Cordova foram carregadas e estão prontas para serem acessadas.

O Cordova consiste em duas bases de código: nativo e JavaScript. Enquanto o código nativo é carregado, uma imagem de carregamento personalizada é exibida. No entanto, o JavaScript só é carregado quando o DOM é carregado. Isso significa que o aplicativo da Web pode potencialmente chamar uma função JavaScript do Cordova antes que o código nativo correspondente seja disponibilizado.

O devicereadyevento é acionado assim que o Cordova estiver totalmente carregado. Quando o evento é disparado, você pode fazer chamadas para as APIs do Cordova com segurança. Os aplicativos geralmente anexam um ouvinte de evento document.addEventListener quando o DOM do documento HTML é carregado.

O devicereadyevento se comporta de maneira um pouco diferente dos outros. Qualquer manipulador de eventos registrado após o devicereadyacionamento do evento tem sua função de retorno de chamada chamada imediatamente.

