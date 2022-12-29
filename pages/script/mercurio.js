import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const canvas = document.querySelector("canvas.webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const sizes = {
    width: window.innerWidth*.8,
    height: window.innerHeight*.8
}

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// document.body.appendChild(renderer.domElement);


//Controle de Câmera
const controls = new OrbitControls(camera, renderer.domElement);

//Definindo Luzes 
// const pointLight = new THREE.DirectionalLight(0xffffff, .8)
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
//  pointLight.position.set(5, 5, 4)
scene.add(ambientLight)

const skybox = new THREE.CubeTextureLoader();
const space = skybox.load([
    '../img/skybox/px.png',
    '../img/skybox/nx.png',
    '../img/skybox/py.png',
    '../img/skybox/ny.png',
    '../img/skybox/pz.png',
    '../img/skybox/nz.png'
]);
scene.background = space;

//Definindo Objetos
const textureLoader = new THREE.TextureLoader();
const mercurioTexture = textureLoader.load( "../img/2k_mercury.jpg" );
const raio = 1
const segmentosX = 32
const segmentosY = 32
const planetaGeometria = new THREE.SphereGeometry(raio, segmentosX, segmentosY);
const mercurioMaterial = new THREE.MeshStandardMaterial({map: mercurioTexture})
const mercurio = new THREE.Mesh(planetaGeometria, mercurioMaterial)

scene.add(mercurio)


//Animação (Para cada frame)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();