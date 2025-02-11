<script lang="ts">
    import { page } from "$app/stores";
	import FlagButton from "../Components/Header/FlagButton.svelte";
    const flags:string[] = ['gb','no','nl']
    // import HeaderPicture from '../assets/img/HeaderPicture.png';
    // import NorwegianFlag from '../assets/img/Flag_of_Norway.png';
    // import BritishFlag from '../assets/img/Flag_of_the_United_Kingdom_(1-2).png';
    // import DutchFlag from '../assets/img/vlag-nederland.png';
    // import { LanguageContext } from './LanguageContext'; // Assuming LanguageContext is available as a Svelte context
    // import { getContext } from 'svelte';
    // import classnames from 'classnames';
    // import styles from '../StyleSheets/Header.module.css';
    // import { t } from 'svelte-i18next';

    // // Access the language context
    // const { language, changeLanguage } = getContext(LanguageContext);

    // // Language change handler
    // function handleLanguageChange(lang) {
    //     changeLanguage(lang);
    //     console.log(language);
    // }
    
</script>

<header id="Home" class="flex bg-secondary">
    <!-- <img src={HeaderPicture} alt="Header" class={styles.HeaderPicture} /> -->
    <!-- <h1>{t('title')}</h1> -->
     <div id="Header Container" class="flex h-full w-full justify-between py-5 px-5 border-b-2 border-b-black ">
        <div class="w-1/4"></div>
        <div class="w-1/2 flex justify-center">
            <h1 class="self-center text-4xl">Placeholder</h1>
        </div>
    <div id="RightHeaderToolBar" class="flex flex-col w-1/4 items-end">
        <div id="ColorSelection" class="flex flex-row">
            <h4>Color Mode: </h4>
            <label>
                <input type="checkbox"/>
                <span></span>
            </label>
        </div>
        <div class="flex flex-row pt-8w">
            {#each flags as country}
            <FlagButton {country}/>
            {/each}
            <!-- <button class="fi fi-gb"/>
              <button class="fi fi-no"/>
              <button class="fi fi-nl" /> -->
                <!-- on:click={() => handleLanguageChange("en")} -->
            
            <!--
            <img
                src={NorwegianFlag}
                alt="Norwegian"
                class={styles.Flags}
                on:click={() => handleLanguageChange("no")}
            />
            <img
                src={DutchFlag}
                alt="Dutch"
                class={styles.Flags}
                on:click={() => handleLanguageChange("nl")}
            />
            -->
        </div>
    </div>
</div>
</header>