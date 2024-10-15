<script>
    import "../app.css";
    import Navbar from "../lib/components/Navbar.svelte";
</script>

<div class="flex flex-col">
    <Navbar />
    <slot />
</div>
