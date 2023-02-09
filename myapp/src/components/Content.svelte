<script>
    import Dropdown from "./Dropdown.svelte";
	import Selectedmodelbox from "./Selectedmodelbox.svelte";
    import { getTextSelected, openAISupportDropdown } from "../function/select";
	import { onDestroy, onMount } from "svelte/internal";
    
    
    let selected_content='';
    let showModal = false;
    let menu_data = '';
    let showDropdown = false;
    
    export const handleClick = event => {
        event.stopPropagation();
        menu_data = '';
        showDropdown = true;
        selected_content = getTextSelected();
        openAISupportDropdown(event);
    }
    const closeDropdown = data => {
        menu_data=data;
        showDropdown = false;
        showModal=true;
    }
    const resetParams = () => {
        menu_data = '';
        showModal = false;
        showDropdown = false;
        selected_content = '';
    }
    onDestroy(() => resetParams());
    onMount(() => {
        document.body.addEventListener('click', () => {
            resetParams();
        });
    });

</script>

<Dropdown bind:selected_content {closeDropdown} bind:showDropdown/>
{#if showModal}
    <Selectedmodelbox bind:show={showModal} {menu_data} {selected_content}/>
{/if}