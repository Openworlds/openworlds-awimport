# Polygon

### Usage
    Polygon n v1 v2 v3 ... [Tag t] 

*Note*: [ ] denotes optional arguments.
*Also note*: the Polygon and PolygonExt commands are equivalent and may be used interchangeably.

### Description
This command creates a new polygon and adds it to the current clump under construction. The polygon can have an optional numeric tag assigned to it. 
The number of vertices specified must match the value of . 
Vertices are identified by the order in which they were declared in the current clump. The first vertex in the clump is vertex 1. Thus, a quadrangle made of the first four vertices in the clump would be declared as: 
Polygon 4 1 2 3 4 
The polygon can optionally be assigned a numeric tag. The tag serves to mark that polygon for identification by Active Worlds. The following tag values have special meaning in Active Worlds: 
100 - Identifies the polygon as a target for the sign object action. 200 - Identifies the polygon as a target for the picture object action.
Be aware that using a polygon command for other than a flat surface is not recommended as it will lead to unpredictable visual distortion in world.

### Arguments
*n* specifies the number of sides (and vertices) in the polygon 
*v1* is the index of vertice 1.
*v2* is the index of vertice 2.
*v3* is the index of vertice 3.
*...* is additional indices of n-3 vertice vn.

### Examples
below are two examples of a 8 sided panel, one using the polygon command and the other using the triangle command for comparison. When handcoding the model the polygon statement is a lot simpler.

##### Model using polygon command

    ModelBegin						
     ClumpBegin
      Surface .7 .6 0
      color .5 .5 .5	
      Vertex	0.499	0	0.206	UV	0.00	0.58
      Vertex	0.499	0	-0.206	UV	0.00	1.41
      Vertex	0.206	0	-0.499	UV	0.59	1.99
      Vertex	-0.206	0	-0.499	UV	1.41	1.99
      Vertex	-0.499	0	-0.206	UV	2.00	1.41
      Vertex	-0.499	0	0.206	UV	2.00	0.58
      Vertex	-0.206	0	0.499	UV	1.41	0.0
      Vertex	0.206	0	0.499	UV	0.59	0.0
      texture floor02						
      polygon 8  1 2 3 4 5 6 7 8						
     ClumpEnd						
    ModelEnd

###### Model not using polygon command

```
ModelBegin						
 ClumpBegin
  Surface .7 .6 0
  color .5 .5 .5	
  Vertex	0.499	0	0.206	UV	0.00	0.58
  Vertex	0.499	0	-0.206	UV	0.00	1.41
  Vertex	0.206	0	-0.499	UV	0.59	1.99
  Vertex	-0.206	0	-0.499	UV	1.41	1.99
  Vertex	-0.499	0	-0.206	UV	2.00	1.41
  Vertex	-0.499	0	0.206	UV	2.00	0.58
  Vertex	-0.206	0	0.499	UV	1.41	0.0
  Vertex	0.206	0	0.499	UV	0.59	0.0
  texture floor02
  Triangle 7 8 6
  Triangle 4 7 6
  Triangle 2 7 4
  Triangle 1 7 2
  Triangle 3 7 1
  Triangle 3 5 7
 ClumpEnd						
ModelEnd
```

