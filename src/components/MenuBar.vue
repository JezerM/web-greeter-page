<template>
  <header id="menuBar">
    <router-link id="titleWrapper" to="/">
      <h3>{{ title }}</h3>
    </router-link>
    <div id="menuBarLinks">
      <router-link to="/web-greeter-page/" class="menuBarItem">
        Home
      </router-link>
      <router-link to="/web-greeter-page/themes" class="menuBarItem">
        Themes
      </router-link>
      <a href="/web-greeter-page/docs" class="menuBarItem">Docs</a>

      <ToggleColorMode />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleColorMode from "./ToggleColorMode.vue";

let timeout: number;

export default defineComponent({
  components: {
    ToggleColorMode,
  },
  data() {
    return {
      index: 0,
      greeters: ["Web Greeter", "Nody Greeter", "Sea Greeter"],
    };
  },
  computed: {
    title(): string {
      const title = this.greeters[this.index];
      return title;
    },
  },
  methods: {
    updateAnimation() {
      const h3: HTMLHeadingElement =
        this.$el.querySelector("#titleWrapper > h3");
      h3.classList.remove("enterTyping");
      h3.classList.add("leaveTyping");
    },
    updateTitle(event: AnimationEvent) {
      const h3: HTMLHeadingElement =
        this.$el.querySelector("#titleWrapper > h3");

      if (
        event.animationName != "leaveTyping" &&
        event.animationName != "noAnimation"
      )
        return;

      h3.classList.remove("leaveTyping");
      h3.classList.add("enterTyping");

      this.index++;
      if (this.index >= this.greeters.length) this.index = 0;
    },
  },
  mounted() {
    timeout = setInterval(this.updateAnimation, 12000);
    const h3: HTMLHeadingElement = this.$el.querySelector("#titleWrapper > h3");
    h3.addEventListener("animationend", this.updateTitle);
  },
  beforeUnmount() {
    clearInterval(timeout);
    const h3: HTMLHeadingElement = this.$el.querySelector("#titleWrapper > h3");
    h3.removeEventListener("animationend", this.updateTitle);
  },
});
</script>

<style>
#menuBar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--c-bg);
  color: var(--c-text);
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  height: 3.6rem;
  padding: 0.7rem 1.5rem;

  border-bottom-width: 1px;
  border-bottom-color: var(--c-border);
  border-bottom-style: solid;
}
#menuBar h3 {
  margin: 10px 0px;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.25s;
}
#menuBar h3:hover {
  color: var(--c-brand);
}
#menuBar #titleWrapper {
  width: fit-content;
}
#menuBarLinks {
  display: flex;
  position: relative;

  font-size: 0.9rem;
  font-weight: 500;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#menuBarLinks .menuBarItem {
  margin: 0em;
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--c-text);
  padding: 0em;
  transition: 0.25s;
  border-bottom: solid 2px transparent;
  margin-bottom: -2px;
  line-height: 1.4rem;
}
#menuBarLinks .menuBarItem:first-child {
  margin-left: 0em;
}
#menuBarLinks .menuBarItem:hover,
#menuBarLinks .menuBarItem:focus {
  border-bottom: solid 1.5px var(--c-brand);
  outline: 0;
}

.enterTyping {
  animation: enterTyping 1.5s;
}
.leaveTyping {
  animation: leaveTyping 1.5s;
}

@keyframes enterTyping {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes leaveTyping {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

@media screen and (prefers-reduced-motion) {
  @keyframes enterTyping {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
  @keyframes leaveTyping {
    from {
      opacity: 100%;
    }
    to {
      opacity: 0%;
    }
  }
}
</style>
