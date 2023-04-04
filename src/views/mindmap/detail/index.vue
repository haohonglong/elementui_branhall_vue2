<template>
  <mindmaps-component :keyword="key"></mindmaps-component>
</template>

<script>
import MindmapsComponent from './components/MindMapsComponent';
export default {
  components: { MindmapsComponent },
  data(){
    return {
      key: ""
    };
  },
  created(){
    this.key = this.$route.params.key;
  }
}
</script>