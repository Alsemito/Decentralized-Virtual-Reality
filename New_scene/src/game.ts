import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"
import { DonationsBox } from './donationsBox'


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const cornerStoneBrickWall = new Entity('cornerStoneBrickWall')
engine.addEntity(cornerStoneBrickWall)
cornerStoneBrickWall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cornerStoneBrickWall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("018773fa-dd9b-4924-a07c-c803fa36f9a5/Module_Stone_Curve_01/Module_Stone_Curve_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
cornerStoneBrickWall.addComponentOrReplace(gltfShape2)

const cornerStoneBrickWall2 = new Entity('cornerStoneBrickWall2')
engine.addEntity(cornerStoneBrickWall2)
cornerStoneBrickWall2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(1, 0, 0.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
cornerStoneBrickWall2.addComponentOrReplace(transform4)
cornerStoneBrickWall2.addComponentOrReplace(gltfShape2)

const cornerStoneBrickWall3 = new Entity('cornerStoneBrickWall3')
engine.addEntity(cornerStoneBrickWall3)
cornerStoneBrickWall3.setParent(_scene)
cornerStoneBrickWall3.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(1, 0, 15.5),
  rotation: new Quaternion(2.1770622922413687e-15, -1, 1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
cornerStoneBrickWall3.addComponentOrReplace(transform5)

const cornerStoneBrickWall4 = new Entity('cornerStoneBrickWall4')
engine.addEntity(cornerStoneBrickWall4)
cornerStoneBrickWall4.setParent(_scene)
cornerStoneBrickWall4.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(-5.566012738602091e-15, -0.70710688829422, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
cornerStoneBrickWall4.addComponentOrReplace(transform6)

const stoneBrickWallWithWindowFrame = new Entity('stoneBrickWallWithWindowFrame')
engine.addEntity(stoneBrickWallWithWindowFrame)
stoneBrickWallWithWindowFrame.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(3, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-2.5149002075195312, 1, 0.9999995231628418)
})
stoneBrickWallWithWindowFrame.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("f81f2a0b-ff94-485c-900a-1993f125497c/Module_Stone_Straight_Window_01/Module_Stone_Straight_Window_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
stoneBrickWallWithWindowFrame.addComponentOrReplace(gltfShape3)

const stoneBrickWindowWithStainedGlass = new Entity('stoneBrickWindowWithStainedGlass')
engine.addEntity(stoneBrickWindowWithStainedGlass)
stoneBrickWindowWithStainedGlass.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.5, 0, 12.5),
  rotation: new Quaternion(-1.0532029689016599e-14, 0.7071067094802856, -8.429368136830817e-8, -0.70710688829422),
  scale: new Vector3(2.25, 1, 1)
})
stoneBrickWindowWithStainedGlass.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("63b1ed7a-fd00-41f0-9eab-71e17873b491/Module_Stone_Straight_Window_02/Module_Stone_Straight_Window_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stoneBrickWindowWithStainedGlass.addComponentOrReplace(gltfShape4)

const stoneBrickWindowWithStainedGlass2 = new Entity('stoneBrickWindowWithStainedGlass2')
engine.addEntity(stoneBrickWindowWithStainedGlass2)
stoneBrickWindowWithStainedGlass2.setParent(_scene)
stoneBrickWindowWithStainedGlass2.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(1, 0, 4),
  rotation: new Quaternion(4.265412706334426e-15, 0.70710688829422, -8.429371689544496e-8, 0.7071067094802856),
  scale: new Vector3(2.25, 1, 1)
})
stoneBrickWindowWithStainedGlass2.addComponentOrReplace(transform9)

const squaredStoneColumn = new Entity('squaredStoneColumn')
engine.addEntity(squaredStoneColumn)
squaredStoneColumn.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(11, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
squaredStoneColumn.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("50ccb445-b4d0-4f6e-80c1-7a77d5b13a32/Pillar_Quad_Full_01/Pillar_Quad_Full_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
squaredStoneColumn.addComponentOrReplace(gltfShape5)

const squaredStoneColumn2 = new Entity('squaredStoneColumn2')
engine.addEntity(squaredStoneColumn2)
squaredStoneColumn2.setParent(_scene)
squaredStoneColumn2.addComponentOrReplace(gltfShape5)
const transform11 = new Transform({
  position: new Vector3(5.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
squaredStoneColumn2.addComponentOrReplace(transform11)

const concreteRoundedTable = new Entity('concreteRoundedTable')
engine.addEntity(concreteRoundedTable)
concreteRoundedTable.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable.addComponentOrReplace(transform13)
const gltfShape6 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
concreteRoundedTable.addComponentOrReplace(gltfShape6)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
loveseat.addComponentOrReplace(transform14)
const gltfShape7 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
loveseat.addComponentOrReplace(gltfShape7)

const loveseat2 = new Entity('loveseat2')
engine.addEntity(loveseat2)
loveseat2.setParent(_scene)
loveseat2.addComponentOrReplace(gltfShape7)
const transform15 = new Transform({
  position: new Vector3(5, 0, 3.5),
  rotation: new Quaternion(4.57389363539497e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
loveseat2.addComponentOrReplace(transform15)

const redBicycle = new Entity('redBicycle')
engine.addEntity(redBicycle)
redBicycle.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(13, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redBicycle.addComponentOrReplace(transform16)
const gltfShape8 = new GLTFShape("6ca825e8-3955-480f-867f-7a64af316e64/Bicycle_01/Bicycle_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
redBicycle.addComponentOrReplace(gltfShape8)

const box = new DonationsBox(
  { position: new Vector3(8, 0, 9.5), rotation: new Quaternion(0, 0, 0, 1)},
  '0x38485a524f796C957800d8e006c00B489D648b1e',
  10
)

const isfahanRug = new Entity('isfahanRug')
engine.addEntity(isfahanRug)
isfahanRug.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(8, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
isfahanRug.addComponentOrReplace(transform17)
const gltfShape9 = new GLTFShape("ad246a68-7e29-4cb1-a71f-e0b1d4f0c57d/Carpet_03/Carpet_03.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
isfahanRug.addComponentOrReplace(gltfShape9)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }
