<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    export let open;
</script>

{#if open}
    <div class="menu">
        <div class="cell">
            <h1>Denis Protopopov</h1>
            <p>Artist, Developer, Independent Journalist. My work has been exhibited in various notable venues such as Ars Electronica and the Hermitage, in the form of websites, mobile apps, and games. </p>
    </div>
</div>
    <div class="bar" transition:scale={{ duration: 10, easing: quadOut, opacity: 1 }} />
{/if}

<style>
    .menu {
        position: absolute;
        z-index: 7;
        text-align: left;
        font-size: 1.5em;

        padding: 1em;
        padding-top: 0;
        color: #eef;
    }
    p {


        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    h1 {
           
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

    .bar {

        height: 0;
    }
    .cell {
            max-width: 70%;
            justify-content: center;
            border-radius: 16px;
            background-color: #181818;
            transition: background-color 200ms;
            margin: 0 clamp(2px, 1vw, 6px);
            padding: 16px clamp(8px, 4vw, 20px);
        }
</style>