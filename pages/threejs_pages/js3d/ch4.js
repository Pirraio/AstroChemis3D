import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 5;

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
const carbonoGeometria = new THREE.SphereGeometry(2, 32, 32);
const carbonoMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
const carbono = new THREE.Mesh(carbonoGeometria, carbonoMaterial)
// carbono.position.set(1,1,1)
scene.add(carbono)
const hidrogenioGeometria = new THREE.SphereGeometry(1.5, 32, 32);
const hidrogenioMaterial = new THREE.MeshStandardMaterial({color: 0x00aaff})
const hidrogenio1 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio2 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio3 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio4 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
scene.add(hidrogenio1, hidrogenio2, hidrogenio3, hidrogenio4)
hidrogenio1.position.set(0, 5, 0)
hidrogenio2.position.set(4.71, -1.66, -2.2)
hidrogenio3.position.set(0, -1.66, 4.71)
hidrogenio4.position.set(-4.71, -1.66, -2.55)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao3 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao4 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
ligacao1.position.set(0, 1.5, 0)
ligacao2.position.set(0, 0, 2)
ligacao3.position.set(-2.1, 0, -1)
ligacao4.position.set(2, 0, -1)
ligacao2.rotateZ(-12.32)
ligacao2.rotateX(1.9)
ligacao3.rotateZ(1.9)
ligacao3.rotateX(15.2)
ligacao4.rotateZ(-2)
ligacao4.rotateX(-.4)
scene.add(ligacao1, ligacao2, ligacao3, ligacao4)


//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();