# Triangle
### Usage
    Triangle v1 v2 v3 [Tag value] 
*Note*: [ ] denotes optional arguments 
### Description
This command creates a new triangle(i.e. a three-sided polygon) and adds it to the current clump under construction. The triangle can have an optional numeric tag assigned to it.
Vertices are identified by the order in which they were declared in the current clump. The first vertex in the clump is vertex 1. Thus, a triangle made of the first three vertices in the clump would be declared as:

    Triangle 1 2 3
Note that this is exactly identical to the command: 

    Polygon 3 1 2 3
Please note that the order of the vertices is important as well as the rotational order. triangle 1 2 3 and triangle 3 2 1 create mirror opposites of each other(each is the other side of the same coin/triangle).
The triangle can optionally be assigned a numeric tag. The tag serves to mark that polygon for identification by Active Worlds. The following tag values have special meaning in Active Worlds: 
100 - Identifies the polygon as a target for the sign object action(e.g. 'create sign ...')
200 - Identifies the polygon as a target for the picture object action(e.g. 'create picture ...')
### Arguments
*v1* is the index of vertex 1
*v2* is the index of vertex 2
*v3* is the index of vertex 3
*value* is a positive whole number with a likely upper value of 255(needs verification). This tag number allows for certain Activeworlds commands to be use on the face of this triangle.
### Examples
    triangle 3 2 1
