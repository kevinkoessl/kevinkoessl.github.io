<template>
  <div class="section is-large" id="tier-three-animations">
    <div class="container is-max-desktop">
      <div id="tier-three-animations-start-trigger"></div>
      <h3 class="title is-1 has-text-black has-text-centered">Stufe 3</h3>
      <div class="tier-three-animations-start-trigger"></div>
      <div class="content pl-3">
        <div class="title is-6 main-content has-text-centered" id="main-content">
          Was wäre, wenn deine
          <div class="animated-highlight" id="animated-highlight-1">
            <div class="highlight-background"></div>
            <div class="highlight-text-before">Corporate-Identity</div>
            <div class="highlight-text-after" style="color: lightblue">Corporate-Identity</div>
          </div>
          ein Eigenleben entwickelt?
        </div>
      </div>
      <div class="lines-layout">
        <div class="columns">
          <div class="column is-2 is-offset-5">
            <div class="has-text-centered">
              <b-icon
                icon="eye-settings-outline"
                type="is-info"
                size="is-large"
                class="is-inline-block"
                id="icon-1"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-2 is-offset-5">
            <div
              class="bal-line has-border-right is-dashed"
              style="width: calc(50% + 2.5px); height: 200px"
              id="line-1"
            ></div>
          </div>
        </div>

        <div class="columns is-gapless">
          <div class="column is-5"></div>
          <div class="column is-2 has-text-centered">
            <b-icon icon="map-marker" type="is-info" size="is-large" class="is-inline-block" id="icon-2"></b-icon>
          </div>
          <div class="column is-5">
            <div class="title is-7 mt-2" id="title-1">Und sich auf den weiten Weg macht...</div>
          </div>
        </div>
        <div class="columns is-gapless">
          <div class="column is-2"></div>
          <div class="column is-8">
            <div id="line-2" class="bal-line is-dashed has-border-right" style="width: 50%; height: 100px"></div>
            <div
              class="bal-line is-dashed is-top has-border-left has-border-top"
              id="line-3"
              style="width: 50%; height: 100px"
            ></div>
          </div>
        </div>
        <div class="columns is-gapless">
          <div class="column is-1"></div>
          <div class="column is-2 has-text-centered">
            <b-icon
              icon="briefcase-account-outline"
              type="is-info"
              size="is-large"
              class="is-inline-block"
              id="icon-3"
            ></b-icon>
          </div>
          <div class="column is-5">
            <div class="title is-7 mt-2" id="title-2">um deine Kunden in eine Welt zu entführen...</div>
          </div>
        </div>

        <div class="columns is-gapless">
          <div class="column is-2"></div>
          <div class="column is-8">
            <div class="bal-line is-dashed has-border-left" style="width: 50%; height: 100px" id="line-4"></div>
            <div
              id="line-5"
              class="bal-line is-dashed is-top has-border-right has-border-top"
              style="width: 100%; height: 100px"
            ></div>
          </div>
        </div>
        <div class="columns is-gapless">
          <div class="column is-4"></div>
          <div class="column is-5">
            <div class="title is-7 mt-2 has-text-right" id="title-3">in der sie keine andere Wahl haben...</div>
          </div>
          <div class="column is-2 has-text-centered">
            <b-icon
              icon="axis-y-arrow-lock"
              type="is-info"
              size="is-large"
              class="is-inline-block"
              id="icon-4"
            ></b-icon>
          </div>
          <div class="column is-5"></div>
        </div>

        <div class="columns is-gapless">
          <div class="column is-6"></div>
          <div class="column is-8">
            <div id="line-6" class="bal-line is-dashed has-border-right" style="width: 50%; height: 100px"></div>
            <div
              id="line-7"
              class="bal-line is-dashed is-top has-border-left has-border-top"
              style="width: 50%; height: 100px"
            ></div>
          </div>
        </div>
      </div>
      <div class="content pl-3">
        <div class="title is-6 main-content has-text-centered mt-6" id="secondary-content">
          als dich mit <br />
          <div class="animated-highlight" id="animated-highlight-2">
            <div class="highlight-background"></div>
            <div class="highlight-text-before">haufenweise Geld</div>
            <div class="highlight-text-after" style="color: lightblue">haufenweise Geld</div>
          </div>
          <br />
          zu bewerfen?
        </div>
        <div class="is-flex is-justify-content-center">
          <b-icon id="icon-5" icon="cash-check" type="is-info" size="is-large" class="is-inline-block mx-3"></b-icon>
          <b-icon id="icon-6" icon="account-cash" type="is-info" size="is-large" class="is-inline-block mx-3"></b-icon>
          <b-icon id="icon-7" icon="cash-plus" type="is-info" size="is-large" class="is-inline-block mx-3"></b-icon>
        </div>
      </div>
    </div>
    <div id="tier-three-animations-end-trigger"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'BALTierThree',
  data() {
    return { timeline: null };
  },
  mounted() {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#tier-three-animations-start-trigger`,
        endTrigger: `#tier-three-animations-end-trigger`,
        start: 'top 30%',
        end: 'bottom: 60%',
        scrub: 0.5,
      },
    });

    this.timeline
      // .from('#tier-three-animations #main-content', { opacity: 0, y: '50px' })
      .fromTo(
        `#animated-highlight-1 .highlight-background`,
        {
          width: '0',
        },
        { width: '100%', duration: 2, ease: 'power4.out' }
      )
      .fromTo(
        `#animated-highlight-1 .highlight-text-before`,
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 2, ease: 'power4.out' },
        '<'
      )
      .fromTo(
        `#animated-highlight-1 .highlight-text-after`,
        {
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 2, ease: 'power4.out' },
        '<'
      )
      .from('#tier-three-animations #icon-1', { opacity: 0 })
      .fromTo(
        '#tier-three-animations #line-1',
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      )
      .from('#tier-three-animations #icon-2', { opacity: 0 })
      .from('#tier-three-animations #title-1', { opacity: 0, x: '-25px' })
      .fromTo(
        '#tier-three-animations #line-2',
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      )
      .fromTo(
        '#tier-three-animations #line-3',
        { clipPath: 'polygon(100% 0%, 100% 0%, 100% 5px, 100% 5px)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 5px, 0% 5px)' }
      )
      .to('#tier-three-animations #line-3', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
      .from('#tier-three-animations #icon-3', { opacity: 0 })
      .from('#tier-three-animations #title-2', { opacity: 0, x: '-25px' })

      .fromTo(
        '#tier-three-animations #line-4',
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      )
      .fromTo(
        '#tier-three-animations #line-5',
        { clipPath: 'polygon(0% 0%, 0% 0%, 0% 5px, 0% 5px)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 5px, 0% 5px)' }
      )
      .to('#tier-three-animations #line-5', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
      .from('#tier-three-animations #icon-4', { opacity: 0 })
      .from('#tier-three-animations #title-3', { opacity: 0, x: '25px' })
      .fromTo(
        '#tier-three-animations #line-6',
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      )
      .fromTo(
        '#tier-three-animations #line-7',
        { clipPath: 'polygon(100% 0%, 100% 0%, 100% 5px, 100% 5px)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 5px, 0% 5px)' }
      )
      .to('#tier-three-animations #line-7', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
      //.from('#tier-three-animations #secondary-content', { opacity: 0, y: '50px' })
      .fromTo(
        `#animated-highlight-2 .highlight-background`,
        {
          width: '0',
        },
        { width: '100%', duration: 2, ease: 'power4.out' },
        '<'
      )
      .fromTo(
        `#animated-highlight-2 .highlight-text-before`,
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 2, ease: 'power4.out' },
        '<'
      )
      .fromTo(
        `#animated-highlight-2 .highlight-text-after`,
        {
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 2, ease: 'power4.out' },
        '<'
      )
      .from('#tier-three-animations #icon-5', { opacity: 0, x: '-25px' })
      .from('#tier-three-animations #icon-6', { opacity: 0, y: '25px' }, '<')
      .from('#tier-three-animations #icon-7', { opacity: 0, x: '25px' }, '<');
  },
};
</script>
<style lang="scss">
.bal-line {
  &.is-dashed {
    $border: 5px dashed lightblue;
    &.has-border-left {
      border-left: $border;
    }

    &.has-border-right {
      border-right: $border;
    }

    &.has-border-top {
      border-top: $border;
    }

    &.has-border-bottom {
      border-bottom: $border;
    }
  }
}
</style>
