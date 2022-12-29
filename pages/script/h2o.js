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

	//Definindo objetos
	const oxigenioGeometria = new THREE.SphereGeometry(2, 32, 32);
	const oxigenioMaterial = new THREE.MeshStandardMaterial({color: 0x0000ff})
	const oxigenio = new THREE.Mesh(oxigenioGeometria, oxigenioMaterial)
	scene.add(oxigenio)
	const hidrogenioGeometria = new THREE.SphereGeometry(1.5, 32, 32);
	const hidrogenioMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
	const hidrogenio1 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial);
	const hidrogenio2 = new THREE.Mesh(hidrogenioGeometria, hidrogenioMaterial);
	scene.add(hidrogenio1, hidrogenio2);
	hidrogenio1.position.set(3.2, -2.4, 0)
	hidrogenio2.position.set(-3.2, -2.4, 0)
	const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
	const ligacaoMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
	const ligacao1 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	const ligacao2 = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
	scene.add(ligacao1, ligacao2) 

	//ANGULOS SUPOSTAMENTE ERRADOS
	ligacao1.rotateZ(3.14/4) 
	ligacao1.position.set(1, -.5, 0)
	ligacao2.rotateZ(-3.14/4)
	ligacao2.position.set(-1, -.5, 0)


	//Animação (Para cada frame)
	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	animate();