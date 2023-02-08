
<script> 
import Dropdown from "./Dropdown.svelte";
export let menu_data;
    export let show = false;
export let selected_content;
import { selectText } from "../function/select";
    import { onMount } from "svelte";
    onMount(()=>{
        selectText();
    });
</script>
<main>
    {#if show}
    <div class="position-fixed top-50 start-50 d-flex justify-content-center align-items-center w-100 h-100"
    style="transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.3);" id="selected_modalbox d-flex ">
        <div class="card w-75 mx-auto mt-5 shadow p-3 mb-5 bg-white rounded">
            <div class="container">
                <div class="m-2">
                    <i class="bi bi-filetype-ai text-secondary"></i>
                    <span class="text-secondary mx-2">{menu_data}</span>
                </div>
                {#if selected_content}
                <div class="border border-1 rounded p-2 form-control text-dark mh-100" contenteditable="true" >
               
                    <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aut eius sunt ipsa deleniti officia sed. Harum, itaque natus vitae consequuntur molestiae totam. Consequuntur explicabo quos odit libero magni voluptatem?</li>
                    <li>Nam magnam voluptatem reiciendis excepturi ipsam consequatur nihil! Ipsa minima sequi blanditiis harum sit, repudiandae repellendus expedita repellat, architecto cupiditate asperiores quas corrupti quis molestias ea tempore assumenda, deleniti adipisci.</li>
                    <li>Aliquid, accusamus optio itaque animi possimus nisi? Quisquam iure earum ea distinctio ab officia tenetur dignissimos hic omnis? Fuga eos, rerum quasi commodi officiis eaque laboriosam molestiae numquam reiciendis voluptatem?</li>
                
                    
                    </ul>
                </div>
                {:else}
                <textarea name="" id="" cols="30" rows="7" style="width:100%" class="border border-1 rounded p-2 form-control text-dark"></textarea>
                {/if}
                
            </div>
            <div class="card-body pb-0">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" class="btn btn-primary btn-sm border border-1 mx-1 ">Keep  <i class="bi bi-arrow-return-left"></i></a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" class="btn btn-light btn-sm border border-1 mx-1">Try again <i class="bi bi-r-circle"></i></a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" class="btn btn-light btn-sm border border-1 mx-1" on:click={()=>(show=false)}>Discard <i class="bi bi-escape"></i></a>
            </div>
        </div>
    </div>
    {/if}
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

