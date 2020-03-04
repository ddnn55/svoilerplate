<script>
import {onMount} from 'svelte';

import Slideshow from './Slideshow.svelte';

export let data;
export let flip;

let rootEl;
let video;

let Component = data.visual.Component;

onMount(() => {
    if(data.visual.video) {
        if(typeof IntersectionObserver !== 'undefined') {
            // video.pause();
            const io = new IntersectionObserver(entries => {
                if(entries[0].isIntersecting) {
                    video.muted = true;
                    video.play();
                }
                else {
                    video.pause();
                }
            });
            io.observe(rootEl);
            return () => io.unobserve(rootEl);
        }
        else {
            video.muted = true;
            video.play();
        }
    }
});
</script>
<style lang="sass">
@import 'portfolio-item.scss';
</style>
<div class="root {data.visual.aspect > 1 ? 'landscape-visual' : 'portrait-visual'}" bind:this={rootEl}>
    <div class="row{flip ? ' flip' : ''}"
        style="--visual-aspect: {data.visual.aspect};"
    >
        <!-- <div class="fill-spacer"></div> -->

        <!-- <div class="name narrow">
            {data.name}
        </div> -->

        <div class="visual-container">
            <div class="visual {data.visual.aspect > 1 ? 'landscape' : 'portrait'}"
                style="{data.visual && data.visual.image ? `background-image: url(img/${data.visual.image})` : ''}"
            >
                {#if data.visual && data.visual.video}
                    <video
                        bind:this={video}
                        style=""
                        muted playsinline loop
                        class="{data.visual.use_iphone_chrome ? 'is-iphone-screen' : ''}"
                    >
                        <source src="img/{data.visual.video}"/>
                    </video>
                    {#if data.visual.use_iphone_chrome }
                        <img src="img/iPhoneXcase_transparentbg.png" class="iphone-case" />
                    {/if}
                <!-- {:else}
                    <img src="{data.visual.image}"/> -->
                {:else if data.visual && data.visual.slideshow}
                    <Slideshow
                        images={data.visual.slideshow}
                        slideDuration={4}
                    />
                {:else if Component}
                    <Component/>
                {/if}
            </div>
        </div>

        <div class="spacer"></div>

        <div class="text-container">
            <!-- <CenterCenter> -->
                <div class="text-inner">
                    <div class="name">
                        {data.name}
                    </div>
                    <div class="text">
                        {#each (data.paragraphs || []) as paragraph}
                            <p>{@html paragraph}</p>
                        {/each}
                    </div>
                </div>
            <!-- </CenterCenter> -->
        </div>

        <!-- <div class="fill-spacer"></div> -->

    </div>
</div>