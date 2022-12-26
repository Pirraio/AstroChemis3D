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
    width: window.innerWidth*0.8,
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
const carbonoGeometria = new THREE.SphereGeometry(2, 32, 32);
const carbonoMaterial = new THREE.MeshPhongMaterial({color: 0x00eeaa})
const carbono1 = new THREE.Mesh(carbonoGeometria, carbonoMaterial)
const carbono2 = new THREE.Mesh(carbonoGeometria, carbonoMaterial)
carbono1.position.set(-3, 0, 0)
carbono2.position.set(3, 0, 0)
scene.add(carbono1, carbono2)
const hidrogenioGeometria = new THREE.SphereGeometry(1.5, 32, 32);
const hidrogenioMaterial = new THREE.MeshPhongMaterial({color: 0xa0a0a0})
const hidrogenio1 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio2 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio3 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
const hidrogenio4 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial)
hidrogenio1.position.set(5.5, 4.2)
hidrogenio2.position.set(-5.5, 4.2)
hidrogenio3.position.set(-5.5, -4.2)
hidrogenio4.position.set(5.5, -4.2)
scene.add(hidrogenio1, hidrogenio2, hidrogenio3, hidrogenio4)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao3 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao4 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao5 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao6 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);

//ANGULOS POSSIVELMENTE ERRADOS
ligacao1.rotateZ(3.14/2) 
ligacao1.position.set(0, .5, 0)
ligacao2.rotateZ(3.14/2)
ligacao2.position.set(0, -.5, 0)
ligacao3.rotateZ(2.4)
ligacao3.position.set(4, 2.2, 0)
ligacao4.rotateZ(-2.4)
ligacao4.position.set(4, -2.2, 0)
ligacao5.rotateZ(-.7)
ligacao5.position.set(-4, -2.2, 0)
ligacao6.rotateZ(.7)
ligacao6.position.set(-4, 2.2, 0)
scene.add(ligacao1, ligacao2, ligacao3, ligacao4, ligacao5, ligacao6);


//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();