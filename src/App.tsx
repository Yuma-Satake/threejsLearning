import { Box, Button, Stack } from "@mui/material";

import { FC } from "react";
import * as THREE from "three";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ReplayIcon from "@mui/icons-material/Replay";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

const handleX = () => {
  cube.rotation.x += 1;
};

const handleY = () => {
  cube.rotation.y -= 1;
};

export const App: FC = () => {
  return (
    <Box sx={{ m: 5, p: 5, borderRadius: 3, border: 1 }}>
      <Stack
        spacing={3}
        direction='row'
        justifyContent='space-between'
      >
        <Button
          variant='contained'
          onClick={handleX}
          startIcon={<SwapVertIcon />}
          fullWidth
        >
          縦回転
        </Button>
        <Button
          variant='contained'
          onClick={handleY}
          startIcon={<SwipeLeftIcon />}
          fullWidth
        >
          横回転
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            window.location.reload();
          }}
          startIcon={<ReplayIcon />}
          fullWidth
        >
          リロード
        </Button>
      </Stack>
    </Box>
  );
};
