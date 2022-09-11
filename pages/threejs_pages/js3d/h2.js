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

//Definindo Objetos 
const hidrogenioGeometria = new THREE.SphereGeometry(2, 32, 32);
const hidrogenioMaterial = new THREE.MeshStandardMaterial({color: 0x0000ff})
const hidrogenio1 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio2 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
scene.add(hidrogenio1, hidrogenio2)
hidrogenio1.position.set(3, 0, 0)
hidrogenio2.position.set(-3, 0, 0)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
ligacao1.rotateZ(3.14/2) 
ligacao1.position.set(0, 0, 0)
scene.add(ligacao1)


//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();