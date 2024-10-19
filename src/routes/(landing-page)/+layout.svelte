<script>
    import "../../app.css";
    import Navbar from "../../lib/components/Navbar.svelte";
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';
 
    inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex flex-col">
    <Navbar />
    <slot />
</div>
