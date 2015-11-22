# GeometrySampling
### Usage
    GeometrySampling value

### Description
This command sets the geometry sampling type of the current material. Valid geometry sampling types are solid, wireframe, and pointcloud. However, Activeworlds v3.0+ no longer supports "pointcloud" geometry sampling. The default is solid.

*Note*: contrary to popular belief, wireframe objects do not usually render any faster than solid objects. In fact, they often render slower!

### Arguments
*value* is either *solid* or *wireframe*, all other values will be ignored. 

### Example

    GeometrySampling wireframe

This following will produce a panel like wiremesh model.

    ModelBegin
     ClumpBegin
      Color 1 0 0
      Surface 1 1 1
      GeometrySampling wireframe
      AddMaterialMode Double
      Vertex -.2 0 0 UV 0 1
      Vertex -.2 .4 0 UV 0 0
      Vertex .2 0 0 UV 1 1
      Vertex .2 .4 0 UV 1 0
      Quad 2 1 3 4
     ClumpEnd
    ModelEnd

Note that the color is bright red and it is viewable from both sides.
