var camera, scene, renderer;
var geometry = new Array();
var material = new Array();
var mesh = new Array();
var a1, a2, flag1, flag2, value;
var light, l, flag3;

init();

function init() {
  scene = new THREE.Scene();
  value = 0.005;

  flag1 = true;
  flag2 = true;
  a1 = 0;
  a2 = 0.5;
  l = 0.3;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  geometry[0] = new THREE.SphereGeometry(0.5, 64, 64);
  geometry[1] = new THREE.SphereGeometry(0.45, 16, 32);
  geometry[2] = new THREE.SphereGeometry(0.35, 8, 16);
  geometry[3] = new THREE.SphereGeometry(0.25, 8, 8);

  for (var i = 0; i < 4; i++) {
    material[i] = new THREE.MeshStandardMaterial({
      wireframe: true,
    });
    material[i].transparent = true;
    mesh[i] = new THREE.Mesh(geometry[i], material[i]);
    scene.add(mesh[i]);
  }

  light = new THREE.DirectionalLight("RGB(255, 255,0)", 1.2);
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
  if (flag3) {
    l += value;
    if (l >= 1.5) flag3 = false;
  } else {
    l -= value;
    if (l <= 0.3) flag3 = true;
  }

  requestAnimationFrame(animate);
  mesh[0].rotation.x += 0.0005;
  mesh[0].rotation.y += 0.005;
  material[0].opacity = a1;

  mesh[1].rotation.y += 0.001;
  mesh[1].rotation.z -= 0.01;
  material[1].opacity = a2;

  mesh[2].rotation.x -= 0.001;
  mesh[2].rotation.z += 0.01;
  material[2].opacity = 1 - a1;

  mesh[3].rotation.y -= 0.001;
  mesh[3].rotation.z += 0.01;
  material[3].opacity = 1 - a2;

  light.intensity = l;

  renderer.render(scene, camera);

  console.log(a1 + "  " + a2 + "  " + l);
}
