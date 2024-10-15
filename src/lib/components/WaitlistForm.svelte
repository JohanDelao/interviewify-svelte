<script>
    import { supabase } from '../../lib/supabaseClient';
    import { LoaderCircle } from 'lucide-svelte';
    export let inverse;

    let email = "";
    let loading = false;

    async function handleSubmit() {
        loading = true;
        try {
            const { error } = await supabase
            .from('waitlist') 
            .insert([
                {
                    email_address: email
                }
            ]);
            if (error) {
                throw error;
            } else {
                email = "";
                loading = false;
            }
        } catch (error) {
            console.error(error)
            loading = false;
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="flex items-center h-11 gap-1 md:gap-4">
    <input bind:value={email} class={`h-full border-2 rounded-md border-[#e2e8f0] ${inverse === true ? "bg-transparent text-secondary placeholder-secondary/80" : ""} w-80 px-2 font-inter`} placeholder="Enter your email..." />
    <button type="submit" class={`h-full w-36 ${inverse === true ? "bg-secondary hover:bg-secondary/90 text-primary" : "bg-primary/85 hover:bg-primary text-white"} rounded-md font-inter transition-colors flex justify-center items-center`}>
        {#if loading === true}
            <LoaderCircle class="animate-spin w-5 h-5" />
        {:else}
            Join Waitlist
        {/if}
    </button>
</form>