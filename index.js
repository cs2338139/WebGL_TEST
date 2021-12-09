// var camera, scene, renderer;
// var geometry, material, mesh;

// init();

// function init() {
//   scene = new THREE.Scene();
//   renderer=new THREE.WebGLRenderer({antialias : true});
//   renderer.setSize(window.innerWidth,window.innerHeight);
//   document.body.appendChild(renderer.domElement);
//   geometry=new THREE.BoxGeometry(0.2,0.2,0.2);
//   material =new THREE.MeshDepthMaterial();
//   mesh=new THREE.Mesh(geometry,material);
//   scene.add(mesh);


  
// }

var scene, camera, renderer;
    var geometry, material, mesh;
    init();
    animate();
    function init() {
      scene=new THREE.Scene();
      geometry=new THREE.IcosahedronGeometry(200, 1);
      material=new THREE.MeshBasicMaterial({
                     color: 0x000000,
                     wireframe: true,
                     wireframeLinewidth: 2});
      mesh=new THREE.Mesh(geometry, material);
      scene.add(mesh);

      camera=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z=500;

      renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setClearColor("#ffffff");
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      }

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x=Date.now() * 0.001;
      mesh.rotation.y=Date.now() * 0.01;
      renderer.render(scene, camera);
      }