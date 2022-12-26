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

//Definindo Objetos 
const nitrogenioGeometria = new THREE.SphereGeometry(2, 32, 32);
const nitrogenioMaterial = new THREE.MeshPhongMaterial({color: 0x228B22})
const nitrogenio1 = new THREE.Mesh(nitrogenioGeometria, nitrogenioMaterial)
const nitrogenio2 = new THREE.Mesh(nitrogenioGeometria, nitrogenioMaterial)
scene.add(nitrogenio1, nitrogenio2)
nitrogenio1.position.set(3, 0, 0)
nitrogenio2.position.set(-3, 0, 0)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao3 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
ligacao1.rotateZ(3.14/2) 
ligacao1.position.set(0, .75, 0)
ligacao2.rotateZ(3.14/2)
ligacao2.position.set(0, 0, 0)
ligacao3.rotateZ(3.14/2)
ligacao3.position.set(0, -.75, 0)
scene.add(ligacao1, ligacao2, ligacao3)


//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();