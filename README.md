<h1 align="center"> Module-Federation-Angular-React-Vue </h1>
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="https://webpack.js.org/site-logo.c0e60df418e04f58.svg" alt="Logo" width="80" height="80">
  <h3 align="center">Module Federation</h3>

  <p align="center">
    Projeto criando com o Shell Angular e remotes React, Angular e Vue
    <br />
    <br />
    <a href="https://webpack.js.org/concepts/module-federation/"><strong>Veja a documentação  »</strong></a>
  </p>
</div>




## Sobre o Projeto
<details>
  <summary>Monolito VS Microfrontend</summary>
  
![image](https://github.com/user-attachments/assets/4ace7c3e-e042-4848-9fe0-c6c0d5ed76e7)

![image](https://github.com/user-attachments/assets/23aa545e-3cd5-44d4-84f8-1305f2d5af42)


</details>
  <h3 align="center">O que é Module Federation</h3>
<p>Funcionalidade introduzida no Webpack 5 que permite que diferentes aplicações (ou partes delas) compartilhem módulos uns com os outros em tempo de execução, sem a necessidade de fazer um build centralizado. Isso é particularmente útil em arquiteturas de microfrontends, onde cada microfrontend pode ser desenvolvido e implantado independentemente, mas ainda assim pode consumir módulos de outros microfrontends.</p>

<p>Nesse projeto criamos uma aplicação onde o <strong> Shell </strong> foi desenvolvido com <strong> Angular </strong>  enquanto os <strong> Remotes </strong> com <strong> React</strong>, <strong> Angular </strong>e <strong> Vue </strong></p>

<div align="center">
  
  ![image](https://github.com/user-attachments/assets/686df8de-fe10-4b94-a68e-9c4e6282db07)

  ![image](https://github.com/user-attachments/assets/9b8bc5bd-280d-4725-a017-de21836d5def)

</div>

<div  align="center">
  <p>Para exemplificar criamos essa interface, onde cada tab consome o module de um MFE</p>

![image](https://github.com/user-attachments/assets/42f27889-4c80-47dd-af20-0e39555a0722)
</div>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Remotes

Saiba mais sobre os frameworks/libs que usamos.

* [![Angular][Angular.io]][Angular-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Como começar 



### Instale as depencias de cada aplicação :

* mfe-angular
* mfe-react
* mfe-vue
* shell

  ```sh
  npm install 
  ```

## Start Server 

* mfe-angular
   ```sh
    cd mfe-angular
   npm run start
   ```
* mfe-react
   ```sh
    cd mfe-react
   npm run start-mfe
   ```
* mfe-vue
   ```sh
    cd mfe-vue
   npm run start
   ```
* shell
   ```sh
    cd shell
   npm run start
   ```

## Contato

Linkedin - [Eduarda Alves](https://www.linkedin.com/in/eduarda-alves-0b84ba178/) 





<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Module-federation]: https://webpack.js.org/site-logo.c0e60df418e04f58.svg

