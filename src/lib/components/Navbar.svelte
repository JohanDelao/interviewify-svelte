<script>
    import { SquareMenu, X } from 'lucide-svelte';
    import { isMobileNavOpen } from '../../stores/stores';

    // function scrollIntoView({ target }) {
	// 	const el = document.querySelector(target.getAttribute('href'));
	// 	if (!el) return;
    //     el.scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // }
</script>

<div class={`h-20 p-2 lg:p-4 flex items-center justify-between w-[calc(100vw-0.5rem)] lg:w-full max-w-screen-2xl mx-auto relative transition-colors ${$isMobileNavOpen ? "bg-primary" : ""}`}>
    <div class="flex items-end gap-10">
        <a href="/" class={`font-semibold text-3xl no-underline font-urbanist ${$isMobileNavOpen ? "text-secondary" : "text-primary"}`}>interviewify</a>
        <!-- <a href="/about-us" class="text-base text-slate-500/70 hover:text-slate-500 mb-1 transition-colors hidden md:block">About Us</a>
        <a href="#featureSection" class="text-base text-slate-500/70 hover:text-slate-500 mb-1 transition-colors hidden md:block" on:click|preventDefault={scrollIntoView}>Features</a> -->
    </div>
    <!-- <button class="m-4 block md:hidden" on:click={() => isMobileNavOpen.update((open) => !open)}>
        <div class={`w-10 h-10 rounded-md flex justify-center items-center`}>
            {#if $isMobileNavOpen}
                <X class="w-8 h-8 text-secondary" />
            {:else}
                <SquareMenu class="w-8 h-8 text-primary" />
            {/if}
        </div>
    </button>
    <div class={`absolute top-full left-0 w-full bg-primary transition-transform origin-top ${$isMobileNavOpen ? "scale-y-100" : "scale-y-0"}`}>
        <div class="w-full h-full flex flex-col gap-6 px-4 pb-4">
            <a href="About Us" class="text-white">About Us</a>
            <a href="#featureSection" class="text-white" on:click|preventDefault={(e) => {
                scrollIntoView(e)
                isMobileNavOpen.update((open) => !open)
            }}>
                Features
            </a>
        </div>
    </div> -->
</div>