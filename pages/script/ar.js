import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000);
camera.position.z = 10;

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
const sizes = {
    width: window.innerWidth*0.795,
    height: window.innerHeight*0.8
}

renderer.setSize(sizes.width, sizes.height)

//Controle de Câmera
const controls = new OrbitControls(camera, renderer.domElement);

//Definindo Luzes 
const pointLight = new THREE.DirectionalLight(0xffffff, .6)
const ambientLight = new THREE.AmbientLight(0xffffff, .5)
 pointLight.position.set(5, 5, 4)
scene.add(pointLight, ambientLight)

//Definindo objetos
const raio = 2
const segmentosX = 32
const segmentosY = 32
const argonioGeometria = new THREE.SphereGeometry(raio, segmentosX, segmentosY);
const argonioMaterial = new THREE.MeshPhongMaterial({color: 0x740ac4})
const argonio = new THREE.Mesh(argonioGeometria, argonioMaterial)
scene.add(argonio)



//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();