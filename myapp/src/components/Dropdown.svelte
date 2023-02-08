<script>
    import Selectedmodelbox from "./Selectedmodelbox.svelte";
    function closeDropdown(){
        let dropdown1=document.querySelector(".dropdown1");
        dropdown1.style.display = "none";
    }
    let show = false;
    
</script>
    <div class="dropdown1">
        <div class="dropdown-menu2">
            <div class="menu"> 
          <a href="#">Summarize</a>
          <div class="sub_menu">
            <a href="#" id="bullet_point" on:click={() => (show=true)} on:click={closeDropdown}>Bullet point</a>
            <a href="#">key points</a>
            <a href="#">for ppt
            </a>
            <a href="#">less verbose</a>
          </div>
        </div>
          <a href="#">blog post</a>
          <a href="#">pros and cons list</a>
          <a href="#">outline</a>
          <a href="#">improve writing</a>
          <a href="#">explain this</a>
          <a href="#">make longer</a>
          <a href="#">make sorter</a>
          <a href="#">outline</a>
          
        </div>
      </div>

      <Selectedmodelbox bind:show={show} />

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