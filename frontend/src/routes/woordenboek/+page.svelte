<script>

    export let data;
</script>

<div class="maxwidth mx-auto">
    {#each data.woordenboek.items as woord}
        <div class="flex flex-row gap-8">
            <p>{woord.woord}</p>
            <p>{woord.beschrijving}</p>
        </div>
    {/each}
</div>