
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


const scene = new THREE.Scene();
scene.background = null; 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let object;


let objToRender = "eye";


const loader = new GLTFLoader();


loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(0.00598, 0.00598, 0.00598);
    object.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) {
          node.material.metalness = 0.5; 
          node.material.roughness = 0.3; 
        }
      }
    });

    scene.add(object);
  },
  function (xhr) {
    
    console.log((xhr.loaded / xhr.total * 100) + "% loaded");
  },
  function (error) {

    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
renderer.outputEncoding = THREE.sRGBEncoding; 
renderer.toneMapping = THREE.ACESFilmicToneMapping; 
renderer.toneMappingExposure = 1.5; 

document.getElementById("container3D").appendChild(renderer.domElement);


camera.position.set(0, 7, 7);

const sunlight = new THREE.DirectionalLight(0xffffff, 1.2);
sunlight.position.set(50, 100, 50);
sunlight.castShadow = true;
sunlight.shadow.mapSize.width = 2048;
sunlight.shadow.mapSize.height = 2048;
sunlight.shadow.camera.near = 0.5;
sunlight.shadow.camera.far = 500;


const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemisphereLight.position.set(0, 20, 0);

scene.add(sunlight);
scene.add(hemisphereLight);


let targetZoom = camera.position.z;
const zoomSpeed = 1.5; 

document.addEventListener("wheel", function (e) {

  if (e.deltaY < 0) {
    targetZoom -= zoomSpeed; 
  } else {
    targetZoom += zoomSpeed; 
  }

  targetZoom = Math.max(2, Math.min(50, targetZoom));
});


let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1; 
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1; 
});


let targetRotationY = 0;
let targetRotationX = 0;
let rotationSpeed = 0.05;

// Render the scene
function animate() {
  requestAnimationFrame(animate);

 
  const smoothFactor = 0.2;
  camera.position.z += (targetZoom - camera.position.z) * smoothFactor;

  if (object) {

    targetRotationY = mouseX * Math.PI; 
    targetRotationX = mouseY * Math.PI / 8; 

   
    object.rotation.y += (targetRotationY - object.rotation.y) * rotationSpeed;
    object.rotation.x += (targetRotationX - object.rotation.x) * rotationSpeed;
  }

  renderer.render(scene, camera);
}


window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();
