<script>
  import {  Heading, P, Button } from 'flowbite-svelte'
  import CourseCard from '../../../lib/cards/CourseCard.svelte';
	import Table from '../../../lib/table/Table.svelte';

  export let data;
  let course = data
  $: course = data
</script>
<!---------------------------------------------------------------------------------------->



<CourseCard {course} w="w-full"/>
<br>
<Table {course} class="w-full"/>

<!---------------------------------------------------------------------------------------->
<style>
</style>
