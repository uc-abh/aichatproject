<script>
    import Content from "../components/Content.svelte";
    import Dropdown from "../components/Dropdown.svelte";
    import Selectedmodelbox from "../components/Selectedmodelbox.svelte";
    import { selectText } from "../function/select";
    import { onMount } from "svelte";
    onMount(()=>{
        selectText();
    });
</script>
<main>
    <Content/>
    <Dropdown/>
    <Selectedmodelbox/>
</main>