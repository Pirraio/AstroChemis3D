import * as THREE from 'three'
import {OrbitControls} from 'OrbitControls'


//Inicializando a Cena, Câmera e o Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000);
camera.position.z = 3;
camera.position.x = 3;

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

const raio = 1
const segmentosX = 32
const segmentosY = 32
const enxofreoGeometria = new THREE.SphereGeometry(raio*0.66, segmentosX, segmentosY);
const enxofreMaterial = new THREE.MeshPhongMaterial({
	color: 0x00aaff
})
const enxofre = new THREE.Mesh(enxofreoGeometria, enxofreMaterial)

const oxigeniooGeometria = new THREE.SphereGeometry(raio*.4, segmentosX, segmentosY);
const oxigenioMaterial = new THREE.MeshPhongMaterial({
color: 0xff0000
})

const oxigenio1 = new THREE.Mesh(oxigeniooGeometria, oxigenioMaterial)
const oxigenio2 = new THREE.Mesh(oxigeniooGeometria, oxigenioMaterial)
const oxigenio3 = new THREE.Mesh(oxigeniooGeometria, oxigenioMaterial)
const oxigenio4 = new THREE.Mesh(oxigeniooGeometria, oxigenioMaterial)
oxigenio1.position.set(1.21,0.74,0)
oxigenio2.position.set(-1.21,0.74,0)
oxigenio3.position.set(0,-.93,1.22)
oxigenio4.position.set(0,-.93,-1.22)

const hidrogeniooGeometria = new THREE.SphereGeometry(raio*.25, segmentosX, segmentosY);
const hidrogenioMaterial = new THREE.MeshPhongMaterial({
	color: 0xe6d70b
})

const hidrogenio1 = new THREE.Mesh(hidrogeniooGeometria, hidrogenioMaterial)
const hidrogenio2 = new THREE.Mesh(hidrogeniooGeometria, hidrogenioMaterial)
hidrogenio1.position.set(0, -0.55, 1.88)
hidrogenio2.position.set(0, -0.55, -1.88)

scene.add(enxofre, oxigenio1, oxigenio2, oxigenio3, oxigenio4, hidrogenio1, hidrogenio2)

	const ligacaoGeometria = new THREE.CylinderGeometry( .2, .2, 1.1, 32 );
	const ligacaoaltGeometria = new THREE.CylinderGeometry( .2, .2, 1.5, 32 );
	const ligacaofinaGeometria = new THREE.CylinderGeometry( .1, .1, .9, 32 );
	const ligacaoMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
	const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	const ligacao3 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	const ligacao4 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	const ligacao5 = new THREE.Mesh(ligacaoaltGeometria, ligacaoMaterial);
	const ligacao6 = new THREE.Mesh(ligacaoaltGeometria, ligacaoMaterial);
	const ligacao7 = new THREE.Mesh(ligacaofinaGeometria, ligacaoMaterial);
	const ligacao8 = new THREE.Mesh(ligacaofinaGeometria, ligacaoMaterial);
	ligacao1.position.set(1, 0.5, 0)
	ligacao1.rotation.set(0, 0, 2.1)	
	ligacao2.position.set(0.9, 0.6, 0)
	ligacao2.rotation.set(0, 0, 2.1)
	ligacao3.position.set(-1, 0.5, 0)
	ligacao3.rotation.set(0, 0, -2.1)
	ligacao4.position.set(-0.9, 0.6, 0)
	ligacao4.rotation.set(0, 0, -2.1)
	ligacao5.position.set(0,-.7, .8)
	ligacao5.rotation.set(2.1, 0, 0)
	ligacao6.position.set(0, -.7, -.8)
	ligacao6.rotation.set(-2.1, 0, 0)
	ligacao7.position.set(0, -.8, 1.35)
	ligacao7.rotation.set(-1.94, 0, 0)
	ligacao8.position.set(0, -.8, -1.35)
	ligacao8.rotation.set(1.99, 0, 0)
	scene.add(ligacao1, ligacao2, ligacao3, ligacao4, ligacao5, ligacao6, ligacao7, ligacao8) 

//Animação (Para cada frame)
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();