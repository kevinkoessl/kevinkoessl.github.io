<template>
  <div>
    <div :id="`start-trigger_${_uid}`"></div>
    <div :id="`kk-change-background-color_${_uid}`" :style="sectionStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="js">

import gsap from 'gsap';

export default {
    name: 'KKChangeBackgroundColor.vue',

    props: {
        scrub: {
            default: true,
            required: false
        },

        scrollStart: {
            type: Number,
            required: false,
            default: -25,
        },

        scrollDistance: {
            type: Number,
            required: false,
            default: 200
        },

        fromColor: {
            type: String,
            required: false,
            default: "#ffffff"
        },

        toColor: {
            type: String,
            required: false,
            default: "#000000"
        },

        ease: {
            type: String,
            required: false,
            default: ""
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
        sectionStyle() {
            return {
                paddingTop: `${this.scrollDistance * 1.5}px`
            }
        },
        fromVars() {
           return {
            backgroundColor: this.fromColor
           }
        },
        toVars() {
            return {
                backgroundColor: this.toColor,
                ease: this.ease,
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
            this.timeline.fromTo(`#kk-change-background-color_${this._uid}`, this.fromVars, this.toVars)
        },
        onResize(){
            this.renderTimeline()
        }
    },


}
</script>
