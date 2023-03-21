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
    width: window.innerWidth*0.4,
    height: window.innerHeight*0.4
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
const carbonoMaterial = new THREE.MeshPhongMaterial({color: 0xff0000});
const carbono = new THREE.Mesh(carbonoGeometria, carbonoMaterial);
scene.add(carbono);
const oxigenioGeometria = new THREE.SphereGeometry(1.71, 32, 32);
const oxigenioMaterial = new THREE.MeshPhongMaterial({color: 0xffff00})
const oxigenio1 = new THREE.Mesh(oxigenioGeometria, oxigenioMaterial)
const oxigenio2 = new THREE.Mesh(oxigenioGeometria, oxigenioMaterial)
scene.add(oxigenio1, oxigenio2)
oxigenio1.position.set(5, 0, 0)
oxigenio2.position.set(-5, 0, 0)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
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