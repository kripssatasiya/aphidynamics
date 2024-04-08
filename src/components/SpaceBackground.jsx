
// color changing
// import { useEffect } from 'react';
// import * as THREE from 'three';

// export default function SpaceBackground() {
//     useEffect(() => {
//         let scene, camera, renderer, plane;

//         const init = () => {
//             scene = new THREE.Scene();
//             camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//             renderer = new THREE.WebGLRenderer({ antialias: true });
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             renderer.domElement.style.position = 'fixed';
//             renderer.domElement.style.top = '0';
//             renderer.domElement.style.left = '0';
//             renderer.domElement.style.zIndex = '-1';
//             document.body.appendChild(renderer.domElement);

//             camera.position.z = 100;

//             // Create a plane geometry
//             const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 1, 1);
//             const material = new THREE.ShaderMaterial({
//                 uniforms: {
//                     uTime: { value: 0.0 }
//                 },
//                 vertexShader: `
//                     varying vec2 vUv;

//                     void main() {
//                         vUv = uv;
//                         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//                     }
//                 `,
//                 fragmentShader: `
//                     uniform float uTime;
//                     varying vec2 vUv;

//                     void main() {
//                         gl_FragColor = vec4(sin(uTime + vUv.x), cos(uTime + vUv.y), 0.5, 1.0);
//                     }
//                 `
//             });

//             plane = new THREE.Mesh(geometry, material);
//             scene.add(plane);

//             const animate = () => {
//                 requestAnimationFrame(animate);

//                 // Update shader time uniform
//                 material.uniforms.uTime.value += 0.05;

//                 renderer.render(scene, camera);
//             };

//             animate();
//         };

//         init();

//         return () => {
//             scene.remove(plane);
//             renderer.dispose();
//         };
//     }, []);

//     return null;
// }

import { useEffect } from 'react';
import * as THREE from 'three';

export default function SpaceBackground() {
    useEffect(() => {
        let scene, camera, renderer, particles;

        const init = () => {
            // Create a scene
            scene = new THREE.Scene();

            // Create a camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 300;

            // Create a renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.domElement.style.position = 'fixed';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.zIndex = '-1';
            renderer.setClearColor(0xffffff); // 0xffffff Set background color to white

            document.body.appendChild(renderer.domElement);

            // Create particles
            const particleCount = 1000;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 1000;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const particlesMaterial = new THREE.PointsMaterial({ color: 0xF0F8FF, size: 15 }); // Set size here  (0xECF0F1 - very light grey , 0xF0F8FF - alice blue)
            particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Animate the particles
            const animate = () => {
                requestAnimationFrame(animate);

                particles.rotation.x += 0.001;
                particles.rotation.y += 0.001;

                renderer.render(scene, camera);
            };

            animate();
        };

        init();

        // Cleanup function
        return () => {
            // Remove particles and dispose the renderer
            scene.remove(particles);
            renderer.dispose();
        };
    }, []);

    return null;
}
