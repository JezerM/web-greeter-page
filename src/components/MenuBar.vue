<template>
  <div id="menuBar">
    <router-link id="titleWrapper" to="/">
      <h3>{{ title }}</h3>
    </router-link>
    <div id="menuBarLinks">
      <router-link to="/themes">Themes</router-link>
      <a href="/docs">Docs</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let timeout: number;

export default defineComponent({
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

  background-color: #1a1a1a;
  color: #fff;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  padding: 0px 4%;

  border-bottom-width: 1.5px;
  border-bottom-color: #595959;
  border-bottom-style: solid;
}
#menuBar h3 {
  margin: 10px 0px;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.25s;
}
#menuBar h3:hover {
  color: #8cbce5;
}
#menuBar #titleWrapper {
  width: fit-content;
}
#menuBarLinks {
  display: flex;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#menuBarLinks a {
  margin: 0px 5px;
  text-decoration: none;
  color: #fff;
  padding: 10px;
  transition: 0.25s;
}
#menuBarLinks a:hover {
  background-color: #303030;
  color: #8cbce5;
}
#menuBarLinks a:focus {
  background-color: #303030;
  color: #8cbce5;
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

@media screen and (min-width: 600px) {
  #menuBar {
    padding: 0px 10%;
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
