var camera, scene, renderer;
var geometry, material, mesh;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var a1, a2, flag1, flag2, value;

init();

function init() {
  scene = new THREE.Scene();
  value = 0.005;

  flag1 = true;
  flag2 = true;
  a1 = 0;
  a2 = 0.5;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  geometry = new THREE.SphereGeometry(0.5, 64, 64);
  material = new THREE.MeshStandardMaterial({
    wireframe: true,
  });
  material.transparent = true;
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  geometry2 = new THREE.SphereGeometry(0.45, 16, 32);
  material2 = new THREE.MeshStandardMaterial({
    wireframe: true,
  });
  material.transparent = true;
  mesh2 = new THREE.Mesh(geometry2, material2);
  scene.add(mesh2);

  geometry3 = new THREE.SphereGeometry(0.35, 8, 16);
  material3 = new THREE.MeshStandardMaterial({
    wireframe: true,
  });
  material.transparent = true;
  mesh3 = new THREE.Mesh(geometry3, material3);
  scene.add(mesh3);

  geometry4 = new THREE.SphereGeometry(0.25, 8, 8);
  material4 = new THREE.MeshStandardMaterial({
    wireframe: true,
  });
  material.transparent = true;
  mesh4 = new THREE.Mesh(geometry4, material4);
  scene.add(mesh4);

  var light = new THREE.DirectionalLight("RGB(255, 255,0)", 1.2);
  light.position.set(1, 1, 1);
  scene.add(light);

  // renderer.setClearColor("#ffffff");
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;
}

// renderer.render(scene, camera);
animate();

function animate() {
  if (flag1) {
    a1 += value;
    if (a1 >= 1) flag1 = false;
  } else {
    a1 -= value;
    if (a1 <= 0) flag1 = true;
  }
  if (flag2) {
    a2 += value;
    if (a2 >= 1) flag2 = false;
  } else {
    a2 -= value;
    if (a2 <= 0) flag2 = true;
  }

  requestAnimationFrame(animate);
  mesh.rotation.x += 0.0005;
  mesh.rotation.y += 0.005;
  material.opacity = a1;

  mesh2.rotation.y += 0.001;
  mesh2.rotation.z -= 0.01;
  material2.opacity = a2;

  mesh3.rotation.x -= 0.001;
  mesh3.rotation.z += 0.01;
  material3.opacity = 1 - a1;

  mesh4.rotation.y -= 0.001;
  mesh4.rotation.z += 0.01;
  material4.opacity = 1 - a2;

  renderer.render(scene, camera);

  console.log(a1 + "  " + a2);
}
