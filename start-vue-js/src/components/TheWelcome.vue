<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    
    <template #heading>Projetos de Frontend</template>

    Veja alguns dos meus projetos de Frontend:
    <a href="https://github.com/bernardo/my-portfolio" target="_blank" rel="noopener">Portfólio Pessoal</a>,
    <a href="https://github.com/bernardo/e-commerce" target="_blank" rel="noopener">Loja Virtual</a>,
    <a href="https://github.com/bernardo/dashboard" target="_blank" rel="noopener">Dashboard de Análise</a>. Para mais detalhes, acesse o meu 
    <a href="https://github.com/bernardo" target="_blank" rel="noopener">GitHub</a>.
  </WelcomeItem>

  <WelcomeItem>

    <template #heading>Projetos de Backend</template>

    Aqui estão alguns dos meus projetos de Backend:
    <a href="https://github.com/bernardo/api-rest" target="_blank" rel="noopener">API RESTful</a>,
    <a href="https://github.com/bernardo/microservices" target="_blank" rel="noopener">Microserviços</a>,
    <a href="https://github.com/bernardo/authentication" target="_blank" rel="noopener">Sistema de Autenticação</a>. Para mais projetos, veja meu 
    <a href="https://github.com/bernardo" target="_blank" rel="noopener">perfil no GitHub</a>.
  </WelcomeItem>

  <WelcomeItem>

    <template #heading>Projetos FullStack</template>

    Projetos que abrangem tanto o Frontend quanto o Backend:
    <a href="https://github.com/bernardo/social-network" target="_blank" rel="noopener">Rede Social</a>,
    <a href="https://github.com/bernardo/task-manager" target="_blank" rel="noopener">Gerenciador de Tarefas</a>,
    <a href="https://github.com/bernardo/booking-system" target="_blank" rel="noopener">Sistema de Reservas</a>. Confira mais no meu 
    <a href="https://github.com/bernardo" target="_blank" rel="noopener">GitHub</a>.
  </WelcomeItem>

  <WelcomeItem>

    <template #heading>Contribuições Open Source</template>

    Participo ativamente da comunidade open source. Aqui estão algumas das minhas contribuições:
    <a href="https://github.com/opensource-project1" target="_blank" rel="noopener">Projeto Open Source 1</a>,
    <a href="https://github.com/opensource-project2" target="_blank" rel="noopener">Projeto Open Source 2</a>,
    <a href="https://github.com/opensource-project3" target="_blank" rel="noopener">Projeto Open Source 3</a>. Veja todas as minhas contribuições no meu 
    <a href="https://github.com/bernardo" target="_blank" rel="noopener">perfil GitHub</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Blog e Artigos</template>

    Eu também escrevo sobre desenvolvimento web. Leia meus artigos mais recentes:
    <a href="https://medium.com/@bernardo/artigo1" target="_blank" rel="noopener">Artigo 1</a>,
    <a href="https://medium.com/@bernardo/artigo2" target="_blank" rel="noopener">Artigo 2</a>,
    <a href="https://medium.com/@bernardo/artigo3" target="_blank" rel="noopener">Artigo 3</a>. Acompanhe mais no meu
    <a href="https://medium.com/@bernardo" target="_blank" rel="noopener">perfil no Medium</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Contato</template>

    Quer saber mais ou colaborar em algum projeto? Entre em contato comigo:
    <a href="mailto:bernardo@example.com" target="_blank" rel="noopener">Email</a>,
    <a href="https://www.linkedin.com/in/bernardo" target="_blank" rel="noopener">LinkedIn</a>,
    <a href="https://twitter.com/bernardo" target="_blank" rel="noopener">Twitter</a>.
  </WelcomeItem>
</template>

