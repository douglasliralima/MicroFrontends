


 ### in-browser vs build-time modules

 #### In-browser modules

 * Aqui é após o nosso processo de build, o import é mantido, logo o browser vai nos fornecer aquele módulo:

 ```js
import "single-spa"
 ```

* Veja que aqui o browser vai ter que fazer uma chamada http a parte para fazer o import do modulo

 #### Build-time modules

 * Nesse formato o bundler transforma um import na própria injeção dentro daquele file: 

```js
 import foo from "./foo"
```
Foo.js
 ```js
 export "This is foo file"
```

Se transforma após o bundle em:

```js
var foo = "This is foo file"
```

* Quase todos os códigos que o bundler cria é um build-time module

#### Import Maps

* Quando no exemplo do in browser modules, nos realizamos aquele import, caso não tivessemos compilando por um webpack, no script do html, precisariamos fazer o seguinte:

```js
import "cdn.jsdeliver.net/npm/single-spa/esm/single-spa.min.js"
```

* Entretanto, com a entrada do ES6, uma nova tag foi padronizada para o browser, os import maps:

```html
<script type="importmap">
{
    "imports" : {
        "single-spa" : "cdn.jsdeliver.net/npm/single-spa/esm/single-spa.min.js"
    }
}
</script>
```

* Com o importmap podemos inclusive ter várias versões de um mesmo modulo

```html
<script type="importmap">
{
    "imports" : {
        "lodash" : "https://unpkg.com/lodash@3"
    },
    "scopes" : {
        "/module-a/" : {
            "lodash" : "https://unpkg.com/lodash@3"
    }
}
</script>
```

* Com isso os arquivos js da nossa aplicação podem fazer o import da forma convencional, mesmo que ele ainda faça o http para pegar esse import

* Além disso, outros modulos poderiam ter diferentes versões de uma mesma library, mesmo que essa tivesse que fazer duas requisições

* **Big down-side** - Esse sistema atualmente não está implementado por nenhum browser, o chrome está desenvolvendo isos em um ambiente de teste com feature flag

* Por isso para isso nos utilizamos um poliffil chamado systemjs que vai fazer a implementação desse importmap, mesmo para os browsers não suportados





















