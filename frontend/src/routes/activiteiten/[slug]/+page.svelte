<script>
  import { dataset_dev } from "svelte/internal";

  /** @type {import('./$types').PageData} */
  export let data;

  export let maanden = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December",
  ];
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
  <!--Top div, gecopieerd van een website https://serbanmihai.com/tavern/whats-the-matter-with-twitter-->
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
      <div class="grid sm:grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col pl-4 md:pl-8 pr-4 lg:py-6">
          <h1 class="pb-3 md:text-center sm:text-left font-bold text-2xl lg:text-4xl">{data.activiteit.titel}</h1>
          <div class="flex flex-row-reverse md:justify-center sm:justify-start ">
            <h2 class="pl-4 text-sm">
              {data.activiteit.beschrijving}
            </h2>
            <div
              class="relative h-full z-10 ml-0.5 left-0 bg-gradient-to-r from-red-600 to-red-700 rounded shadow-md"
              style="width: 3px;"
            />
          </div>
        </div>
        <div class="flex sm:flex-col-reverse md:flex-col md:pl-8 sm:pl-4 md:pr-8 sm:pr-4 pt-0 pb-4 sm:py-4 lg:py-6 flex-shrink-0">
          <div class="flex flex-row gap-2 md:flex-col md:justify-between sm:justify-start md:pt-3 sm:pt-0">
            <div class="w-6 h-6 bg-transparent" />
            <div class="flex gap-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="datesvg"
                ><path
                  d="m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z"
                  fill="currentcolor"
                /><path d="m5.25 9h3v2.25h-3z" fill="currentcolor" /><path
                  d="m5.25 12.75h3v2.25h-3z"
                  fill="currentcolor"
                /><path d="m5.25 16.5h3v2.25h-3z" fill="currentcolor" /><path
                  d="m10.5 16.5h3v2.25h-3z"
                  fill="currentcolor"
                /><path d="m10.5 12.75h3v2.25h-3z" fill="currentcolor" /><path
                  d="m10.5 9h3v2.25h-3z"
                  fill="currentcolor"
                /><path d="m15.75 16.5h3v2.25h-3z" fill="currentcolor" /><path
                  d="m15.75 12.75h3v2.25h-3z"
                  fill="currentcolor"
                /><path d="m15.75 9h3v2.25h-3z" fill="currentcolor" /></svg
              >
              <p>
                {data.activiteit.start.slice(8, 10)}
                {maanden[data.activiteit.start.slice(5, 7) - 1]}
                {data.activiteit.start.slice(0, 4)}
              </p>
            </div>
            <div class="flex gap-2 max-w-xs">
              <svg
                width="24px"
                height="24px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300.988 300.988"
                style="enable-background:new 0 0 300.988 300.988;"
                xml:space="preserve"
                class="clocksvg"
              >
                <g>
                  <g>
                    <path
                      d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
        S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
        s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
                      fill="currentcolor"
                    />
                    <polygon
                      points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"
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
              <p>{data.activiteit.start.slice(11, 16)}</p>
            </div>
          </div>
          </div>
      </div>
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
