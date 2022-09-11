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
const carbonoGeometria = new THREE.SphereGeometry(2, 32, 32);
const carbonoMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
const carbono = new THREE.Mesh(carbonoGeometria, carbonoMaterial);
scene.add(carbono);
const oxigenioGeometria = new THREE.SphereGeometry(1.71, 32, 32);
const oxigenioMaterial = new THREE.MeshStandardMaterial({color: 0xffff00})
const oxigenio1 = new THREE.Mesh(oxigenioGeometria, oxigenioMaterial)
const oxigenio2 = new THREE.Mesh(oxigenioGeometria, oxigenioMaterial)
scene.add(oxigenio1, oxigenio2)
oxigenio1.position.set(5, 0, 0)
oxigenio2.position.set(-5, 0, 0)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao3 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao4 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
ligacao1.rotateZ(3.14/2) 
ligacao1.position.set(2, .5, 0)
ligacao2.rotateZ(3.14/2)
ligacao2.position.set(2, -.5, 0)
ligacao3.rotateZ(3.14/2)
ligacao3.position.set(-2, .5, 0)
ligacao4.rotateZ(3.14/2)
ligacao4.position.set(-2, -.5, 0)
scene.add(ligacao1, ligacao2, ligacao3, ligacao4)



//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();