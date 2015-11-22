# Vertex
### Usage
    Vertex x y z [UV uv] [#!prelight r g b] 
*Note*: [ ] denotes optional arguments.
*Note*: Vertex and VertexExt commands are equivalent and may be used interchangeably.
### Description
This command creates a new vertex and adds it to the current clump under construction. The vertex can have optional additional parameters. 
The position of the vertex is transformed by the transformation matrix currently in effect. 
### Argument
x y z specifies the 3D coordinates of the vertice. 
uv specifies the texture coordinates for this vertice. uv coordinates determine how textures applied to the object are mapped to each particular vertice. A vertice without a uv value will take on the color of the current clump.
prelight r g b specifies a pre-lit color to be used as a starting point at this vertice before lighting is calculated by the browser. Pre-lit colors allow for very subtle control over the effects of lighting on an object. The values for color components should be specified in the range 0.0 to 1.0. r is the red value, g is the green value, and b is the blue value.
Once a vertice in a clump has been assigned a prelight color, all vertices in that clump become pre-lit as well. If prelight has not been specified on the other vertices, they default to the last previously specified prelight value on that clump (or 0.0 0.0 0.0 if no previous prelight has been specified). This can be useful for assigning multiple sequential vertices the same prelight value without having to individually specify a prelight value for each vertex. 
The prelight option is a RWX extension and should be prefaced with #! when used in RWX files that are intended to work with other software.
### Examples
Vertex Example
Vertex usage using UV coordinates:
```
ModelBegin
  ClumpBegin
   Surface 0.7 0.9 0.0
   Color 0.5882 0.5882 0.5882
   LightSampling Vertex
   Texture rock001
   Vertex -0.5 0 0.5 UV 0 1.0 #1
   Vertex -0.5 0 0 UV 0 0.5 #2
   Vertex -0.5 0 -0.5 UV 0 0 #3
   Vertex 0 0 0.5 UV 0.5 1.0 #4
   Vertex 0 0 0 UV 0.5 0.5 #5
   Vertex 0 0 -0.5 UV 0.5 0 #6
   Vertex 0.5 0 0.5 UV 1.0 1.0 #7
   Vertex 0.5 0 0 UV 1.0 0.5 #8
   Vertex 0.5 0 -0.5 UV 1.0 0 #9
   Triangle 2 1 5
   Triangle 4 5 1
   Triangle 5 4 8
   Triangle 7 8 4
   Triangle 3 2 6
   Triangle 5 6 2
   Triangle 6 5 9
   Triangle 8 9 5
  ClumpEnd
 ModelEnd
```
Alternate way using prototypes to create the exact same object:
```
ModelBegin
  ProtoBegin walkway
   Ambient 0.7
   Diffuse 0.9
   Color 0.5882 0.5882 0.5882
   LightSampling Vertex
   Texture wrock001
   Vertex -0.5 0 0.5 UV 0 1.0 #1
   Vertex -0.5 0 0 UV 0 0.5 #2
   Vertex -0.5 0 -0.5 UV 0 0 #3
   Vertex 0 0 0.5 UV 0.5 1.0 #4
   Vertex 0 0 0 UV 0.5 0.5 #5
   Vertex 0 0 -0.5 UV 0.5 0 #6
   Vertex 0.5 0 0.5 UV 1.0 1.0 #7
   Vertex 0.5 0 0 UV 1.0 0.5 #8
   Vertex 0.5 0 -0.5 UV 1.0 0 #9
   Triangle 2 1 5
   Triangle 4 5 1
   Triangle 5 4 8
   Triangle 7 8 4
   Triangle 3 2 6
   Triangle 5 6 2
   Triangle 6 5 9
   Triangle 8 9 5
  ProtoEnd
  ClumpBegin
   ProtoInstance walkway
  ClumpEnd
 ModelEnd
```
