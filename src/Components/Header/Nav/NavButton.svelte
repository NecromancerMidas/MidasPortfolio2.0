<script lang="ts">
import { goto } from "$app/navigation";
export let navTo: string | URL;
let navToString;
const navigation = (navTo: string | URL) => {

goto(navTo);
}

if(navTo === "/"){
navToString = "Home"
}
else{
    navToString = navTo.toString().replace("/", "")
}

</script>


<button class="button49 self-center h-12 mx-1" on:click={() => navigation(navTo)}>{navToString}</button>

<style>
.button49,
.button49:after {
  padding: 1px 3px;
  display: flex;
  align-items: center;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, var(--QuaternaryColor) 5%, var(--CodeColor) 5%);
  border: 2px black;
  color: var(--StringColor);
  box-shadow: 6px 0px 0px var(--StringColor);
  text-shadow: 1px 0.7px 2px var(--QuaternaryColor);
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button49:focus,.button49.active{
  background: linear-gradient(45deg, var(--StringColor) 3%, var(--StringColor) 5%, var(--CodeColor) 5%);
  color: var(--QuaternaryColor);
  text-shadow:1px 0.7px 2px var(--StringColor);
  box-shadow: 6px 0px 0px var(--QuaternaryColor);
}
/* .button49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(5% 9% 60% 10%);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: attr(contentText);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, var(--QuaternaryColor) 3%, var(--QuaternaryColor) 5%, var(--CodeColor) 5%);
  text-shadow: -3px -3px 0px var(--QuaternaryColor), 3px 3px 0px var(--StringColor);
  clip-path: var(--slice-0);
} */
.button49:hover{
  cursor: pointer;
  color:var(--PrimaryColor)
}
.button49:hover:after {
  animation: 1.8s glitch infinite;
  animation-timing-function: steps(2, end);
}

.button49:hover:focus:after,.button49.active:hover:after {
animation: none;
}

/* @keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
} */

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 200px;
    height: 86px;
    line-height: 88px;
  }
}
</style>
