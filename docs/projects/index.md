
# All Projects

<div class="card-grid">
  <card-component class="card" title="Beginner Projects" color="#ff6300" image="../r1.png" link="beginner"/>
  <card-component class="card" title="Intermediate Projects" color="blue" image="../r2.png" link="intermediate"/>
  <card-component class="card" title="Advanced Projects" color="green" image="../r3.png" link="advanced"/>
</div>


<script>
  import CardComponent from '../components/CardComponent.vue';
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
  }
  .card {
    width: 300px;
    height: 300px;
    margin:10px;
    padding: 10px;
  }
</style>