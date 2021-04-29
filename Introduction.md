## Introdução

### Pontos positivos

- Fácil e rápido deploy independente do front

- Possibilidade de evolução de funcionalidades e ferramentas, sem interferir com legado

- Decisões técnicas poderem ser tomadas pela equipe

### Pontos Negativos

- Dependencias de cada microfrontend precisa ser bem administrado;

- Visão individual pode afetar o user experience da aplicação, caso um design system não tenha sido adotado;

---

Existem três tipos de microfrontend:

- **Single spa Application** - É uma aplicação inteira de frontend focada em uma ou mais rotas especificas da aplicação, dada aquela rota, algum microfront cuidará dela, um exemplo é o login

- **Single Spa Parcel** - Essa é uma outra forma de microfrontend focada em uma parte da aplicação geral, como um componente alocado dentro de um container

- **Helper Module** - Esse é tipo um conjunto de funções JS q podem ser uteis, como funções de autenticação, elas não trazem componentes UI

Quanto maior a flexibilidade dos fragmentos, maior pode ser os problemas de performance
Quanto maior a especificidade dos fragmentos, maior pode ser os problemas de performance
Especificidade ao nível de componente possui um alto fator de risco
Especificidade ao nível de páginas possui um fator de risco menor, com algumas ressalvas

Vantagens
Maior autonomia de um fragmento e da equipe que trabalha nele
Deploy independente e mais rápido feito separado nos fragmentos
Atualização de frameworks independentes entre os fragmentos
Com cuidado para que não haja muitas sobreposições de versões de bibliotecas, o que pode ocasionar em problemas de performance
Desvantagens
Deve-se ter um bom controle da estilização ao longo dos fragmentos
Para que não ocorra incoerência visual na experiência do usuário
A Synchro já possui esse controle com o Helena
Tem que haver um bom controle das versões ao longo do sistema
Se houverem muitas versões diferentes de uma mesma biblioteca/framework em uma mesma página isso pode levar a problemas de performance pois o javascript deverá baixar todas essas várias versões em um mesmo local
Deve-se haver cuidado com relação a problemas de performance para o usuário
É a máquina do usuário que faz o processamento do front em web
Trabalhar com mais de um fragmento em uma tela só pode levar à importações sobrepostas dependendo de quais frameworks/bibliotecas os fragmentos estarão usando e a versão deles
Talvez o ideal seria apenas bibliotecas/frameworks menores possuirem uma maior flexibilidade com relação à versão nos fragmentos
