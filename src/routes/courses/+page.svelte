<script>
    import { userData } from '../../Store'
    import CourseCard from '$lib/cards/CourseCard.svelte';

    // Get user courses from store
    let courses;
    const unsubscribe = userData.subscribe((value) => courses = value.courses)
</script>
<!---------------------------------------------------------------------------------------->


<div class="courses flex flex-wrap flex-col md:flex-row">
    {#each courses as course}
    <div class="md:w-96 w-full hi"><CourseCard {course}/></div>
    {/each}
</div>

<!---------------------------------------------------------------------------------------->
<style>
    .courses {
        gap: 1rem;
        /* background-color: red; */
    }

</style>