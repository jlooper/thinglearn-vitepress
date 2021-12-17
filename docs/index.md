---
heroImage: /logo.png
sidebar: false
home: true
footer: MIT Licensed | Copyright © 2012-present Jen Looper
---
<section class="home">
  <div class="card-grid">
    <card-component class="card" title="Beginner Projects" color="#ff6300" image="./r1.png" link="/projects/beginner"/>
    <card-component class="card" title="Intermediate Projects" color="blue" image="./r2.png" link="/projects/intermediate" />
    <card-component class="card" title="Advanced Projects" color="green" image="./r3.png" link="/projects/advanced" />
  </div>
</section>

<script>
  import CardComponent from './components/CardComponent.vue';
  export default {
  components: {
      cardComponent: CardComponent
    }
  }
</script>

<style>
  .card-grid {
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
  }
  .card {
    height: 300px;
    width: 300px;
    margin: 2px;
  }
</style>