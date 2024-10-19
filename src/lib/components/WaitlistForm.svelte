<script>
  import { Check, LoaderCircle, X } from "lucide-svelte";
  import { enhance } from "$app/forms";
  export let inverse;

  let loading = false;
  let status = "idle";
</script>

<form
  method="POST"
  class="flex items-center h-11 gap-1 md:gap-4"
  use:enhance={() => {
    loading = true;
    return ({ result, update }) => {
        // Set invalidateAll to false if you don't want to reload page data when submitting
        update({ invalidateAll: false }).finally(async () => { 
            loading = false;
            if (result.data.success){
                status = "success"
                setTimeout(() => {
                    status = "idle"
                }, 1000)
            } else if (result.data.success === false) {
                status = "fail"
                setTimeout(() => {
                    status = "idle"
                }, 1000)
            }
        });
    };
}}
>
  <input
    name="email"
    type="email"
    class={`h-full border-2 rounded-md border-[#e2e8f0] ${inverse === true ? "bg-transparent text-secondary placeholder-secondary/80" : ""} w-80 px-2 font-inter`}
    placeholder="Enter your email..."
    disabled={loading | status !== "idle"}
  />
  <button
    type="submit"
    disabled={loading | status !== "idle"}
    class={`h-full w-36 ${status === "success" ? "bg-green-500 text-white" : status === "fail" ? "bg-red-500 text-white" : inverse === true ? "bg-secondary hover:bg-secondary/90 text-primary" : "bg-primary/85 hover:bg-primary text-white"} rounded-md font-inter transition-colors flex justify-center items-center`}
  >
    {#if loading === true}
      <LoaderCircle class="animate-spin w-5 h-5" />
    {:else if status === "success"}
      <Check class="w-5 h-5" />
    {:else if status === "fail"}
      <X class="w-5 h-5" />
    {:else}
      Join Waitlist
    {/if}
  </button>
</form>
