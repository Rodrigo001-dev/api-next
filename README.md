## :page_with_curl: Projeto

<LINKEDIN>
Trabalhando com API Routes no Next.js

Mas o que é API Routes?
</LINKEDIN>

Basicamente o API Routes tem o funcionamento de conseguir executar ações que são server-side, ou seja, acesso ao banco, autenticação, coisas que precisam de segurança, que geralmente ficam no backend da aplicação, executando isso a partir da estrutura do frontend.

<LINKEDIN>
Primeiramente hoje em dia o Next.js é um framework em cima do React implementando o conceito de SSR(Server Side Rendering) que basicamente temos uma camada intermediária no lado do nosso frontend que atua como um servidor Node e é essa camada que fica responsável por fazer chamadas APIs, se comunicar com banco de dados, com serviços de pagamentos entre outros, por isso o nome server-side(no lado so servidor) e esse servidor node vai gerar a interface(HTML, CSS, JS) e vai devolver essa interface pronta para o nosso fontend, e o frontend vai ficar responsável somente por apresentar isso em tela.
</LINKEDIN>

Com o tempo começou a surgir tentativas por parte da comunidade de trazer mais possibilidades para a camada do servidor do lado do cliente do Next, ou seja, começou a surgir uma ideia onde temos uma aplicação escrita em Next.js(ou qualquer outro framework que suporte esse mesmo tipo de arquitetura) onde temos o nosso frontend e o nosso servidor Next e começou a surgir tentativas na comunidade de comunicar o frontend com o backend criado pelo próprio Next e esse servidor acessar recursos como banco de dados, envio de emails.

<LINKEDIN>
Mas qual o problema disso tudo?
</LINKEDIN>

A partir do momento que falamos que isso tudo é apenas o frontend da aplicação(web), a API que o Next criou vai ficar junto com o nosso código do frontend(HTML, CSS, JS).

<LINKEDIN>
Isso pode deixar o nosso código desorganizado?

Sim, pode porque vai estar tudo em uma única aplicação, mas existem projetos onde isso pode fazer muito sentido principalmente a nível de produtividade
</LINKEDIN>

Utilizando o Planetscale, que é um serviço que utiliza uma biblioteca/ferramenta
chamada vitess, essa ferramenta que roda por baixo dos panos facilita a escalabilidade de bancos MySQL.

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nextjs.org/" target="_blank"> <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=vercel&logoColor=white" alt="Next"> </a>
<a href="https://planetscale.com/" target="_blank"> <img src="https://img.shields.io/badge/-Planetscale-F35815?style=flat-square&logo=planetscale&logoColor=white" alt="Planetscale"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>