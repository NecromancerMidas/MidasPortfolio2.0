<script lang="ts">
export let country: string;
function handleClick() {
    if (country !== 'gb') {
      alert(`${country.toUpperCase()} has not been added yet`);
    }
  }
  </script>
  
  <button class="fi fi-{country} border bg-cover h-8 w-12 mx-1 hover:opacity-75 hover:border-black" on:click={handleClick}></button>