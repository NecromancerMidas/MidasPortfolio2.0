<script lang="ts">
import { goto } from "$app/navigation";
export let navTo: string | URL;
const navigation = (navTo: string | URL) => {

goto(navTo);
}



</script>


<button on:click={() => navigation(navTo)}></button>