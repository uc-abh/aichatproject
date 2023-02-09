
<script> 
import { onMount } from "svelte/internal";

export let menu_data;
export let selected_content;
export let show;

let showingOutputModal = false;
let  outputData = '';
let inputData = '';
onMount(() => {
    if(selected_content) {
        showingOutputModal = true;
        inputData = selected_content;
    } else {
        showingOutputModal = false;
    }
});

const showOutput = () => {
    outputData = 'Output data will come here.';
    showingOutputModal = true;
}

const DataSaving=()=>{

}

</script>
<main>
    <div class="position-fixed top-50 start-50 d-flex justify-content-center align-items-center w-100 h-100"
    style="transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.3);" id="selected_modalbox d-flex ">
        <div class="card w-75 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded" on:click|stopPropagation>
            <div class="container">
                <div class="mb-2">
                    <i class="bi bi-filetype-ai text-secondary"></i>
                    <span class="text-secondary mx-2">{menu_data}</span>
                </div>
                {#if showingOutputModal}
                    <p class="text-secondary small">{inputData}</p>
                    <textarea name="" id="" cols="30" rows="5" style="width:100%" class="border border-1 rounded p-2 form-control text-dark">{outputData}</textarea>
                {:else}
                    <textarea name="" id="" cols="30" rows="5" style="width:100%" class="border border-1 rounded p-2 form-control text-dark" bind:value={inputData}></textarea>
                {/if}
                
            </div>
            <div class="card-body pb-0">
                {#if showingOutputModal}
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#" class="btn btn-primary btn-sm border border-1 mx-1 ">Keep  <i class=" icomoon-enter-4"></i></a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#" class="btn btn-light btn-sm border border-1 mx-1">Try again <i class=" icomoon-new-24px-retry-1"></i></a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#" class="btn btn-light btn-sm border border-1 mx-1" on:click={()=>(show=false)}>Discard <i class="icomoon-new-24px-exhibit-1"></i></a>
                    <a href="#" class="btn btn-light btn-sm border border-1 mx-1" on:click={()=>(show=false)}>Prompt </a>
                {:else}
                    <button class="btn btn-primary btn-sm" on:click={showOutput}>Generate</button>
                    <button class="btn btn-light btn-sm border border-1 mx-1" on:click={DataSaving}>Close</button>
                {/if}
            </div>
        </div>
    </div>
</main>
<style>
    #selected_modalbox{
        display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    }
</style>

