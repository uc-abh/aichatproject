
<script> 
    import { empty, onMount } from "svelte/internal";
    // import API from '../../src/api/api';
    import { formatData, handleMouseDown } from './util';
    
    export let menu_data;
    export let selected_content;
    export let show;
    
    let showingOutputModal = false;
    let  outputData = '';
    let inputData = '';
    let chat = [];
    let chatMode = false;
    let requirederror="";
    let isExpanded = false;
    
    const getOutputData = async str => {
        const query = chatMode? str: `${menu_data} ${str}`;
        console.log(query);
        const where = {query , analysis_type: 4};
        // let res = await API.getAPIDataJ('cat2.item_analysis_get', where);
        // res = res?.response;
        return "This is output data." || 'Something went wrong';
    }
    let loadingData = false;

    const updateChat = (string, byUser) => {
        chat = [...chat, {txt: string, user: byUser}];
    }
    onMount(async () => {
        if(selected_content) {
            showingOutputModal = true;
            loadingData = true;
            inputData = selected_content;
            outputData = await getOutputData(selected_content);
            updateChat(selected_content, 1);
            loadingData = false;
            
        } else {
            showingOutputModal = false;
        }

        if(menu_data == 'prompt') {
            chatMode = true;
        }
    });
    
    const showOutput = async () => {
        if(inputData===""){
            requirederror="Input is required !";
           document.getElementById("textarea_content");
           textarea_content.focus();
          return false;
        }
        else{
            requirederror="";
        }
    
        showingOutputModal = true;
        loadingData = true;
        updateChat(inputData, 1);
        outputData = await getOutputData(inputData);
        inputData = '';
        loadingData = false;
    }
    
    const addOutputData = () => {
        updateChat(outputData, 0);
        outputData = '';
        inputData = '';
        showingOutputModal = false;
        
    }
    const copyToClipboard = text => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
    function changeIconToText(text_data, event){
        let new_node = event.target;
        new_node.innerHTML = "copied";
        setTimeout(function() {
            new_node.innerHTML = "";
        }, 2000);
        copyToClipboard(text_data)
    }
      function toggleSize() {
    isExpanded = !isExpanded;
  }
    
   
    </script>
    <main>
        <div class="position-absolute  d-flex justify-content-center align-items-center modelbox" 
        id="selected_modalbox d-flex " >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div  on:click|stopPropagation>
            <div class="card mx-auto  shadow  bg-white rounded" style="{` width: ${isExpanded ? '100vw' : '500px'}`}" on:click|stopPropagation>
                <div class="mb-4 bg-primary rounded-top d-flex align-items-center justify-content-between header" on:mousedown={handleMouseDown}  style="height:35px; Cursor:pointer">
                    <div class="d-flex">
                    <i class="bi bi-filetype-ai text-white ml-2 "></i>
                    <span class="text-white ml-1">AI Support</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="bi bi-fullscreen text-white mr-2 cursor:pointer" id="full-screen-button" on:click={toggleSize}></i>
                    <i class="bi bi-x text-white " style="font-size: 30px; cursor:pointer" on:click={()=>(show=false)}></i>
                </div>
                </div>
                <div class="container content">
                    <div class="overflow-auto" style="{`max-height: ${isExpanded ? '350px' : '200px'}`}">
                        {#each chat as item}
                            <div class="d-flex {item.user?'justify-content-end': 'justify-content-start'}" style="{`font-size: ${isExpanded ? '20px' : ''}`}">
                                <p class="historyChat text-dark small border  {item.user ? 'bg-white': 'bg-light'} p-1 rounded w-75 d-flex justify-content-between position-relative">
                                    <span class=" mr-1">{item.txt}</span> 
                                    <button id="copyBtn" class="btn p-0 position-absolute copyBtnPosition" on:click={()=>changeIconToText(item.txt,event)}  >
                                    <i class="bi bi-clipboard " ></i>
                                    </button></p>
                                
                            </div>
                        {/each}
                    </div>
                    {#if showingOutputModal}
                        <div class="p-2 border border-1 rounded position-relative overflow-auto" style="min-height: 130px; max-height: 150px; font-size: 12px;">
                            {#if loadingData}
                                <div class="spinner-wrapper">
                                    <div id="center" style="position:absolute;top:46%;left:47%;z-index:60000;">
                                        <div class="sk-spinner sk-spinner-three-bounce spinner-sm">
                                            <div class="sk-bounce1"></div>
                                            <div class="sk-bounce2"></div>
                                            <div class="sk-bounce3"></div>
                                        </div>
                                    </div>
                                </div>
                            {:else}
                            <div style="font-size:14px">
                                {@html formatData(outputData)}
                            </div>
                            {/if}
                        </div>
                    {:else}
                        <textarea name="" id="textarea_content" cols="30" rows="{chatMode? 3: 5}" placeholder="Enter input." style="width:100%" class="border border-1 rounded p-2 form-control text-dark" bind:value={inputData}></textarea>
                        <span id="error" style="color:red; font-size:13px;" >{requirederror}</span>
                    {/if}
                    <div class="pt-2 pb-2">
                        {#if showingOutputModal}
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <button class="btn btn-primary btn-sm border border-1 my-1">Keep <i class="icomoon-enter-4"></i></button>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <button class="btn btn-light btn-sm border border-1 ms-1 my-1" on:click={() => showingOutputModal = false}>Try again<i class="icomoon-new-24px-retry-1"></i></button>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <button class="btn btn-light btn-sm border border-1 ms-1 my-1" on:click={()=>(show=false)}>Discard <i class="icomoon-new-24px-exhibit-1"></i></button>
                            <button class="btn btn-secondary btn-sm ms-1 my-1" on:click={addOutputData}>Prompt</button>
                        {:else}
                            <button class="btn btn-primary btn-sm border border-1 my-1" on:click={showOutput}>Generate</button>
                            <button class="btn btn-light btn-sm border border-1 mx-1 my-1" on:click={()=>(show=false)}>Close</button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </main>
    <style>
        #selected_modalbox{
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            overflow: auto;
            background-color: rgb(190 190 195 / 0.5);
        }
        .spinner-wrapper {
            opacity: 0.5;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 9999;
            background-color: rgb(190 190 195 / 0.5);
        }
        .sk-spinner-three-bounce.sk-spinner {
        margin: 0 auto;
        width: 70px;
        text-align: center;
        }
        .sk-spinner-three-bounce div {
        width: 20px;
        height: 20px;
        background-color: black;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
        animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
        /* Prevent first frame from flickering when animation starts */
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        opacity: 0.5;
        }
        .sk-spinner-three-bounce .sk-bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
        }
        .sk-spinner-three-bounce .sk-bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
        }
        @-webkit-keyframes sk-threeBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        }
        @keyframes sk-threeBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        }
        .copyBtnPosition{
            /* display: none; */
            opacity: 0.5;
            right: 0; 
            top: 50%; 
            transform: translate(-30%,-50%);
            cursor: pointer;
        }
        .historyChat:hover .copyBtnPosition {
            /* display: block; */
            opacity: 1;
        }

    .full_screen {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    </style>
    
    