<script lang="ts">
	import NavButton from "../Components/Header/Nav/NavButton.svelte";
import { goto } from "$app/navigation";



</script>



<nav class="flex flex-row justify-evenly h-16 w-full bg-tetrinary">
    <NavButton navTo = "/"/>
    <NavButton navTo = "AboutMe"/>
    <NavButton navTo = "Write-ups"/>
    <NavButton navTo = "Something Else"/>
</nav>