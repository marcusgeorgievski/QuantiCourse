<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DropdownDivider, Avatar } from 'flowbite-svelte'
  import { userData } from '../../Store'

  // Get user data from store
  let user;
  const unsubscribe = userData.subscribe((value) => user = value)
  
</script>
<!---------------------------------------------------------------------------------------->


<Navbar let:hidden let:toggle color="form" class="border-b-2 border-slate-300 rounded-none">

    <!-- LOGO -->
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">QuantiCourse</span>
  </NavBrand>

  <NavHamburger on:click={toggle} /> <!-- HAMBURGER -->

  <!-- NAV list -->
  <NavUl {hidden}>

    <!-- NAV options -->
    <NavLi  id="nav-menu1" class="cursor-pointer"><Chevron aligned>Courses</Chevron></NavLi>
    <NavLi on:click={toggle} href="/assessments">Assessments</NavLi>
    <NavLi on:click={toggle} href="/about">About</NavLi>
    <NavLi on:click={toggle} href="/contact">Contact</NavLi>
    <NavLi on:click={toggle} href="/{user.name.toLowerCase().replace(/\s/g, '')}"><Avatar class="bg-gray-700 text-white" size="xs">{user.name[0]}</Avatar></NavLi>

    <!-- DROPDOWN: Courses -->
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
    {#each user.courses as course}
        <DropdownItem on:click={toggle} href="/courses/{course.code.replace(/\s/g, '')}">{course.code}</DropdownItem>
    {/each}
      <DropdownDivider />
      <DropdownItem on:click={toggle} href="/courses">All classes</DropdownItem>
      <DropdownItem on:click={toggle}>+ Add Class</DropdownItem>
    </Dropdown>

  </NavUl>
</Navbar>

<!---------------------------------------------------------------------------------------->
