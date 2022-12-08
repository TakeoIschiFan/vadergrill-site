<script lang="ts">
    export let functie: string;
    export let functie2: string;
    export let naam: string;
    export let image: string?
</script>
<div class="relative z-10 bg-black rounded-lg right-0.5 praesidiumkaart">
<div class="grid grid-cols-2 gap-1">
    <img
    src="/testfoto.jpg"
    alt=""
    class="relative z-10 inset-0 w-full h-full object-cover rounded-lg bg-red-100"
    loading="lazy"
    />
    <div class="ml-5 mt-5">
    <h1 class="relative w-full flex text-2xl font-semibold text-white">
        {functie}
    </h1>
    <h3 class="relative w-full flex text-m font-light text-white">
         {functie2}
    </h3>
    <h2 class="relative w-full flex text-xl font-light text-white">
        {naam}
   </h2>
   </div>
</div>
</div>

<style>
    .praesidiumkaart:hover {
        transform: scale(1.05);
        transition: 400ms ease-in-out;
    }
</style>