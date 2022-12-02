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
</script>

<h2 class="text-2xl font-bold text-left m-4 text-center">Aankomende activiteiten</h2>
<!-- Main block div for all activities-->
<div class="block">
    {#each data.activiteiten.items as act}
        <div class="grid grid-cols-1 md:grid-cols-3 w-9/12 my-4 mx-auto px-4 py-3 align-middle gap-8 rounded-xl activiteit">
            <div>
                <a
                    href={"/activiteiten/" + act.slug}
                    class="hover:text-red-600">{act.titel}</a
                >
            </div>
            <div class="flex gap-2">
                <img src="/date.svg" alt="">
                <p>
                    {act.start.slice(8, 10)}
                    {maanden[act.start.slice(5, 7)]}
                    {act.start.slice(0, 4)}
                </p>
            </div>
            <div class="flex gap-2 max-w-xs">
                <img src="/clock.svg" alt="" class="w-6 h-6">
                <p>{act.start.slice(11, 16)}</p>
            </div>
        </div>
    {/each}
</div>

<!--Started using style tags for better oversight-->
<style>
    .activiteit {
        background-color: rgb(13,17,23);
    }
</style>