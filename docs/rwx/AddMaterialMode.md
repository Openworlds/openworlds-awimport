# AddMaterialMode

The `AddMaterialMode` command is an RWX Command that adds the specified material mode to the material modes of the current material.

### Usage

    AddMaterialMode mode

### Description

This command adds the specified material mode *mode* to the material modes of the current material.
Currently the only supported mode is *double*. 
Setting the material mode to *double* causes all polygons to be created double-sided (i.e. it will not be necessary to create two polygons for a surface to be visible from both sides). 
Since it doubles the polygon count for all affected clumps, care should be used with the double material mode. For best performance, be sure to only apply it to polygons that are actually visible from both sides.

### Arguments

The only valid material mode supported is *double*

### Example

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
