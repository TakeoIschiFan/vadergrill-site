<script>
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

  export function isPast(date) {
    const today = new Date();
    let actdate = new Date(date);
    return actdate < today;
  }

  export function isTodayorFuture(date) {
    const today = new Date();
    let actdate = new Date(date);
    return actdate >= today;
  }
</script>

<div class="maxwidth content-center h-screen">
  <!--Aankomende activiteiten-->
  <h2 class="text-2xl font-bold text-left m-4 text-center">
    Aankomende activiteiten
  </h2>
  <div class="block">
    {#each data.activiteiten.items as act}
      {#if isTodayorFuture(act.start.slice(0,10))}
      <a href={"/activiteiten/" + act.slug}>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-auto px-4 py-3 align-middle gap-8 rounded-xl activiteit"
        >
          <div>
            <p>{act.titel}</p>
          </div>
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
              {act.start.slice(8, 10)}
              {maanden[act.start.slice(5, 7) - 1]}
              {act.start.slice(0, 4)}
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
            <p>{act.start.slice(11, 16)}</p>
          </div>
        </div>
      </a>
      {/if}
    {/each}
  </div>
  <!--Voorbije activiteiten-->
  <h2 class="text-2xl font-bold text-left m-4 text-center">
    Voorbije Activiteiten
  </h2>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
    {#each data.activiteiten.items as act}
      {#if isPast(act.start.slice(0,10))}
      <a href={"/activiteiten/" + act.slug}>
        <div
          class="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-auto px-4 py-3 align-middle gap-8 rounded-xl activiteit"
        >
          <div>
            <p>{act.titel}</p>
          </div>
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
              {act.start.slice(8, 10)}
              {maanden[act.start.slice(5, 7) - 1]}
              {act.start.slice(0, 4)}
            </p>
          </div>
        </div>
      </a>
      {/if}
    {/each}
  </div>
</div>

<!--Started using style tags for better oversight-->
<style>
  .activiteit {
    background-color: rgb(13, 17, 23);
  }

  .activiteit:hover {
    background-color: rgb(90, 1, 1);
    transition: 400ms;
    transform: scale(1.03);
  }

  .datesvg {
    color: white;
  }
</style>
