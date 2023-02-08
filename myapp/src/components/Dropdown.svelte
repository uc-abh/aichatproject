<script>
    import Selectedmodelbox from "./Selectedmodelbox.svelte";
    let menu_data;
    export let selected_content;
    console.log(selected_content)
    function closeDropdown(data){
        menu_data=data;
        // console.log(menu_data)
        let dropdown1=document.querySelector(".dropdown1");
        dropdown1.style.display = "none";
        show=true;
    }
    let show = false;
    
</script>
    <div class="dropdown1">
        <div class="dropdown-menu2">
            <div class="menu"> 
          <a href="#">Summarize</a>
          <div class="sub_menu">
            <a href="#" id="bullet_point" on:click={()=>closeDropdown('bullet_point')} >Bullet point</a>
            <a href="#" on:click={()=>closeDropdown('key_points')}>key points</a>
            <a href="#"on:click={()=>closeDropdown('PPT')} >for ppt
            </a>
            <a href="#" on:click={()=>closeDropdown('Less_verbose')}>less verbose</a>
          </div>
        </div>
          <a href="#" on:click={()=>closeDropdown('Blog_post')}>blog post</a>
          <a href="#" on:click={()=>closeDropdown('Pros_and_cons')}>pros and cons list</a>
          <a href="#" on:click={()=>closeDropdown('Outline')}>outline</a>
          <a href="#" on:click={()=>closeDropdown('Improve_writing')}>improve writing</a>
          <a href="#" on:click={()=>closeDropdown('Explaination')}>explain this</a>
          <a href="#" on:click={()=>closeDropdown('Detailing')}>make longer</a>
          <a href="#" on:click={()=>closeDropdown('Summary')}>make sorter</a>
          
        </div>
      </div>

      <Selectedmodelbox bind:show={show} {menu_data} {selected_content}/>

<style>

  .dropdown1 {
      position: absolute;
      display: none;
      z-index: 1;
    }

    .dropdown-menu2 {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
    }

    .dropdown-menu2 a {
      display: block;
      padding: 10px 20px;
      text-decoration: none;
      color: #333;
    }

    .dropdown-menu2 a:hover {
      background-color: #f5f5f5;
    }
    .sub_menu{
        width: 150px; /* Increased width */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
  position: absolute; top: 0; left: 100%;
  display: none;     
      
    }
    .sub_menu a {
      display: block;
      padding: 10px 20px;
      text-decoration: none;
      color: #333;
    }
    .sub_menu a:hover {
      background-color: #f5f5f5;
     
    }
    .menu:hover .sub_menu {
  display: block;
}
</style>