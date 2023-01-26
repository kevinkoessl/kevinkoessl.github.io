<template>
  <span>
    <span :id="`start-trigger_${_uid}`"></span>
    <span class="kk-underline">
      <span style="overflow: hidden" class="kk-underline__segment"
        ><span :id="`kk-underline_${_uid}`" class="kk-underline__segment" :style="lineStyle"></span>
      </span>
      <span class="kk-underline__content">
        <slot></slot>
      </span>
    </span>
  </span>
</template>
<script lang="js">

import gsap from 'gsap';

export default {
    name: 'KKUnderline',

    props: {
        scrub: {
            required: false,
            default: 1,
        },

        scrollStart: {
            type: Number,
            required: false,
            default: 50,
        },

        scrollDistance: {
            type: Number,
            required: false,
            default: 100
        },

        lineBackground: {
            type: String,
            required: false,
            default: "#000000"
        },

        ease: {
            type: String,
            required: false,
            default: ""
        },

        opacity: {
            type: Number,
            required: false,
            default: 1,
        },

        hasMarkers: {
            type: Boolean,
            required: false,
            default: false
        },
    },

    data() {
        return {
            timeline: null
        }
    },

    mounted() {
        window.addEventListener("resize", this.onResize);


        this.renderTimeline();
    },

    computed: {
        lineStyle() {
            return {
                background: this.lineBackground
            }
        },
        toVars() {
            return {
                x: 0,
                opacity: 1,
                ease: this.ease,
            }
        },

        fromVars() {
            return {
                x: "-100%",
                opacity: this.opacity,
            }
        }
    },

    watch: {
        animationVars: "renderTimeline"
    },

    methods: {
        renderTimeline() {
            this.timeline = null;

            this.timeline = gsap.timeline({
            scrollTrigger: {
                trigger: `#start-trigger_${this._uid}`,
                start: `top ${this.scrollStart}%`,
                end: `+=${this.scrollDistance}px`,
                scrub: this.scrub,
                markers: this.markers && {
                    startColor: "black",
                    endColor: "#70bed1",
                    fontSize: "20px",
                }
            }
        });
        this.timeline.clear()
            this.timeline.fromTo(`#kk-underline_${this._uid}`, this.fromVars, this.toVars)
        },
        onResize(){
            this.renderTimeline()
        }
    },


}
</script>
<style lang="scss">
.kk-underline__segment {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
}

.kk-underline {
  display: inline-block;
  position: relative;
}

.kk-underline__content {
  position: relative;
  width: 100%;
}
</style>
