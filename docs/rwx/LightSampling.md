# LightSampling
The LightSampling command is an RWX Command that sets the light sampling type of the current material.
### Usage
    LightSampling value

### Description
This command sets the light sampling type of the current material. Valid light sampling types are either facet or vertex. 
Facet-based light sampling (the default) means that each polygon is lit individually by the light source(s) in the world, with a "hard edge" visible from one polygon to the next if the polygons face in different directions. Use facet-based lighting when you want boundaries between the individual polygons making up the object to be visible, for example if you are making an object with lots of right angles, such as a cube. 
Vertex-based light sampling causes polygons to be lit continuously from one polygon to the next, so that the surface appears "smooth" and the boundaries between polygons are not visible. Use vertex-based lighting when you are using polygons to approximate a smooth surface, such as a human face. 
It should be noted that facet-based light sampling is less efficient than vertex-based light sampling and can lead to substantially lower frame rates on complex objects. The reason for this is that facet-based lighting requires each polygon to have its own private set of vertices whereas vertex-based lighting allows polygons to share vertices. 

### Arguments
*value* is the light sampling type which is either *facet* or *vertex*

### Examples
    LightSampling facet # this is the default
    LightSampling vertex # this smooths the edges of the model

The following code shows how a model can be segmented by rendering part of it smooth and the other part not. This can be useful when the model has both curves and rectangular sections that need to be rendered differently.

    modelbegin
     protobegin model1
      lightsampling vertex # <--- vertex
      # model code here
     protoend
     protobegin model2
      lightsampling facet # <--- facet
      # model code here
     protoend
     clumpbegin
      protoinstance model1
      protoinstance model2
     clumpend
    modelend
