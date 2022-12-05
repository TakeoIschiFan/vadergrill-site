<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!--Backwards arrow-->
<div class="m-4">
  <a href="/activiteiten">
    <svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 477.175 477.175"  style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve" width="40px" height="40px">
<g>
	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="currentcolor"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></a
  >
</div>

<h1 class="text-3xl font-bold underline text-center">
  {data.activiteit.titel}
</h1>

<!--Beschrijving div-->
<div class="m-4 divbox rounded-2xl">
<h2 class="my-4 text-2xl font-bold">Beschrijving</h2>
<p class="mb-4">{data.activiteit.beschrijving}</p>
</div>

<style>
  #arrow {
    color: white;
  }

  #arrow:hover {
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
