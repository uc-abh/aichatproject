<script>
    import Content from "../components/Content.svelte";
    import Dropdown from "../components/Dropdown.svelte";
    import Selectedmodelbox from "../components/Selectedmodelbox.svelte";
    let getAISupport;
</script>
<main>
    <Content bind:handleClick={getAISupport}/>
    
    <button class="unselected_button" on:click={getAISupport}>Button for unselected content</button>
    <div class="container">
        <br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum saepe pariatur tempora, in, molestias aperiam alias laudantium, beatae exercitationem unde consequatur error harum mollitia earum reprehenderit laborum quos ducimus consectetur?
        </p>
    </div>
</main>