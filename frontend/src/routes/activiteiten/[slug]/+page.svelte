<script>
  import { dataset_dev } from "svelte/internal";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="maxwidth">
  <!--Backwards arrow-->
  <div class="m-4">
    <a href="/activiteiten" class="flex items-center backlink">
      <svg
        version="1.1"
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 477.175 477.175"
        style="enable-background:new 0 0 477.175 477.175;"
        xml:space="preserve"
        width="40px"
        height="40px"
      >
        <g>
          <path
            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
            fill="currentcolor"
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
      <p class="backtext">Terug</p></a
    >
  </div>
  <!--Top div-->
  <div class="mx-auto block">
    <!--image div-->
    <div class="h-full w-full block">
      <span
        style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"
      >
        <span
          style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 33.3333% 0px 0px;"
        />
        <img
          src={data.bannerURL}
          alt=""
          draggable="false"
          class="absolute box-border inset-0 p-0 border-none m-auto block  w-0 h-0 min-w-full max-w-full min-h-full max-h-full shadow-lg md:rounded-t-lg object-cover"
        />
      </span>
    </div>
    <!--Little red stroke-->
    <div class="h-1 w-full top-0 bg-gradient-to-r from-red-600 to-red-700" />
    <!-- Description div -->
    <div class="md:rounded-b-lg shadow-lg bg-black">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col pl-4 md:pl-8 pr-4 lg:py-6">
          <h1 class="pb-3 md:text-center sm:text-left font-bold text-2xl lg:text-4xl">{data.activiteit.titel}</h1>
          <div class="flex md:justify-center sm:justify-start ">
            <div
              class="absolute h-full z-10 ml-0.5 left-0 bg-gradient-to-r from-red-600 to-red-700 rounded shadow-md"
              style="width: 3px;"
            />
            <p>
              {data.activiteit.beschrijving}
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>

  <!-- Tickets -->
  <div class="m-4 divbox rounded-2xl">
    <h2 class="my-4 text-2xl font-bold">Tickets</h2>
    {#if data.user?.lid === true}
      <p class="mb-5">
        Er zijn nog {data.activiteit.max_aantal_tickets -
          data.activiteit.tickets.length} van de {data.activiteit
          .max_aantal_tickets} tickets beschikbaar.
      </p>
      <a
        href="/login"
        class="py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"
      >
        Koop een ticket</a
      >
    {:else if data.user}
      Je bent nog geen volwaardig lid. Om tickets te kunnen kopen, moet je
      lidgeld betaald zijn. Je kan dit in orde brengen door iemand van het
      praesidium aan te spreken.
    {:else}
      <p class="mb-4">
        Je bent niet ingelogd! Klik <a href="/login">hier</a> om in te loggen.
      </p>
    {/if}
  </div>
</div>

<style>
  #arrow {
    color: white;
  }

  .backtext {
    font: bold;
    color: white;
    transform: translate(-30px, 0px);
    opacity: 0%;
  }

  .backlink:hover .backtext {
    transition: 400ms;
    color: red;
    opacity: 100%;
    transform: translate(0, 0px);
  }

  .backlink:hover #arrow {
    color: rgb(220, 38, 38);
    transition: 400ms;
  }

  .divbox {
    background-color: rgb(13, 17, 23);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
