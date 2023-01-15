<script>
  import "../app.postcss";
  import { popper } from "@popperjs/core";
  import "@popperjs/core";
  import "iconify-icon";
  import { Alert } from "flowbite-svelte";

  // Components
  import Nav from "../lib/layout/Nav.svelte";
</script>

<!---------------------------------------------------------------------------------------->

<Nav />

<main class="w-[100vw] px-4 pt-2 lg:px-12">
  <Alert
    color="yellow"
    class="flex justify-center w-full mx-auto mt-4 rounded-sm mb-8"
    accent
  >
    <div class="flex items-center">
      <p>
        <span class="font-medium">Sample Site : </span>frequently updated, check
        out my github
      </p>
      <iconify-icon
        class="px-2"
        icon="fa-regular:hand-pointer"
        rotate="90deg"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/marcusgeorgievski"
        class="mr-4"
        ><iconify-icon
          icon="mdi:github"
          class="justify-self-end text-[2rem]"
        /></a
      >
    </div>
  </Alert>

  <slot />
</main>

<!---------------------------------------------------------------------------------------->
<style>
  main {
    padding-bottom: 8rem;
  }
</style>
