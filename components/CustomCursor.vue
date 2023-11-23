<template>
  <!-- <section>
    <h1>Custom Cursor</h1>
    <a href="#">Hover Me</a>
  </section> -->
  <div class="cursor lg:block hidden" ref="cursor"></div>
  <div class="cursor2 lg:block hidden" ref="cursorInner"></div>
</template>

<script>
export default {
  mounted() {
    this.setupCursorEvents();
  },
  methods: {
    setupCursorEvents() {
      const cursor = this.$refs.cursor;
      const cursorInner = this.$refs.cursorInner;
      const links = document.querySelectorAll('a');

      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        cursorInner.style.left = e.clientX + 'px';
        cursorInner.style.top = e.clientY + 'px';
      });

      document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        cursorInner.classList.add('cursorinnerhover');
      });

      document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorInner.classList.remove('cursorinnerhover');
      });

      links.forEach((item) => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
        });
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  cursor: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

h1 {
  font-family: montserrat;
  font-size: 40px;
}

a {
  font-family: Montserrat;
  position: relative;
  text-decoration: none;
}

a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 0px;
  left: 0%;
  background: black;
  transition: width 0.3s ease;
}

a:hover:after {
  width: 100%;
  left: 0%;
  background: black;
}

.cursor {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid grey;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  z-index: 99999;
  transform: translate(calc(-50% + 15px), -50%);
}

.cursor2 {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
  opacity: 0.3;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 99999;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
}

.hover {
  background-color: grey;
  opacity: 0.5;
}

.cursorinnerhover {
  width: 50px;
  height: 50px;
  opacity: 0.5;
}
</style>
