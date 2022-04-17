<template>
  <footer id="footer">
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
    </ul>
  </footer>
</template>

<style>
#footer {
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
