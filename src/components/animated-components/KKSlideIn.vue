<template>
  <div>
    <div :id="`start-trigger_${_uid}`"></div>
    <div :id="`kk-slide-in_${_uid}`">
      <slot></slot>
    </div>
    <div :id="`end-trigger_${_uid}`"></div>
  </div>
</template>
<script lang="js">

import gsap from 'gsap';

export default {
    name: 'KKSlideIn',

    props: {
        scrub: {
            default: 1,
            required: false
        },

        scrollStart: {
            type: Number,
            required: false,
            default: 70,
        },

        scrollDistance: {
            type: Number,
            required: false,
            default: 200
        },

        direction: {
            type: String,
            required: false,
            default: "bottom-to-top"
        },

        ease: {
            type: String,
            required: false,
            default: ""
        },

        opacity: {
            type: Number,
            required: false,
            default: 0,
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
        xDistance() {
            if (this.direction.trim() === 'right-to-left') return '100px'
            if (this.direction.trim() === 'left-to-right') return '-100px'

            return 0;
        },

        yDistance() {
            if (this.direction.trim() === 'bottom-to-top') return '100%'
            if (this.direction.trim() === 'top-to-bottom') return '-100%'

            return 0;
        },

        animationVars() {
            return {
                x: this.xDistance,
                y: this.yDistance,
                opacity: this.opacity,
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
            this.timeline.from(`#kk-slide-in_${this._uid}`, this.animationVars)
        },
        onResize(){
            this.renderTimeline()
        }
    },


}
</script>
