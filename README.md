DBC App


Sobre o Projeto

O objetivo deste projeto é demonstrar habilidades em React Native, utilizando a biblioteca Expo, entre outras tecnologias modernas de desenvolvimento de software. 

** O projeto deve ser iniciado através de um dispositivo real (abaixo instruções de instalação) pois há elementos 3D a serem renderizados e os emuladores virtuais não o fazem.


Tecnologias Utilizadas

Expo: Escolhido inicialmente para acelerar o desenvolvimento e principalmente evitar problemas com bugs conhecidos na versão bare do React Native com o React Three Fiber, que utiliza alguns pacotes do Expo. Expo oferece um ambiente simplificado e eficiente para o desenvolvimento de apps React Native.
React Three Fiber: Utilizado para adicionar componentes 3D no app, integrando-se perfeitamente com o Expo.
React Navigation: Gerencia a navegação entre as quatro telas do app.
Apollo com GraphQL: Fornece uma interface robusta e flexível para interagir com APIs GraphQL.
Context API: Utilizada para gerenciar o estado global do app, incluindo dados de usuário e favoritos.
Jest: Para implementar testes unitários e garantir a qualidade do código.
i18n: Para suportar a internacionalização e localização do app.


Instalação e Execução

Pré-Requisitos

Node.js
npm ou yarn
Expo CLI

Instale as dependencias com yarn ou npm e iniciar o projeto:

- yarn install 
- yarn start

Abra o aplicativo Expo no seu dispositivo móvel e escaneie o QR code fornecido pelo Expo CLI para abrir o app.


Para executar os testes:

yarn test


Estrutura do Projeto
 
- assets/: Contém ativos estáticos como modelos 3D, imagens e outros arquivos necessários para o app.
- components/: Componentes reutilizáveis usados em todo o aplicativo.
- helpers/: Funções auxiliares que fornecem lógica reutilizável para várias partes do aplicativo.
- interfaces/: Definições de tipos TypeScript para garantir tipagem forte em todo o aplicativo.
- locales/: Arquivos de internacionalização, permitindo suporte a múltiplos idiomas.
- pages/: Telas do aplicativo, cada uma correspondendo a uma vista dentro do app.
- routes/: Configuração de rotas do app usando React Navigation.
- services/: Serviços para gerenciar a lógica de negócios e interações com APIs externas.
- store/: Estado global do aplicativo, usando Context API.
- utils/: Utilitários e funções comuns que podem ser usados em diferentes contextos dentro do aplicativo.

Além disso, existe o arquivos de configuração  do i18n na raiz do diretório src/:

i18n.ts: Configurações para i18next para suportar a internacionalização do app.