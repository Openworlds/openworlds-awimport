# MaterialMode

### Usage
    MaterialMode mode

*Note*: the MaterialMode and MaterialModes commands are equivalent.

### Description
This command sets the material mode of the current material. Currently the only supported mode is *double*. 
Setting the material mode to double causes all polygons to be created double-sided (i.e. it will not be necessary to create two polygons for a surface to be visible from both sides).
Since it doubles the polygon count for all affected clumps, care should be used with material mode double. For best performance, be sure to only apply it to polygons that are actually visible from both sides. 
### Arguments
*mode* is the material mode which can be *double* or *NULL*
### Examples
    MaterialMode double
Makes both sides of the polygon visible from both sides which is useful when a single sided panel needs to be visible from both sides.

A model example that uses it is shown below. The benefit in using it is if you are handcoding a model and feel it's too much work to specify the faces on the opposite side of the model. All modeling software will automatically produce the code for each side, unless you have a defective mesh caused by converting a model from another format.

    ModelBegin
     ClumpBegin
      Color 1 1 1
      Surface .8 .8 0
      AddMaterialMode Double
      Texture wall01
      Vertex -.2 0 0 UV 0 1
      Vertex -.2 .4 0 UV 0 0
      Vertex .2 0 0 UV 1 1
      Vertex .2 .4 0 UV 1 0
      Quad 2 1 3 4
     ClumpEnd
    ModelEnd
