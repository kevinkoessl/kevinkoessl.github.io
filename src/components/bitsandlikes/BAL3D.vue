<template>
  <div class="canvas-3d" ref="canvas" id="fixed-canvas">
    <div class="renderer is-success" id="3mf-preview" ref="renderer">
      <b-loading v-model="isLoading" :is-full-page="false"></b-loading>
    </div>
  </div>
</template>

<script lang="js">
import * as THREE from "three";
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


ScrollTrigger.defaults({
  immediateRender: false,
  ease: "power1.inOut",
});

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Canvas3D",
  data() {
    return {
      isLoading: false,
      loader: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      meshObject: null,
      edges: null,
      domElement: null,
      stats: null,
      timeline: null,
      pointLight: null,
      pointLight2: null
    }
  },
  props: {

    fileUrl: {
      type: String,
      required: false,
      default: "/foerderturm.3mf"
    },

  },
  watch: {
    fileUrl(value) {
      if (value && typeof value === "string") {
        this.loadObject();
      }
    }
  },
  methods: {
    setupScene() {
    this.scene = new THREE.Scene();

    let height = 800;
   // this.scene.rotation.x = 0.7
    if(this.$mq === 'mobile') {
      height = 400;
      this.scene.rotation.x = 1.5
    }

    this.camera = new THREE.PerspectiveCamera(40, this.$refs.canvas.offsetWidth / height, 0.1, 10000);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });

    this.renderer.setSize(this.$refs.canvas.offsetWidth , height);
    this.$refs.canvas.appendChild(this.renderer.domElement);

   const alight = new THREE.AmbientLight(0xffffff, 0.4);
    const axesHelper = new THREE.AxesHelper( 100 );

    this.scene.add(alight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-50, 20, 100);

    const pointLightHelper = new THREE.PointLightHelper( pointLight, 10 );

    this.scene.add(pointLight);

    this.pointLight = pointLight;


    this.pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    this.pointLight2.position.set(0, 0, -1000);
    this.scene.add(this.pointLight2)


    const hlight = new THREE.HemisphereLight(0x333333, 0x333333)
    hlight.position.set(0, 0, 3000)
    this.scene.add(hlight);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    resize() {
      let height = 800;
      if(this.$mq === 'mobile') {
      height = 400;
      this.scene.rotation.x = 1.5
    }

      this.camera.aspect = this.$refs.canvas.offsetWidth / height;
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.$refs.canvas.offsetWidth , height);
    }
  },
  async mounted() {
    this.setupScene();


    const loader = new ThreeMFLoader();
    let meshObject;
    loader.load(this.fileUrl, (object) => {
      const box = new THREE.Box3().setFromObject(object);


      object.position.x = -10;
      object.position.y = 0;
      object.position.z = -5;



      this.meshObject = object;
      //object.translate(0, 20, 0);
      if (this.meshObject) {
        this.meshObject.traverse((child) => {
          if (child.isMesh) {

            child.material.color.setHex(0xffd800);
            child.material.vertexColors = false;
            child.material.needsUpdate = true;
          }
        });
      }


      //this.scene.add(this.meshObject);
      this.camera.up.set(0, 0, 1);
      this.camera.position.set(5, 15, 200)



      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-two",
          endTrigger: ".section-five",
          //start: "top 60%",
          anticipatePin: 1,
          end: "top 50%",
          scrub: true,
          pin: "#fixed-canvas"
        }
      });

      let pivot = new THREE.Group();
      pivot.position.set( 0, 0, 0 );
      pivot.rotation.x = (Math.PI / 3);
      pivot.add( object );
      this.scene.add(pivot)



      timeline.fromTo('#fixed-canvas', {x: "-80%"}, {x: 0, ease: "power2.out"}, 0)
      .to(pivot.rotation, {y: -6,  x: 0, ease: "power2.out"}, 0)
      .to(this.pointLight.position, {x: 10, z: 100}, 0)
      .to(this.camera.rotation, {x: Math.PI * 1/12 },0)
      .to(this.camera.position, {z: 70, y: -5, ease: "power2.out"}, 0);


      window.addEventListener('resize', this.resize)
    })
    this.animate();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }
}
</script>
<style lang="scss">
.canvas-3d {
  z-index: 1;
  .renderer {
    cursor: grab;
  }

  display: flex;
  //justify-content: flex-end;
  position: relative;
}
</style>
