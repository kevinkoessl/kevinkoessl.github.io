<template>
  <div class="canvas-3d" ref="canvas">
    <div class="renderer is-retro is-success" id="3mf-preview" ref="renderer">
      <b-loading v-model="isLoading" :is-full-page="false"></b-loading>
    </div>
  </div>
</template>

<script lang="js">
import {mapActions} from "vuex";
import * as THREE from "three";
import {ThreeMFLoader} from "three/examples/jsm/loaders/3MFLoader";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls"
export default {
  name: "Canvas3D",
  data() {
    return {
      isLoading: true,
      loader: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      meshObject: null,
      edges: null,
      domElement: null,
      frontImageData: null,
    }
  },
  computed: {
    fileUrl() {

        return "/foerderturm.3mf"

    },
    cartItemColor() {
      return '#333333'
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
    ...mapActions(['postCartItemThumbnail']),
    parseHexToRGB(hexColor) {
      const colorObject = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
      return colorObject ? {
        r: parseInt(colorObject[1], 16) / 255,
        g: parseInt(colorObject[2], 16) / 255,
        b: parseInt(colorObject[3], 16) / 255
      } : null;
    },
    setupRenderer() {
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true});
      this.renderer.setSize(400, 400);
      this.domElement = this.renderer.domElement;
      this.$refs.renderer.appendChild(this.renderer.domElement);
    },
    setupScene() {
      this.scene = new THREE.Scene();
      this.scene.add(new THREE.HemisphereLight(0x333333, 0x333333));
    },
    setupCamera() {
      this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100000);
      this.scene.add(this.camera);
      const alight = new THREE.AmbientLight(0xffffff, 0.2);
      this.scene.add(alight);
      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(0, 0, 0);
      this.camera.add(pointLight);
    },
    setupControls() {
      this.controls = new TrackballControls(this.camera, this.domElement);
      this.controls.rotateSpeed = 2.2;
      this.controls.noPan =  true;
      this.controls.noZoom = true;
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.frontImageData = this.renderer.domElement.toDataURL("image/png").replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

      if (this.controls) {
        this.controls.update();
      }
    },
    async loadObject() {
      this.loader = new ThreeMFLoader();
      this.loader.load(this.fileUrl, (object) => {
        this.isLoading = false;
        const box = new THREE.Box3().setFromObject(object);
        object.position.x = (box.max.x + box.min.x) / -2;
        object.position.y = (box.max.y + box.min.y) / -2;
        object.position.z = (box.max.z + box.min.z) / -2;
        if (this.meshObject) {
          this.scene.remove(this.meshObject);
        }
        if(this.edges){
          this.scene.remove(this.edges);
        }
        this.meshObject = object;
        if (this.meshObject) {
          this.meshObject.traverse((child) => {
            if (child.isMesh) {
              child.material.color.setHex(0x333333);
              child.material.vertexColors = false;
              child.material.needsUpdate = true;
              const edges = new THREE.EdgesGeometry(child.geometry);
              this.edges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
                color: this.edgeColors,
                linewidth: 1,
                opacity: 0.1,
                transparent: true
              }));
              //this.scene.add(line);
            }
          });
        }
        this.scene.add(this.meshObject);
        // calculate a nice position for the camera
        const r = Math.sqrt(Math.pow(box.max.x - box.min.x, 2) + Math.pow(box.max.y - box.min.y, 2) + Math.pow(box.max.z - box.min.z, 2)) / 2.0;
        const d = r / Math.sin(20 * Math.PI / 180);
        const x = Math.sin(20 * Math.PI / 180) * d;
        const y = Math.cos(20 * Math.PI / 180) * d;
        this.camera.up.set(0, 0, 1);
        this.camera.position.set(x, -y, (box.max.z - box.min.z) / 2);
        this.controls.handleResize();
      })
    },
  },
  mounted() {
    this.setupRenderer();
    this.setupScene();
    this.setupCamera();
    this.setupControls();
    this.loadObject();
    this.animate();
  },
}
</script>
<style lang="scss">
.canvas-3d {
  .renderer {
    cursor: grab;
  }

  display: flex;
  justify-content: flex-end;
  position: relative;
}
</style>
