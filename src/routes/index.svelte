<script>
import PortfolioItem from '../components/PortfolioItem.svelte';
import portfolioItems from '../../data/portfolioItems';



</script>
<style lang="sass">
@import '../index.scss';
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap" rel="stylesheet">
    <title>David Stolarsky</title>
    <meta property="og:title" content="David Stolarsky" />
    <meta property="og:description" content="work samples – software engineering &amp; product design" />
    <meta property="og:image" content="https://www.d13y.co/img/social.png" />
</svelte:head>

<div class="header">
    <div class="title">David Stolarsky</div>
    <div class="subtitle">software engineering &amp;{@html '&nbsp;'}product{@html '&nbsp;'}design</div>
</div>

{#each portfolioItems as portfolioItem, p}
    <div class="spacer"></div>
    <PortfolioItem
        data={portfolioItem}
        flip={p % 2 === 1}
    />
{/each}
<div class="spacer"></div>
