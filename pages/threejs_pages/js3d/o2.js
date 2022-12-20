import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
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
const raio = 1
const segmentosX = 32
const segmentosY = 32
const atomoGeometria = new THREE.SphereGeometry(raio, segmentosX, segmentosY);
const oxigenioMaterial = new THREE.MeshPhongMaterial({
	color: 0xff0000
})
const oxigenio1 = new THREE.Mesh(atomoGeometria, oxigenioMaterial)
const oxigenio2 = new THREE.Mesh(atomoGeometria, oxigenioMaterial)
oxigenio1.scale.set(2, 2, 2)
oxigenio2.scale.set(2, 2, 2)
scene.add(oxigenio1, oxigenio2)
oxigenio1.position.set(3, 0, 0)
oxigenio2.position.set(-3, 0, 0)
const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
const ligacaoMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
ligacao1.rotateZ(3.14/2) 
ligacao1.position.set(0, .5, 0)
ligacao2.rotateZ(3.14/2)
ligacao2.position.set(0, -.5, 0)
scene.add(ligacao1, ligacao2)


//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();