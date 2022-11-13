<script>
  import { src_url_equal, svg_element } from "svelte/internal";
  import "../app.css";

  export let open = false;
  export let onClick = () => {
    open = !open;
  };
  let current = 0;
</script>

<nav class="bg-black sticky">
  <div class="px-8 mx-atuo">
    <div class="flex justify-between">
      <div>
        <a href="/" class="flex items-center" on:click={() => (current = 0)}>
          <img src="/vadergrill.svg" class="h-16" alt="" />
          <span
            class="font-bold self-center text-xl whitespace-nowrap py-2 px-3 hover:text-red-600"
            >Vader Grill</span
          >
        </a>
      </div>
      <button on:click={onClick} aria-expanded={open}>
        <span class="sr-only">Open main menu</span>
        <svg
          class:open
          viewBox="0 0 100 100"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="5"
          id="hamburger"
        >
          <path
            class="top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path class="middle" d="m 30,50 h 40" />
          <path
            class="bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </button>
      <div class="hidden md:flex items-center">
        <a
          href="/"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 0}
          on:click={() => (current = 0)}>Home</a
        >
        <a
          href="/evenementen"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 1}
          on:click={() => (current = 1)}
        >
          Evenementen
        </a>
        <a
          href="/over-ons"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 2}
          on:click={() => (current = 2)}
        >
          Over Ons
        </a>
        <a
          href="/login"
          class="py-2 px-4 bg-red-600 rounded hover:bg-opacity-70 font-bold"
        >
          Login</a
        >
      </div>
    </div>
  </div>
  <div class="bg-red-600 mx-auto h-2" />
</nav>

<slot />
