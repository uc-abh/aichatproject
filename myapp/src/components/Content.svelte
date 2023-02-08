<script>
    import { selectText } from "../function/select";
    import Dropdown from "./Dropdown.svelte";
    import { onMount } from "svelte";
    onMount(()=>{
        selectText();
    });
    let selected_content=true;
    function handleclick(){
        selected_content=false;
    }
</script>
<div class="container"> <h1>Ucertify</h1>
    <button class="unselected_button" on:click={handleclick}>Button for unselected content</button>
    <br>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum saepe pariatur tempora, in, molestias aperiam alias laudantium, beatae exercitationem unde consequatur error harum mollitia earum reprehenderit laborum quos ducimus consectetur?
Aspernatur deleniti voluptas natus blanditiis. Soluta illo consectetur corporis minus natus saepe necessitatibus! Et veritatis at maiores nostrum repellendus mollitia, tempore dolore suscipit officiis minus, illo corrupti nemo perspiciatis ducimus?
Quidem distinctio beatae porro, tempora nostrum earum quibusdam exercitationem molestias facere. Nulla dignissimos amet fugiat. Accusantium sequi numquam, dolor odit quia laboriosam sunt suscipit, in esse, deserunt et eum? Odit?
Harum vitae voluptates possimus illum cumque beatae porro pariatur ratione repudiandae ea repellat accusantium dolor consequatur, necessitatibus recusandae provident voluptatibus? Tenetur ea facere odit ullam impedit eligendi ipsa ut repellat?
Perferendis facilis repellat tempora laborum nostrum optio praesentium maxime! Fugiat, similique pariatur facilis unde reprehenderit earum necessitatibus laboriosam id non a tempora voluptates, rerum animi ab consequatur, sint blanditiis assumenda.
Corporis dolores dolore repellendus. Facilis debitis ex consequuntur quo? Possimus cumque, sint, voluptas id culpa ipsam nemo quos autem numquam consequuntur officiis atque quibusdam corporis, aliquid recusandae molestiae. Consectetur, fugiat.
At ipsum, iusto quo natus perspiciatis ducimus impedit ex rem? Aliquid expedita architecto qui. Saepe quibusdam libero suscipit et blanditiis soluta commodi hic eaque corporis neque quam, maiores veniam. Molestias!
Neque pariatur quia voluptatem ad suscipit unde ipsum adipisci labore id cupiditate, consectetur expedita modi soluta ut optio. Cupiditate officia repellat deleniti, eligendi ullam recusandae nam alias sunt magnam itaque?
Libero, assumenda dignissimos rerum tempore ducimus distinctio consectetur unde sed facere doloribus voluptates quos suscipit vitae. Repellendus dolores officiis iste placeat eveniet, iusto nesciunt velit tempore voluptas culpa totam veritatis.
Officiis laboriosam placeat a earum natus magnam. Dolorem quae minus totam earum omnis quis ullam voluptate eos. Ad, vel ipsum necessitatibus, provident in ea reiciendis, aut porro veritatis natus quaerat.
<br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero possimus dicta. Ea esse fugiat at voluptates qui delectus libero omnis in explicabo consectetur sint, expedita quos et aperiam itaque.
</div>
<Dropdown {selected_content}/>