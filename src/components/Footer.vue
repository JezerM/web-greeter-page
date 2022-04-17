<template>
  <footer id="footer">
    <section id="githubRepos">
      <b>GitHub repositories</b>
      <ul>
        <li>
          <a href="https://github.com/JezerM/web-greeter">Web Greeter</a>
        </li>
        <li>
          <a href="https://github.com/JezerM/nody-greeter">Nody Greeter</a>
        </li>
        <li>
          <a href="https://github.com/JezerM/sea-greeter">Sea Greeter</a>
        </li>
        <li>
          <a href="https://github.com/JezerM/web-greeter-page">This webpage</a>
        </li>
      </ul>
    </section>
    <section id="githubRepos">
      <b>Contact</b>
      <ul>
        <li>
          <a href="https://github.com/JezerM/">JezerM's GitHub</a>
        </li>
        <li>
          <a href="mailto:amyuki4@gmail.com">Send Email</a>
        </li>
      </ul>
    </section>
    <section id="githubRepos">
      <b>Support me</b>
      <ul>
        <li>
          <a href="https://ko-fi.com/jezerm">Ko-fi</a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style>
#footer {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: left;
  gap: 1em 3em;

  font-size: 14px;
  text-align: left;
  color: hsl(0, 0%, 60%);

  padding: 20px 10%;
  margin: 50px 0px 0px 0px;

  border-top-width: 1.5px;
  border-top-color: #595959;
  border-top-style: solid;
}
#footer li {
  margin: 5px 0px;
}
#footer a {
  transition: 0.25s;
}
#footer a:hover {
  color: #8cbce5;
}
</style>
