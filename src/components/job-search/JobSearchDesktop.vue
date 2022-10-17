<template>
  <div class="job-search">
    <b-icon type="is-dark" size="is-large" icon="briefcase-outline" class="job-search__icon icon-1"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="xml" class="job-search__icon icon-2"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="laptop" class="job-search__icon icon-3"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="account-multiple" class="job-search__icon icon-4"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="currency-usd" class="job-search__icon icon-5"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="wrench-outline" class="job-search__icon icon-6"></b-icon>
    <b-icon type="is-dark" size="is-large" icon="office-building" class="job-search__icon icon-7"></b-icon>
  </div>
</template>
<script>
export default { name: 'JobSearchDesktop' };
</script>
<style lang="scss">
.job-search {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .job-search__icon {
    position: absolute;
    transform: scale(4);
    //border: 2px solid red;

    &.icon-1 {
      transform: scale(2) rotate(-16deg);
      left: 50%;
      top: 22%;
    }

    &.icon-2 {
      transform: scale(2) rotate(7deg);
      left: 85%;
      top: 10%;
    }

    &.icon-3 {
      transform: scale(1.5) rotate(9deg);
      left: 65%;
      top: 25%;
    }

    &.icon-4 {
      transform: scale(2);
      left: 88%;
      top: 50%;
    }

    &.icon-5 {
      transform: scale(2) rotate(8deg);
      left: 77%;
      top: 66%;
    }

    &.icon-6 {
      transform: scale(1.5) rotate(-10deg);
      left: 51%;
      top: 66%;
    }

    &.icon-7 {
      transform: scale(1.2) rotate(10deg);
      left: 65%;
      top: 85%;
    }

    &:hover {
      transform: scale(4);
    }
  }
}
</style>
