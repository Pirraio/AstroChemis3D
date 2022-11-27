import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Controle de Câmera
const controls = new OrbitControls(camera, renderer.domElement);

//Definindo Luzes 
const pointLight = new THREE.PointLight(0xffffff, .7)
const ambientLight = new THREE.AmbientLight(0xffffff, .3)
pointLight.position.set(5, 5, 5)
scene.add(pointLight, ambientLight)

//Definindo objetos
const raio = 2
const segmentosX = 32
const segmentosY = 32
const helioGeometria = new THREE.SphereGeometry(raio, segmentosX, segmentosY);
const helioMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})
const helio = new THREE.Mesh(helioGeometria, helioMaterial)
scene.add(helio)



//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();