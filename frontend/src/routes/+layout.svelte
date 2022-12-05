<script>
  import { src_url_equal, svg_element } from "svelte/internal";
  import "../app.css";

  export let BurgerOpen = false;
  export let onClick = () => {
    BurgerOpen = !BurgerOpen;
  };
  let current = 0;

  
  export let data;
  console.log(data)

</script>

<nav class="bg-black">
  <div class="mx-auto" id="headerdiv">
    <div class="flex justify-between">
      <!--Logo here-->
      <div class="relative top-1">
        <a href="/" class="flex items-center" on:click={() => (current = 0)}>
          <img src="/vadergrill.svg" class="h-16" alt="" />
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
      <!--Dekstop navigation bar for topright-->
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
        <a
          href="/testoverons"
          class="py-2 px-3 font-bold relative nav-link w-nav-link"
          style="max-width"
          class:current={current === 3}
          on:click={() => (current = 3)}>Test OVer Ons</a
        >
        {#if data?.user}
        <p>ingelogd als {data.user.name}</p>
        <form action="/logout" method="POST">
          <button type="submit" class="py-2 px-3 font-bold relative nav-link w-nav-link ">Logout</button>
        </form>
        
       {:else}
        <a
        href="/login"
        class="py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"
        on:click={onClick}
          >
        Login</a>
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
      <a
        href="/testoverons"
        class="py-3 px-3 font-bold relative nav-link w-nav-link"
        style="max-width"
        class:current={current === 3}
        on:click={() => (current = 3)}
        on:click={onClick}>Test Over Ons</a
      >
      </div>
    <div class="m-3 md:hidden text-center">
    {#if data?.user}

    <p>ingelogd als {data.user.name}</p>
    <form action="/logout" method="POST">
      <button type="submit" class="py-2 px-3 font-bold relative nav-link w-nav-link ">Logout</button>
    </form>
    {:else}
      <a
      href="/login"
      class="py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"
      on:click={onClick}
        >
      Login</a>
    {/if}
    </div>
  </div>
  <!--Small red bar underneath navigation bar-->
  <div class="bg-red-600 mx-auto h-2" />
</nav>
<slot />

<style>
  #headerdiv {
    padding-left: 32px;
    padding-right: 32px;
  }

</style>
