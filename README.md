## :page_with_curl: Projeto

Basicamente o API Routes tem o funcionamento de conseguir executar ações que são server-side, ou seja, acesso ao banco, autenticação, coisas que precisam de segurança, que geralmente ficam no backend da aplicação, executando isso a partir da estrutura do frontend.

Com o tempo começou a surgir tentativas por parte da comunidade de trazer mais possibilidades para a camada do servidor do lado do cliente do Next, ou seja, começou a surgir uma ideia onde temos uma aplicação escrita em Next.js(ou qualquer outro framework que suporte esse mesmo tipo de arquitetura) onde temos o nosso frontend e o nosso servidor Next e começou a surgir tentativas na comunidade de comunicar o frontend com o backend criado pelo próprio Next e esse servidor acessar recursos como banco de dados, envio de emails.

A partir do momento que falamos que isso tudo é apenas o frontend da aplicação(web), a API que o Next criou vai ficar junto com o nosso código do frontend(HTML, CSS, JS).

Utilizando o Planetscale, que é um serviço que utiliza uma biblioteca/ferramenta
chamada vitess, essa ferramenta que roda por baixo dos panos facilita a escalabilidade de bancos MySQL.
O Planetscale integra, cria na estrutura do banco de dados algo muito parecido com o que temos no github, que é o funcionamento de branches, ou seja, com isso eu posso ter várias versões do banco de dados dentro do planetscale. A branche funciona como um banco isolado com uma estrutura própria, uma coisa muito interessante das branches é que eu consigo promover a atualização de uma branche para outra.

Ex: a branche main geralmente é a branche de produção, eu posso ter uma branche de desenvolvimento e fazer todas as alterações nela e se eu quiser colocar isso em produção, eu só promovo a branche de desenvolvimento para a de produção(main), assim como é feito em um repositório do github, ou seja, eu não preciso executar tudo que eu já tinha executado em desenvolvimento de novo.

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nextjs.org/" target="_blank"> <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=vercel&logoColor=white" alt="Next"> </a>
<a href="https://planetscale.com/" target="_blank"> <img src="https://img.shields.io/badge/-Planetscale-F35815?style=flat-square&logo=planetscale&logoColor=white" alt="Planetscale"> </a>
<a href="https://www.prisma.io/" target="_blank"> <img src="https://img.shields.io/badge/-Prisma-3368FF?style=flat-square&logo=prisma&logoColor=white" alt="Prisma"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
