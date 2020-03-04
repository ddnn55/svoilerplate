import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

export default async url => new Promise((resolve, reject) => {
    // instantiate a loader
    var loader = new SVGLoader();

    // load a SVG resource
    loader.load(
        // resource URL
        url,
        // called when the resource is loaded
        function(data) {
            var paths = data.paths;
            var group = new THREE.Group();

            for (var i = 0; i < paths.length; i++) {
                var path = paths[i];

                var material = new THREE.MeshBasicMaterial({
                    color: path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });

                var shapes = path.toShapes(true);

                for (var j = 0; j < shapes.length; j++) {
                    var shape = shapes[j];
                    var geometry = new THREE.ShapeBufferGeometry(shape);
                    var mesh = new THREE.Mesh(geometry, material);
                    group.add(mesh);
                }
            }

            resolve(group);
        },
        // called when loading is in progresses
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function(error) {
            console.error(error);
            reject("svg2three: SVG load and transform failed");
        }
    );
});
