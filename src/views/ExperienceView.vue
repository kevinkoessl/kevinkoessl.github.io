<template>
  <div class="home">
    <work-experience />
  </div>
</template>

<script>
import WorkExperience from '@/components/work-experience/WorkExperience.vue';

export default {
  name: 'ExperienceView',

  components: {
    WorkExperience,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="scss"></style>
