
function cilindro() {
    const ligacaoGeometria = new THREE.CylinderGeometry( .5, .5, 5, 32 );
    const ligacaoMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const ligacao = new THREE.Mesh(ligacaoGeometria, ligacaoMaterial);
    scene.add(ligacao)
    return ligacao
}

