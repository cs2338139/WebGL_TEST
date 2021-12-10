var camera, scene, renderer;
var geometry, material, mesh;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var r, g, b, flag, value;
var r2, g2, b2, flag2;

init();

function init() {
  scene = new THREE.Scene();
  value = 0.005;
  r = 0;
  g = 0;
  b = 0;
  flag = true;

  r2 = 0.5;
  g2 = 0.5;
  b2 = 0.5;
  flag2 = true;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  geometry = new THREE.SphereGeometry(0.5, 64, 64);
  material = new THREE.MeshBasicMaterial({
    wireframe: true,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  geometry2 = new THREE.SphereGeometry(0.45, 16, 32);
  material2 = new THREE.MeshBasicMaterial({
    wireframe: true,
  });

  mesh2 = new THREE.Mesh(geometry2, material2);
  scene.add(mesh2);

  geometry3 = new THREE.SphereGeometry(0.35, 8, 16);
  material3 = new THREE.MeshBasicMaterial({
    wireframe: true,
  });

  mesh3 = new THREE.Mesh(geometry3, material3);
  scene.add(mesh3);

  geometry4 = new THREE.SphereGeometry(0.25, 8, 8);
  material4 = new THREE.MeshBasicMaterial({
    wireframe: true,
  });

  mesh4 = new THREE.Mesh(geometry4, material4);
  scene.add(mesh4);

  // var light = new THREE.PointLight(0xffffff, 1, 100);
  // light.position.set(50, 50, 50);
  // scene.add(light);
  // renderer.setClearColor("#ffffff");
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;
}

animate();

function animate() {
  if (flag) {
    r += value;
    g += value;
    b += value;
    if (r >= 1) flag = false;
  } else {
    r -= value;
    g -= value;
    b -= value;
    if (r <= 0) flag = true;
  }
  if (flag2) {
    r2 += value;
    g2 += value;
    b2 += value;
    if (r2 >= 1) flag2 = false;
  } else {
    r2 -= value;
    g2 -= value;
    b2 -= value;
    if (r2 <= 0) flag2 = true;
  }

  requestAnimationFrame(animate);
  mesh.rotation.x += 0.0005;
  mesh.rotation.y += 0.005;
  material.color.setRGB(r, g, b);

  mesh2.rotation.y += 0.001;
  mesh2.rotation.z -= 0.01;
  material2.color.setRGB(r2, g2, b2);

  mesh3.rotation.x -= 0.001;
  mesh3.rotation.z += 0.01;
  material3.color.setRGB(1 - r, 1 - g, 1 - b);

  mesh4.rotation.y -= 0.001;
  mesh4.rotation.z += 0.01;
  material4.color.setRGB(1 - r2, 1 - g2, 1 - b2);

  renderer.render(scene, camera);

  console.log(r + "  " + g + "  " + b);
}
