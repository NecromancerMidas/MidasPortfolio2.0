<!-- <script lang="ts">
//import minion from 'src/static/img/ConstructionMinions.webp';

</script>


<main class="h-full mb-24">
    <div class="text-center text-4xl mt-8 mb-8">Website under construction check back soon!</div>
    <img class=" justify-self-center" src='/img/ConstructionMinions.webp' alt="undead minion construction"/>

</main> -->

<script lang="ts">
    export let alias: string = "Necromancer Midas";
    export let bio: string = "I'm a security enthusiast currently studying in infosec, this website will be used to post interesting finds trough my blog and writeups of particular interesting boxes or ctfs.";
    export let skills: string[] = ["maybe later"];
    export let profileImage: string = "img/Formatted_Necromancer_Hacker_Image.png"; // Replace with your image URL
  </script>
  
  <div class="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg">
    <div class="flex flex-col items-center text-center">
      <img src={profileImage} alt={alias} class="w-32 h-32 rounded-full shadow-md" />
      <h1 class="text-3xl font-bold mt-4">{alias}</h1>
      <p class="mt-2">{bio}</p>
    </div>
    </div>
  