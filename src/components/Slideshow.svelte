<script>
export let images;
export let slideDuration;

let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
}, slideDuration * 1000);

</script>
<style lang="sass">
@import 'slideshow.scss';
</style>

{#each images as image, i}
    <div class="slide" style="background-image: url(img/{image}); {i !== currentSlide ? 'visibility: hidden;' : ''}"></div>
{/each}