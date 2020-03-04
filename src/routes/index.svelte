<script>
let time;

const update = () => {
    time = new Date();
}
update();
setInterval(update, 1000);
</script>
<style lang="sass">
@import '../index.scss';
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap" rel="stylesheet">
    <title>Svoilerplate</title>
    <meta property="og:title" content="Svoilerplate" />
    <meta property="og:description" content="yet another boilerplate. sveltified." />
    <!-- <meta property="og:image" content="https://www.d13y.co/img/social.png" /> -->
</svelte:head>

Hello from <b>Svoilerplate</b>, definitely the last boilerplate anyone will ever need to use or create.<br/>
<br/>
The time is now {time}
