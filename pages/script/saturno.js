import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 2;

const canvas = document.querySelector("canvas.webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const sizes = {
    width: window.innerWidth*0.4,
    height: window.innerHeight*0.4
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
const anelTexture = textureLoader.load('../img/2k_saturn_ring_alpha.png')
const anel_geometry = new THREE.RingBufferGeometry( 5, 1, 64);
var pos = anel_geometry.attributes.position;
var v3 = new THREE.Vector3();
for (let i = 0; i < pos.count; i++){
    v3.fromBufferAttribute(pos, i);
    anel_geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
}
const anel_material = new THREE.MeshStandardMaterial({ 
map: anelTexture, 
side: THREE.DoubleSide,
transparent: true
});
const mesh = new THREE.Mesh(anel_geometry, anel_material );
mesh.rotation.set(1.57, 0, 0)
scene.add( mesh );
const saturnoTexture = textureLoader.load( "../img/2k_saturn.jpg" );
const raio = 2
const segmentosX = 32
const segmentosY = 32
const planetaGeometria = new THREE.SphereGeometry(raio, segmentosX, segmentosY);
const saturnoMaterial = new THREE.MeshStandardMaterial({map: saturnoTexture})
const saturno = new THREE.Mesh(planetaGeometria, saturnoMaterial)

scene.add(saturno)


//Animação (Para cada frame)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();