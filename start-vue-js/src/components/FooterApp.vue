<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Bernardo - Todos os direitos reservados</p>
      <div class="social-links">
        <a href="https://github.com/Be0208" target="_blank" rel="noopener">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            alt="GitHub"
            width="24"
            height="24"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bernardo-dartora-550376291/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            alt="LinkedIn"
            width="24"
            height="24"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

.social-links a {
  margin: 0 0.5rem;
}

.social-links img {
  vertical-align: middle;
}
</style>
