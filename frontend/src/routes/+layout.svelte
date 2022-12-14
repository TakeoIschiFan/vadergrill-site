<script>
  import { src_url_equal, svg_element } from "svelte/internal";
  import "../app.css";

  export let BurgerOpen = false;
  export let onClick = () => {
    BurgerOpen = !BurgerOpen;
  };

  export let loginerr = () => {
    alert("Sorry, de Login is nog in opmaak");
  };
  let current = 0;

  export let data;
  console.log(data);

  import vg from "../assets/vadergrill.svg";
</script>

<nav class="bg-black">
  <div class="mx-auto maxwidth" id="headerdiv">
    <div class="flex justify-between">
      <!--Logo here-->
      <div class="relative top-1">
        <a href="/" class="flex items-center" on:click={() => (current = 0)}>
          <img src={vg} class="h-16" alt="" />
          <span
            class="font-bold self-center text-xl whitespace-nowrap py-2 px-3 hover:text-red-600"
            >Vader Grill</span
          >
        </a>
      </div>
      <!--Building the burger design for mobile-->
      <div class="relative top-2 md:hidden">
        <button on:click={onClick}>
          <svg
            class="w-12 h-12 md:hidden"
            class:open={BurgerOpen}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -110 512 750"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            enable-background="new 0 0 512 512"
            id="burger"
          >
            <g>
              <g>
                <g>
                  <g>
                    <path
                      id="topbun"
                      d="m480.7,228.6h-449.2c-11.3,0-20.4-9.1-20.4-20.4v-29.7c-1.77636e-15-92.4 75.1-167.5 167.4-167.5h155.1c92.3,0 167.5,75.1 167.5,167.5v29.7c0,11.2-9.2,20.4-20.4,20.4zm-428.8-40.9h408.3v-9.3c0-69.8-56.8-126.6-126.6-126.6h-155.1c-69.8,0-126.6,56.8-126.6,126.6v9.3z"
                      fill="currentcolor"
                    />
                  </g>
                  <g>
                    <path
                      id="botbun"
                      d="M435.4,501H76.7c-36.2,0-65.6-29.4-65.6-65.6v-54.2c0-11.3,9.1-20.4,20.4-20.4h449.1c11.3,0,20.4,9.1,20.4,20.4v54.2      C501.1,471.6,471.6,501,435.4,501z M51.9,401.6v33.8c0,13.7,11.1,24.8,24.8,24.8h358.7c13.7,0,24.8-11.1,24.8-24.8v-33.8H51.9z"
                      fill="currentcolor"
                    />
                  </g>
                  <g>
                    <path
                      id="middleburger"
                      d="m31.5,334.7c-7.2,0-14.2-3.8-17.9-10.6-5.4-9.9-1.8-22.3 8.1-27.7l42-23c25.1-13.8 56.3-13.8 81.5,0 13,7.1 29.2,7.1 42.2,0l18.9-10.4c25.1-13.8 56.4-13.8 81.5,0l17.5,9.6c13,7.1 29.2,7.1 42.2,0l20.5-11.3c25.1-13.8 56.3-13.8 81.5,0l41.1,22.6c9.9,5.4 13.5,17.8 8.1,27.7-5.4,9.9-17.8,13.5-27.7,8.1l-41.1-22.5c-13-7.1-29.2-7.1-42.2,0l-20.5,11.3c-25.1,13.8-56.3,13.8-81.5,0l-17.5-9.6c-13-7.1-29.2-7.1-42.2,0l-19,10.2c-25.1,13.8-56.4,13.8-81.5,0-13-7.1-29.2-7.1-42.2,0l-42,23c-3.1,1.8-6.5,2.6-9.8,2.6z"
                      fill="currentcolor"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <!--Dekstop navigation bar-->
      <div class="hidden md:flex md:items-center">
        <a
          href="/"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 0}
          on:click={() => (current = 0)}>Home</a
        >
        <a
          href="/activiteiten"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 1}
          on:click={() => (current = 1)}
        >
          Activiteiten
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
        {#if data?.user}
          <p>ingelogd als {data.user.name}</p>
          <form action="/logout" method="POST">
            <button
              type="submit"
              class="py-2 px-3 font-bold relative nav-link w-nav-link "
              >Logout</button
            >
          </form>
        {:else}
          <a
            href="/"
            class="py-2 px-4 m-5 relative bg-red-600 rounded hover:bg-opacity-70 font-bold"
            on:click={onClick}
            on:click={loginerr}
          >
            Login</a
          >
        {/if}
      </div>
    </div>
  </div>
  <!--Burger menu for mobile-->
  <div
    class="bg-transparent w-full h-full relative bottom-5"
    class:open={BurgerOpen}
    id="mobmenu"
  >
    <div class="m-3 md:hidden text-center">
      <a
        href="/"
        class="py-3 px-3 font-bold relative nav-link w-nav-link"
        style="max-width"
        class:current={current === 0}
        on:click={() => (current = 0)}
        on:click={onClick}>Home</a
      >
    </div>
    <div class="m-3 md:hidden text-center">
      <a
        href="/activiteiten"
        class="py-2 px-3 font-bold relative nav-link w-nav-link"
        style="max-width"
        class:current={current === 1}
        on:click={() => (current = 1)}
        on:click={onClick}
      >
        Activiteiten
      </a>
    </div>
    <div class="m-3 md:hidden text-center">
      <a
        href="/over-ons"
        class="py-2 px-3 font-bold relative nav-link w-nav-link"
        style="max-width"
        class:current={current === 2}
        on:click={() => (current = 2)}
        on:click={onClick}
      >
        Over Ons
      </a>
    </div>
    <div class="m-3 md:hidden text-center">
      {#if data?.user}
        <p>ingelogd als {data.user.name}</p>
        <form action="/logout" method="POST">
          <button
            type="submit"
            class="py-2 px-3 font-bold relative nav-link w-nav-link "
            >Logout</button
          >
        </form>
      {:else}
        <a
          href="/"
          class="py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"
          on:click={onClick}
          on:click={loginerr}
        >
          Login</a
        >
      {/if}
    </div>
  </div>
  <!--Small red bar underneath navigation bar-->
  <div class="bg-red-600 mx-auto h-2" />
</nav>
<slot />

<!-- Footer -->
<footer>
  <div class="bg-black w-full h-auto">
    <div class="maxwidth grid grid-cols-1 md:grid-cols-2 justify-between">
      <div class="flex flex-row p-4 items-center justify-center gap-4">
        <img src={vg} class="h-16" alt="" />
        <div class="flex flex-col gap-2">
          <p>Vader Grill</p>
          <a href="/privacy" class="underline text-xs hover:text-red-600"
            >Privacy Policy</a
          >
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-center md:justify-start mb-8 mt-4 md:m-0 gap-4"
      >
        <a href="https://www.instagram.com/vader_grill/">
          <svg
            class="w-5 h-5 instagram"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
              opacity="1"
              fill="currentcolor"
            /></svg
          >
        </a>
        <a href="https://www.facebook.com/profile.php?id=100087175883410">
          <svg
            class="w-5 h-5 facebook"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              opacity="1"
              fill="currentcolor"
            /></svg
          >
        </a>
        <a href="https://discord.gg/ybaemRJKQB">
          <svg
            class="w-5 h-5 discord"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              opacity="1"
              fill="currentcolor"
            /></svg
          >
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  #headerdiv {
    padding-left: 32px;
    padding-right: 32px;
  }

  .facebook,
  .instagram {
    color: white;
    transition: 300ms;
  }

  .facebook:hover {
    color: #4267b2;
    transform: scale(1.1);
  }

  .instagram:hover {
    color: orange;
    transform: scale(1.1);
  }

  .discord:hover {
    color: #7289da;
    transform: scale(1.1);
  }
</style>
