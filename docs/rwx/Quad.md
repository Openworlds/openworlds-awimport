#Quad
### Usage
    Quad v1 v2 v3 v4 [UV u v] [Tag value] 

*Note*: [ ] denotes optional arguments 
*Also note*: the Quad and QuadExt commands are equivalent and may be used interchangeably.

### Arguments
*v1* is the index of vertex 1
*v2* is the index of vertex 2
*v3* is the index of vertex 3
*v4* is the index of vertex 4
*value* is a positive whole number with an upper value of 65,536.
This is the same as the limit set for a complete model.

### Description
This command creates a new quadrilateral (i.e. a four-sided polygon) and adds it to the current clump under construction. The quad can have an optional numeric tag assigned to it. 
Vertices are identified by the order in which they were declared in the current clump. The first vertex in the clump is vertex 1. Thus, a quadrangle made of the first four vertices in the clump would be declared as: 

    Quad 1 2 3 4 

Note that this is exactly identical to the command 

    Polygon 4 1 2 3 4 

Please note that the order of the vertices is important as well as the rotational order. quad 1 2 3 4 and quad 4 3 2 1 create mirror opposites of each other(each is the other side of the same coin/quad).
When rectangular face is defined with the vertex numbers following in a clockwise order, a quad's arguments will run counter clockwise in order to be rendered in the direction facing the positive Z axis.
The quad can optionally be assigned a numeric tag. The tag serves to mark that polygon for identification by Active Worlds. The following tag values have special meaning in Active Worlds: 
100 - Identifies the polygon as a target for the sign object action(e.g. 'create sign ...')
200 - Identifies the polygon as a target for the picture object action(e.g. 'create picture ...')
See [Tag](Tag.md) for a discussion of clump tags for use in avatars.
### Other Tags
Quad 1 2 3 4 UV 0 1 tag xxxx where xxxx can be any number between 1 and 65,536.
Tags 100 and 200 are reserved for certain action commands in building as described above. This does not mean you cannot use them, on the contrary they are available so that create texture texturename can be used implicitly without any tag in the action box in the build window.
For Models any tags between the lower and higher limit maybe used, even the ones that are used in avatars without any concern. Since no more that 3 tags can be accessed at one time, this does not mean you cannot have more than that on any given model. The maximum is 64 tags on models or avatars.
### Discussion
Please be aware that most 3D software, as well as hardware, use triangles only. 
The use of Polygon and Quad is discouraged because the browser and hardware have to do additional work to store quads and polygons in memory as triangles. The amount of work depends on the number of polygons that use more than 3 vertices in a given model. Usually this is only a problem with older models or with models converted using older software. This only creates additional work for the browser during the initial loading of the model and/or cache refresh. This maybe a minor disadvantage compared to the smaller file size that is downloaded from the object path or has to be reloaded from cache.
In addition, as the browser tessellates each individual quad from the upper rightmost corner to the opposite corner to split it into triangles, you may get unexpected lighting effects, more so when lightsampling vertex is used. This is true of non-flat quads, and the effects can be seen on Avatars near the noses, some have serious problems with dark shadows there. For any model that is sensitive to this effect, it helps to tessellate it by hand to get the shadows to lay the correct way. In Wings3D it is easy, all you do is connect the two vertices on how you want the light to fall.
### Examples
```
quad 4 3 2 1 # untextured quad since there are no UV's specified, but color can be applied to it.
quad 4 3 2 1 UV 0 1 # this will be able to take texture
quad 4 3 2 1 UV 0 1 tag 240 # tagged for use with "create texture texturename tag 240
```
