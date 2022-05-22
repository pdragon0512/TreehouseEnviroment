import { useRef, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Sky, PointerLockControls } from "@react-three/drei"
import { Physics, useBox} from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { useGLTF} from "@react-three/drei"
import ImageList from '@material-ui/core/ImageList';
import { makeStyles} from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import { NFTCard } from "./NFTCard"
import * as THREE from 'three';

function Wall({ ...props }) {
  const [ref] = useBox(() => ({ type : 'Dynamic', ...props }))
  return (
    <mesh ref={ref} />
  )
}

function Treehouse_1({ ...props }) {
  const group = useRef()
  // const [ref] = useBox(() => ({ type : 'Dynamic', args: [3.2, 0.1, 0.0001], position: [-0.2, 0, 1]}))
  // const { nodes, materials } = useGLTF('/treehouse_1.glb')
  const { nodes, materials } = useGLTF('/Latest.glb')
  const [target, setTarget] = useState(null);
  
  const [photo1, setPhoto1] = useState('pink');
  const [photo2, setPhoto2] = useState('blue');
  const [photo3, setPhoto3] = useState('orange');
  const [photo4, setPhoto4] = useState('black');
  
  const changeMaterial = (e) => {
    if(target === "Cube310_1" || target === "Cube308_2" || target === "Cube309_2" ||target === "Cube030"){
      
      if(target === "Cube310_1"){
        localStorage.setItem('object', 1);
        localStorage.setItem('photo1', "white.png");
        document.getElementById('closeDialog').click();
      }
      
      if(target === "Cube308_2"){
        localStorage.setItem('object', 2);
        localStorage.setItem('photo2', "white.png");
        document.getElementById('closeDialog').click();
      }
      if(target === "Cube309_2"){
        localStorage.setItem('object', 3);
        localStorage.setItem('photo3', "white.png");
        document.getElementById('closeDialog').click();
      }
      if(target === "Cube030"){
        localStorage.setItem('object', 4);
        localStorage.setItem('photo4', "white.png");
        document.getElementById('closeDialog').click();
      }
      document.getElementById("myButton").click();

      var temp = window.open("", "_blank", "menubar=no,fullscreen=no,width=100,height=100,left=2000,top=1000");
      
      if(temp)
        temp.close()
    }
  }

  const changeBorderMaterial = (e) => {
    if((e.object.name ==='Cube310_1') && photo1 ==='pink'){
      setPhoto1('red');
      setTarget(e.object.name)
    }
    if((e.object.name ==='Cube308_2') && photo2 ==='blue'){
      setPhoto2('red');
      setTarget(e.object.name)
    }
    if((e.object.name ==='Cube309_2') && photo3 ==='orange'){
        setPhoto3('red');
        setTarget(e.object.name)
    }
    if((e.object.name ==='Cube030') && photo4 ==='black'){
      setPhoto4('red');
      setTarget(e.object.name)
    }
  }
  const leaveBorderMaterial = (e) => {
    if(e.object.name ==='Cube310_1' && photo1 ==='red'){
      setPhoto1('pink');
      setTarget(null)
    }
    if(e.object.name ==='Cube308_2' && photo2 ==='red'){
      setPhoto2('blue');
      setTarget(null)
    }
    if(e.object.name ==='Cube309_2' && photo3 ==='red'){
      setPhoto3('orange');
      setTarget(null)
    }
    if((e.object.name ==='Cube030') && photo4 ==='red'){
      setPhoto4('black');
      setTarget(null)
    }
  }

  const texture1 = useLoader(TextureLoader, props.image1, loader => {
    loader.crossOrigin = "Anonymous"
  })

  const texture2 = useLoader(TextureLoader, props.image2, loader => {
    loader.crossOrigin = "Anonymous"
  })

  const texture3 = useLoader(TextureLoader, props.image3, loader => {
    loader.crossOrigin = "Anonymous"
  })

  const texture4 = useLoader(TextureLoader, props.image4, loader => {
    loader.crossOrigin = "Anonymous"
  })
  
if(texture1 && texture2 && texture3 && texture4){

  texture1.center = new THREE.Vector2(1, 0.5)
  texture1.repeat.set(12, 12);
  texture1.wrapS = THREE.MirroredRepeatWrapping;
  texture1.wrapT = THREE.RepeatWrapping;
  texture1.rotation = -1.5708 ;

  texture2.center = new THREE.Vector2(1, 0.5)
  texture2.repeat.set(12, 12);
  texture2.wrapS = THREE.MirroredRepeatWrapping;
  texture2.wrapT = THREE.RepeatWrapping;
  texture2.rotation = -1.5708


  texture3.center = new THREE.Vector2(1, 0.5)
  texture3.repeat.set(12 , 12);
  texture3.wrapS = THREE.MirroredRepeatWrapping;
  texture3.wrapT = THREE.RepeatWrapping;
  texture3.rotation = -1.5708

  texture4.center = new THREE.Vector2(1, 0.5)
  texture4.repeat.set(4, 4);
  texture4.wrapS = THREE.MirroredRepeatWrapping;
  texture4.wrapT = THREE.RepeatWrapping;
  texture4.rotation = -1.5708
  return (
    <group ref={group} {...props} dispose={null} 
    onPointerDown={(e) => {changeMaterial(e)}}
    onPointerOver={(e) => {changeBorderMaterial(e)}}
    onPointerLeave={(e) => {leaveBorderMaterial(e)}}
    onPointerEnter={(e) => {changeBorderMaterial(e)}}
    onPointerMissed={(e) => {setTarget(null)}}
    >
     <group name="Scene">
        <group name="Decorative_tree" position={[1.72, 5.35, -5.28]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Cube004" position={[-4.48, 1.06, -11.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.007742803078144789}>
          <mesh name="Cube017_1" geometry={nodes.Cube017_1.geometry} material={materials.Bed} />
          <mesh name="Cube017_2" geometry={nodes.Cube017_2.geometry} material={materials.Bed2} />
          <mesh name="Cube017_3" geometry={nodes.Cube017_3.geometry} material={materials.Cloth} />
          <mesh name="Cube017_4" geometry={nodes.Cube017_4.geometry} material={materials.ClothB} />
        </group>
        <group name="Cube005" position={[1.43, 4.3, -11.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.00389}>
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials['Material.024']} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.Paper} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.BookA} />
          <mesh name="Cube008_4" geometry={nodes.Cube008_4.geometry} material={materials.CoverA} />
          <mesh name="Cube008_5" geometry={nodes.Cube008_5.geometry} material={materials.BookD} />
          <mesh name="Cube008_6" geometry={nodes.Cube008_6.geometry} material={materials.BookB} />
          <mesh name="Cube008_7" geometry={nodes.Cube008_7.geometry} material={materials.CoverB} />
        </group>
        <group name="Shelves1" position={[4.03, 0.99, -6.84]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02}>
          <mesh name="Shelves1_1" geometry={nodes.Shelves1_1.geometry} material={materials.Shelves_material} />
          <mesh name="Shelves1_2" geometry={nodes.Shelves1_2.geometry} material={materials['Book1_material.001']} />
          <mesh name="Shelves1_3" geometry={nodes.Shelves1_3.geometry} material={materials['Book1_side_material.001']} />
          <mesh name="Shelves1_4" geometry={nodes.Shelves1_4.geometry} material={materials['Book2_material.001']} />
          <mesh name="Shelves1_5" geometry={nodes.Shelves1_5.geometry} material={materials['Book2_side_material.001']} />
          <mesh name="Shelves1_6" geometry={nodes.Shelves1_6.geometry} material={materials['Book3_material.001']} />
          <mesh name="Shelves1_7" geometry={nodes.Shelves1_7.geometry} material={materials['Book3_side_material.001']} />
          <mesh name="Shelves1_8" geometry={nodes.Shelves1_8.geometry} material={materials['Book4_material.001']} />
          <mesh name="Shelves1_9" geometry={nodes.Shelves1_9.geometry} material={materials['Book4_side_material.001']} />
          <mesh name="Shelves1_10" geometry={nodes.Shelves1_10.geometry} material={materials['Book0_material.001']} />
          <mesh name="Shelves1_11" geometry={nodes.Shelves1_11.geometry} material={materials['Book0_side_material.001']} />
        </group>
        <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials['Material.016']} position={[3.24, 2.04, -10.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={materials['Material.016']} position={[-0.88, 1.6, -11.47]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[3.23, 2.13, -11.46]} rotation={[Math.PI / 2, 0, 0.41]} scale={0.000253208534559235} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[3.14, 2.13, -11.26]} rotation={[Math.PI / 2, 0, 0.41]} scale={0.000253208534559235} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} position={[3.5, 2.13, -11.34]} rotation={[Math.PI / 2, 0, 0.41]} scale={0.000253208534559235} />
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} position={[3.41, 2.13, -11.14]} rotation={[Math.PI / 2, 0, 0.41]} scale={0.000253208534559235} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={nodes.Cylinder008.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} position={[0.31, 2.11, -12.62]} rotation={[Math.PI / 2, 0, 0.41]} scale={0.002759347902610898} />
        <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials['Material.002']} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={nodes.Cylinder012.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={nodes.Cylinder013.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder014" geometry={nodes.Cylinder014.geometry} material={nodes.Cylinder014.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder015" geometry={nodes.Cylinder015.geometry} material={nodes.Cylinder015.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder016" geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} position={[3.42, 2.43, -11.04]} rotation={[-Math.PI, 0.41, 0]} scale={[
                0.00010482106154086068,
                0.00010482106154086068,
                2.6569265173748136e-05
            ]} />
        <mesh name="Cylinder017" geometry={nodes.Cylinder017.geometry} material={nodes.Cylinder017.material} position={[3.44, 2.58, -11.25]} rotation={[0.08, 1.16, 1.5]} scale={0.0027593481354415417} />
        <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Material.006']} position={[3.02, 2.76, -9.98]} rotation={[-1.57, -1.47, -3.14]} scale={0.0012076838174834847} />
        <mesh name="Cylinder018" geometry={nodes.Cylinder018.geometry} material={nodes.Cylinder018.material} position={[3.02, 2.76, -9.98]} rotation={[-1.57, -1.47, -3.14]} scale={0.0012076838174834847} />
        <mesh name="Cylinder019" geometry={nodes.Cylinder019.geometry} material={nodes.Cylinder019.material} position={[3.02, 2.76, -9.98]} rotation={[-1.57, -1.47, -3.14]} scale={0.0012076838174834847} />
        <mesh name="Cylinder020" geometry={nodes.Cylinder020.geometry} material={nodes.Cylinder020.material} position={[3.02, 2.76, -9.98]} rotation={[-1.57, -1.47, -3.14]} scale={0.0012076838174834847} />
        <mesh name="Cylinder021" geometry={nodes.Cylinder021.geometry} material={nodes.Cylinder021.material} position={[3.02, 2.76, -9.98]} rotation={[-1.57, -1.47, -3.14]} scale={0.0012076838174834847} />
        <mesh name="Cylinder022" geometry={nodes.Cylinder022.geometry} material={nodes.Cylinder022.material} position={[-4.85, 2.09, -9.98]} rotation={[Math.PI / 2, 0, 0]} scale={0.004783040843904018} />
        <mesh name="Cylinder026" geometry={nodes.Cylinder026.geometry} material={nodes.Cylinder026.material} position={[2.94, 2.9, -9.88]} rotation={[-Math.PI, 0, 0]} scale={[
                0.00048495607916265726,
                0.00048495607916265726,
                5.8616882597561926e-05
            ]} />
        <mesh name="Cylinder027" geometry={nodes.Cylinder027.geometry} material={nodes.Cylinder027.material} position={[2.94, 2.9, -10.09]} rotation={[0, 0, Math.PI]} scale={[
                0.00048495607916265726,
                0.00048495607916265726,
                5.8616882597561926e-05
            ]} />
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={nodes.Cube026.material} position={[-1.2, 0, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cylinder028" geometry={nodes.Cylinder028.geometry} material={nodes.Cylinder028.material} position={[2.94, 2.75, -9.98]} rotation={[Math.PI / 2, 0, 0]} scale={[
                8.046290895435959e-05,
                8.046290895435959e-05,
                0.00011545206507435068
            ]} />
        <mesh name="Cylinder029" geometry={nodes.Cylinder029.geometry} material={nodes.Cylinder029.material} position={[2.31, 2.86, -9.98]} rotation={[-Math.PI / 2, -1.49, Math.PI]} scale={[
                0.0004610201867762953,
                0.00046102015767246485,
                3.254097464377992e-05
            ]} />
        <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={nodes.Cylinder030.material} position={[3.62, 3.14, -9.98]} rotation={[Math.PI / 2, -1.31, 0]} scale={[
                0.001479803817346692,
                0.0014798034681007266,
                9.846025932347402e-05
            ]} />
        <mesh name="Cylinder025" geometry={nodes.Cylinder025.geometry} material={nodes.Cylinder025.material} position={[2.94, 2.74, -9.98]} rotation={[Math.PI / 2, 0, 2.09]} scale={0.00010295271931681782} />
        <mesh name="Cylinder031" geometry={nodes.Cylinder031.geometry} material={nodes.Cylinder031.material} position={[2.94, 2.91, -9.87]} rotation={[-Math.PI, 0, 0]} scale={[
                0.0005424151313491166,
                0.0005424151313491166,
                0.0008112339419312775
            ]} />
        <mesh name="Cylinder032" geometry={nodes.Cylinder032.geometry} material={nodes.Cylinder032.material} position={[2.94, 2.91, -10.1]} rotation={[-Math.PI, 0, 0]} scale={[
                0.0005424151313491166,
                0.0005424151313491166,
                0.0008112339419312775
            ]} />
        <mesh name="Cylinder023" geometry={nodes.Cylinder023.geometry} material={nodes.Cylinder023.material} position={[2.94, 2.74, -9.98]} rotation={[Math.PI / 2, 0, 2.09]} scale={0.00010295271931681782} />
        <mesh name="Cylinder024" geometry={nodes.Cylinder024.geometry} material={nodes.Cylinder024.material} position={[2.94, 2.74, -9.98]} rotation={[Math.PI / 2, 0, 2.09]} scale={0.00010295271931681782} />
        <group name="Cube027" position={[3.14, 2.18, -8.89]} rotation={[Math.PI / 2, 0, 0.86]} scale={0.0032640802673995495}>
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Material.014']} />
          <mesh name="Cube010_2" geometry={nodes.Cube010_2.geometry} material={materials['Material.015']} />
        </group>
        <group name="Cube028" position={[3.14, 2.33, -8.89]} rotation={[Math.PI / 2, 0, 1.28]} scale={0.0032640802673995495}>
          <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials['Material.012']} />
          <mesh name="Cube011_2" geometry={nodes.Cube011_2.geometry} material={materials['Material.013']} />
        </group>
        {/* <mesh name="Cube030" geometry={nodes.Cube030.geometry} material={materials['Material.009']} position={[0.16, 2.16, -11.92]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.01} /> */}
        
        <mesh name="Cube030" geometry={nodes.Cube030.geometry} position={[0.145, 2.1, -12.1]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.0104}>
        <meshStandardMaterial map={texture4} />
        </mesh>
        
        <mesh name="Cube066" geometry={nodes.Cube066.geometry} material={materials['Material.022']} position={[5.57, -0.3, -5.32]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube084" geometry={nodes.Cube084.geometry} material={materials['Material.016']} position={[0.41, 1.48, -9.81]} rotation={[Math.PI / 2, 0, 0.98]} scale={0.01} />
        <mesh name="Cylinder033" geometry={nodes.Cylinder033.geometry} material={materials['Material.024']} position={[-4.79, 0.47, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.0012051136000081897,
                0.0012051136000081897,
                0.002341316780075431
            ]} />
        <mesh name="Cylinder034" geometry={nodes.Cylinder034.geometry} material={materials['Material.024']} position={[4.9, 0.47, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.001133462181314826,
                0.001133462181314826,
                0.002341316780075431
            ]} />
        <mesh name="Cylinder035" geometry={nodes.Cylinder035.geometry} material={materials['Material.024']} position={[0, 0.47, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.0012435003882274032,
                0.0012435003882274032,
                0.002341316780075431
            ]} />
        <mesh name="Cylinder036" geometry={nodes.Cylinder036.geometry} material={materials['Material.024']} position={[-5.84, 0.47, -2.76]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.0010282107396051288,
                0.0010282107396051288,
                0.002341316780075431
            ]} />
        <mesh name="Cylinder037" geometry={nodes.Cylinder037.geometry} material={materials['Material.024']} position={[-5.84, 0.47, -0.6]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.001077237306162715,
                0.001077237306162715,
                0.002341316780075431
            ]} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={nodes.Cube019.material} position={[
                -0.3536815643310547,
                1.2146214246749878,
                -5.016719341278076
            ]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={nodes.Cube020.material} position={[
                -0.3534431457519531,
                1.804250717163086,
                -5.386754035949707
            ]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.037701308727264404,
                0.009999999776482582,
                0.0016799771692603827
            ]} />
        <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={nodes.Cube023.material} position={[
                -0.3534431457519531,
                1.1548904180526733,
                -5.386754035949707
            ]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.037701308727264404,
                0.009999999776482582,
                0.0016799771692603827
            ]} />
        <mesh name="Cylinder038" geometry={nodes.Cylinder038.geometry} material={materials['Material.016']} position={[-3.57, 0.53, -4.41]} rotation={[Math.PI / 2, 0, 0]} scale={0.0018} />
        <mesh name="NurbsPath" geometry={nodes.NurbsPath.geometry} material={materials['Material.025']} position={[-2.78, 1.61, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="NurbsPath001" geometry={nodes.NurbsPath001.geometry} material={materials['Material.025']} position={[-2.78, 1.18, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube113" geometry={nodes.Cube113.geometry} material={materials['Material.022']} position={[0, 8.44, -3.26]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube182" geometry={nodes.Cube182.geometry} material={materials['Material.022']} position={[-10.11, 7.05, -2.07]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube187" geometry={nodes.Cube187.geometry} material={materials['Material.022']} position={[-8.27, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube209" geometry={nodes.Cube209.geometry} material={materials['Material.022']} position={[-7.29, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube212" geometry={nodes.Cube212.geometry} material={materials['Material.022']} position={[-6.31, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube213" geometry={nodes.Cube213.geometry} material={materials['Material.020']} position={[-5.84, 0.59, -3.35]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cylinder039" geometry={nodes.Cylinder039.geometry} material={materials['Material.024']} position={[-5.5, 0.47, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[
                0.0012051136000081897,
                0.0012051136000081897,
                0.002341316780075431
            ]} />
        <mesh name="Cube232" geometry={nodes.Cube232.geometry} material={materials['Material.022']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube235" geometry={nodes.Cube235.geometry} material={materials['Material.022']} position={[7.18, -1, -0.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0]} />
        <mesh name="Cube236" geometry={nodes.Cube236.geometry} material={materials['Material.022']} position={[7.18, -0.51, -0.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0]} />
        <mesh name="Cube237" geometry={nodes.Cube237.geometry} material={materials['Material.022']} position={[7.18, -0.01, -0.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0]} />
        <mesh name="Cylinder040" geometry={nodes.Cylinder040.geometry} material={materials['Material.022']} position={[7.19, -2.26, 0.7]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0, 0, 0.01]} />
        <mesh name="Cylinder041" geometry={nodes.Cylinder041.geometry} material={materials['Material.022']} position={[7.19, -2.84, 0.65]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0, 0, 0.01]} />
        <mesh name="Cylinder042" geometry={nodes.Cylinder042.geometry} material={materials['Material.022']} position={[7.19, -3.46, 0.62]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0, 0, 0.01]} />
        <mesh name="Cylinder043" geometry={nodes.Cylinder043.geometry} material={materials['Material.022']} position={[7.19, -3.97, 0.95]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0, 0, 0.01]} />
        <mesh name="Cylinder044" geometry={nodes.Cylinder044.geometry} material={materials['Material.021']} position={[6.31, -0.48, 0.33]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
        <mesh name="Cylinder045" geometry={nodes.Cylinder045.geometry} material={materials['Material.021']} position={[7.98, -0.48, 0.33]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
        <mesh name="NurbsPath002" geometry={nodes.NurbsPath002.geometry} material={materials['Material.025']} position={[7.92, -2.21, 1.05]} rotation={[Math.PI / 2, -1.57, 0]} scale={0.01} />
        <mesh name="NurbsPath003" geometry={nodes.NurbsPath003.geometry} material={materials['Material.025']} position={[6.24, -2.21, 1.05]} rotation={[Math.PI / 2, -1.57, 0]} scale={0.01} />
        <group name="Cube002" position={[-5.11, 2.87, -9.08]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}>
          <mesh name="Cube308" geometry={nodes.Cube308.geometry} material={materials['Material.026']} material-color={photo2} />
          <mesh name="Cube308_1" geometry={nodes.Cube308_1.geometry} material={materials['Material.030']} />
          {/* <mesh name="Cube308_2" geometry={nodes.Cube308_2.geometry} material={materials['Material.032']} /> */}
          <mesh name="Cube308_2" geometry={nodes.Cube308_2.geometry}>
          <meshPhongMaterial map={texture2} />  
          </mesh>
        </group>
        <group name="Cube003" position={[-5.19, 3.61, -9.1]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}>
          <mesh name="Cube309" geometry={nodes.Cube309.geometry} material={materials['Material.018']} material-color={photo3}/>
          <mesh name="Cube309_1" geometry={nodes.Cube309_1.geometry} material={materials['Material.030']} />
          {/* <mesh name="Cube309_2" geometry={nodes.Cube309_2.geometry} material={materials['Material.031']} /> */}
          <mesh name="Cube309_2" geometry={nodes.Cube309_2.geometry}>
            <meshStandardMaterial map={texture3} />  
          </mesh>
        </group>
        <group name="Cube006" position={[-5.11, 3.37, -8.21]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}>
          <mesh name="Cube310" geometry={nodes.Cube310.geometry} material={materials['Material.027']} material-color={photo1} />
          {/* <mesh name="Cube310_1" geometry={nodes.Cube310_1.geometry} material={materials['Material.030']} /> */}
          <mesh name="Cube310_1" pla geometry={nodes.Cube310_1.geometry}>
          <meshStandardMaterial map={texture1}/>
          </mesh>
        </group>
        <group name="Cube775" position={[1.92, 1.52, -0.15]} rotation={[Math.PI / 2, 0, -0.02]} scale={[
                0.009365363977849483,
                0.009365363977849483,
                0.00867516826838255
            ]}>
          <mesh name="Cube077_1" geometry={nodes.Cube077_1.geometry} material={materials['dark brown']} />
          <mesh name="Cube077_2" geometry={nodes.Cube077_2.geometry} material={materials['whitish brown']} />
          <mesh name="Cube077_3" geometry={nodes.Cube077_3.geometry} material={materials['light brown']} />
        </group>
        <group name="Leaves001" position={[3.64, 2.9, -9.08]} rotation={[2.48, -1.22, 2.8]} scale={0.0013846296351402998}>
          <mesh name="Icosphere001" geometry={nodes.Icosphere001.geometry} material={materials.Leaves} />
          <mesh name="Icosphere001_1" geometry={nodes.Icosphere001_1.geometry} material={materials.Bark} />
          <mesh name="Icosphere001_2" geometry={nodes.Icosphere001_2.geometry} material={materials.Pot} />
          <mesh name="Icosphere001_3" geometry={nodes.Icosphere001_3.geometry} material={materials.Dirt} />
        </group>
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.016']} position={[0.16, 2.16, -11.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.017']} position={[0.16, 2.16, -11.68]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} material-color={photo4} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -4.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -4.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -4.5]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -5.71]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -5.71]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -4.5]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube037" geometry={nodes.Cube037.geometry} material={materials['Material.029']} position={[-4.06, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh>
        <mesh name="Cube107" geometry={nodes.Cube107.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube108" geometry={nodes.Cube108.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube110" geometry={nodes.Cube110.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube114" geometry={nodes.Cube114.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube115" geometry={nodes.Cube115.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube116" geometry={nodes.Cube116.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube117" geometry={nodes.Cube117.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube118" geometry={nodes.Cube118.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube119" geometry={nodes.Cube119.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube120" geometry={nodes.Cube120.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube121" geometry={nodes.Cube121.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube122" geometry={nodes.Cube122.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube123" geometry={nodes.Cube123.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube124" geometry={nodes.Cube124.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube125" geometry={nodes.Cube125.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube126" geometry={nodes.Cube126.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube127" geometry={nodes.Cube127.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube128" geometry={nodes.Cube128.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube129" geometry={nodes.Cube129.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube130" geometry={nodes.Cube130.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube131" geometry={nodes.Cube131.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube132" geometry={nodes.Cube132.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube133" geometry={nodes.Cube133.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube134" geometry={nodes.Cube134.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube135" geometry={nodes.Cube135.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube136" geometry={nodes.Cube136.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube137" geometry={nodes.Cube137.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube138" geometry={nodes.Cube138.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube139" geometry={nodes.Cube139.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube140" geometry={nodes.Cube140.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube141" geometry={nodes.Cube141.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube142" geometry={nodes.Cube142.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube143" geometry={nodes.Cube143.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube144" geometry={nodes.Cube144.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube145" geometry={nodes.Cube145.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube146" geometry={nodes.Cube146.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube147" geometry={nodes.Cube147.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube148" geometry={nodes.Cube148.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube149" geometry={nodes.Cube149.geometry} material={materials['Material.010']} position={[-6.24, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube150" geometry={nodes.Cube150.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube151" geometry={nodes.Cube151.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube152" geometry={nodes.Cube152.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube153" geometry={nodes.Cube153.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube155" geometry={nodes.Cube155.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube156" geometry={nodes.Cube156.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube157" geometry={nodes.Cube157.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube158" geometry={nodes.Cube158.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube159" geometry={nodes.Cube159.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube160" geometry={nodes.Cube160.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube161" geometry={nodes.Cube161.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube162" geometry={nodes.Cube162.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube163" geometry={nodes.Cube163.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube164" geometry={nodes.Cube164.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -12.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube165" geometry={nodes.Cube165.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube166" geometry={nodes.Cube166.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube167" geometry={nodes.Cube167.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube168" geometry={nodes.Cube168.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube169" geometry={nodes.Cube169.geometry} material={materials['Material.010']} position={[5.72, 0.59, -4.5]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube170" geometry={nodes.Cube170.geometry} material={materials['Material.010']} position={[5.72, 0.59, -5.71]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube171" geometry={nodes.Cube171.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube172" geometry={nodes.Cube172.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube173" geometry={nodes.Cube173.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube174" geometry={nodes.Cube174.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube175" geometry={nodes.Cube175.geometry} material={materials['Material.010']} position={[5.72, 0.59, -5.71]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube176" geometry={nodes.Cube176.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube177" geometry={nodes.Cube177.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube178" geometry={nodes.Cube178.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube179" geometry={nodes.Cube179.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube180" geometry={nodes.Cube180.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube181" geometry={nodes.Cube181.geometry} material={materials['Material.010']} position={[5.72, 0.59, -4.5]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube183" geometry={nodes.Cube183.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube184" geometry={nodes.Cube184.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube185" geometry={nodes.Cube185.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube186" geometry={nodes.Cube186.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube188" geometry={nodes.Cube188.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube189" geometry={nodes.Cube189.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube190" geometry={nodes.Cube190.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube191" geometry={nodes.Cube191.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube192" geometry={nodes.Cube192.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube193" geometry={nodes.Cube193.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube194" geometry={nodes.Cube194.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube195" geometry={nodes.Cube195.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube196" geometry={nodes.Cube196.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube197" geometry={nodes.Cube197.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube198" geometry={nodes.Cube198.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube199" geometry={nodes.Cube199.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube200" geometry={nodes.Cube200.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube201" geometry={nodes.Cube201.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube202" geometry={nodes.Cube202.geometry} material={materials['Material.010']} position={[5.72, 0.59, -3.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube203" geometry={nodes.Cube203.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube204" geometry={nodes.Cube204.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube205" geometry={nodes.Cube205.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube206" geometry={nodes.Cube206.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube207" geometry={nodes.Cube207.geometry} material={materials['Material.010']} position={[5.72, 0.59, -4.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube208" geometry={nodes.Cube208.geometry} material={materials['Material.010']} position={[5.72, 0.59, -4.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
        <mesh name="Cube210" geometry={nodes.Cube210.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube211" geometry={nodes.Cube211.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube216" geometry={nodes.Cube216.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube217" geometry={nodes.Cube217.geometry} material={materials['Material.010']} position={[-5.44, 0.59, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </mesh>
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube075" geometry={nodes.Cube075.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube076" geometry={nodes.Cube076.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube077" geometry={nodes.Cube077.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube214" geometry={nodes.Cube214.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube215" geometry={nodes.Cube215.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube218" geometry={nodes.Cube218.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube219" geometry={nodes.Cube219.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube220" geometry={nodes.Cube220.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube221" geometry={nodes.Cube221.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube222" geometry={nodes.Cube222.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube223" geometry={nodes.Cube223.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube224" geometry={nodes.Cube224.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube225" geometry={nodes.Cube225.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube226" geometry={nodes.Cube226.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube227" geometry={nodes.Cube227.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube228" geometry={nodes.Cube228.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube229" geometry={nodes.Cube229.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube230" geometry={nodes.Cube230.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube231" geometry={nodes.Cube231.geometry} material={materials['Material.019']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube067" geometry={nodes.Cube067.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube068" geometry={nodes.Cube068.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube069" geometry={nodes.Cube069.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube070" geometry={nodes.Cube070.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube071" geometry={nodes.Cube071.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube072" geometry={nodes.Cube072.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube073" geometry={nodes.Cube073.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube074" geometry={nodes.Cube074.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube111" geometry={nodes.Cube111.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube112" geometry={nodes.Cube112.geometry} material={materials['Material.028']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube154" geometry={nodes.Cube154.geometry} material={materials['Material.028']} position={[-11.91, 1.58, -3.38]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cube233" geometry={nodes.Cube233.geometry} material={materials['Material.028']} position={[5.21, -1.36, -0.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0]} />
        <mesh name="Cube234" geometry={nodes.Cube234.geometry} material={materials['Material.028']} position={[5.21, -1.36, -3.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0]} />
      </group>   
    </group>
  )
  }else{
    <div>Loading..</div>
  }
}

export default function App() {

  const nfts = JSON.parse(localStorage.getItem('nfts'));
  const datas = nfts.map((nft) => {
    if(nft.data)
      return nft.data
  })

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      width: 'auto',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 'auto',
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
  let url1 = "white.png";
  if(localStorage.getItem('photo1'))
    url1 = localStorage.getItem('photo1')
  
  
  let url2 = "white.png";
  if(localStorage.getItem('photo2'))
      url2 = localStorage.getItem('photo2')
  
  let url3 = "white.png";
  if(localStorage.getItem('photo3'))
      url3 = localStorage.getItem('photo3')
  
  
  let url4 = "white.png";
      if(localStorage.getItem('photo4'))
          url4 = localStorage.getItem('photo4')
  
      //   let url1 = "android-chrome-192x192.png";
      //     if(localStorage.getItem('photo1'))
      //       url1 = localStorage.getItem('photo1')       
          
      //  let url2 = "android-chrome-192x192-1.png";
      //     if(localStorage.getItem('photo2'))
      //         url2 = localStorage.getItem('photo2')
          
      //   let url3 = "android-chrome-192x192-2.png";
      //     if(localStorage.getItem('photo3'))
      //         url3 = localStorage.getItem('photo3')
                  
      //   let url4 = "android-chrome-192x192-3.png";
      //     if(localStorage.getItem('photo4'))
      //         url4 = localStorage.getItem('photo4')
                  
  
  const [image1, setImage1] = useState(url1);  
  const [image2, setImage2] = useState(url2);  
  const [image3, setImage3] = useState(url3);  
  const [image4, setImage4] = useState(url4);  
  
  

  const updateImage = () => {
    if(localStorage.getItem('photo1'))
      setImage1(localStorage.getItem('photo1'));
    if(localStorage.getItem('photo2'))
      setImage2(localStorage.getItem('photo2'));
    if(localStorage.getItem('photo3'))
      setImage3(localStorage.getItem('photo3'));
    if(localStorage.getItem('photo4'))
      setImage4(localStorage.getItem('photo4'));
  };

  const classes = useStyles();
  return (
    <>
    
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content ">

          <div className="modal-header">
            <h2 className="modal-title">Your NFTs</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
          <div className={classes.root}>
            <ImageList rowHeight={400} className={classes.imageList} style={{opacity : 0.85}}>
              <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
              </ImageListItem>
              {datas.map((item) => (
                <NFTCard key={item.uri} item={item} classes={classes} />
              ))}
            </ImageList>
          </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" id="closeDialog" onClick={() => {
              setTimeout(updateImage, 100);
            }} data-bs-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 80 }} style ={{ width : window.innerWidth, height : window.innerHeight}}>
      <Sky sunPosition={[1000, 200, 1000]} />
      <ambientLight intensity={0.2} />
      <pointLight castShadow intensity={0.4} position={[1, 10, 0]} />
      <Physics gravity={[0, -30, 0]}>
        <Wall position ={[2, 0, -1]} args={[0.1, 0.1, 3.2]}/> 
        <Wall position ={[-2.9, 0, -1]} args={[0.1, 0.1, 3.2]}/> 
        <Wall position ={[-0.2, 0, 1]} args={[3.2, 0.1, 0.0001]}/>
        <Wall position ={[-0.2, 0, -3.55]} args={[3.2, 0.1, 0.0001]}/>
        <Ground position={[0 , -1, 0]}/>
        <Player />
        <Treehouse_1 dispose={null} position={[-0.3, -1, 1.4]} scale={0.35} image1={image1} image2={image2} image3={image3} image4={image4}/>
      </Physics>
      <PointerLockControls  />   
    </Canvas>
    <button type="button" id="myButton" style={{display:"none"}} className="btn btn-primary hidden invisible none" data-bs-toggle="modal" data-bs-target="#myModal">
      Open modal
    </button>
    </>
    
  )

  
}

useGLTF.preload('/Latest.glb')
