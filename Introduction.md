## Introdução

### Pontos positivos

* Fácil e rápido deploy independente do front

* Possibilidade de evolução de funcionalidades e ferramentas, sem interferir com legado

* Decisões técnicas poderem ser tomadas pela equipe

### Pontos Negativos

* Dependencias de cada microfrontend precisa ser bem administrado;

* Visão individual pode afetar o user experience da aplicação, caso um design system não tenha sido adotado;

***

Existem três tipos de microfrontend:

* **Single spa Application** - É uma aplicação inteira de frontend focada em uma ou mais rotas especificas da aplicação, dada aquela rota, algum microfront cuidará dela, um exemplo é o login

* **Single Spa Parcel** - Essa é uma outra forma de microfrontend focada em uma parte da aplicação geral, como um componente alocado dentro de um container

* **Helper Module** - Esse é tipo um conjunto de funções JS q podem ser uteis, como funções de autenticação, elas não trazem componentes UI