<script>
    import { Card } from "flowbite-svelte";

    export let course;
    export let w = '';

</script>
<!---------------------------------------------------------------------------------------->

<Card href="/courses/{course.code.replace(/\s/g, '')}" 
class="min-w-full">
<div class="flex flex-col items-center" >
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.code}</h2>
    <h2 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{course.name}</h2>

    <p>{course.instructor}</p>
    <p>{course.classNumber}</p>
  </div>

</Card>

<!---------------------------------------------------------------------------------------->
<style>
</style>