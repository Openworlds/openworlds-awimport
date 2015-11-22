# TransformBegin
### Usage
    TransformBegin 
### Description
This command saves a copy of the current transformation matrix so that it can be restored at a later point. Use this command when you want to make changes to the current matrix and then be able to return to its original values later. The original values are restored by the TransformEnd command. 
TransformBegin/TransformEnd blocks can be nested arbitrarily deep. 
### Arguments
This command has no arguments.
### Examples
In the example below the translation is reset to 0 in the second transformbegin clause. The other option would be to use Identity command to reset the displacement, but I think the TransformBegin/TransformEnd makes the code more readable.
###### Example 1
```
Modelbegin
 ....
 clumpbegin
  transformbegin
   translate 4 0 0
   ProtoInstance Support
  transformend
  transformbegin
   translate -.1 .06  0.01
   ProtoInstance Cube1
   translate  .2 0  0
   ProtoInstance Cube1
  transformend
 clumpend
Modelend
```
###### Example 2
In this nested example the ProtoInstance Support is translated from the origin, unaffected by the translation applied to Cube1, where as the following Cube2 is translated relative to the position of Cube1. In this case, Identity will not work, one would have to re-arrange the order of the code.
```
Modelbegin
 ....
 clumpbegin
  transformbegin
    translate .2 0  0
    ProtoInstance Cube1
   transformbegin
    translate 4 0 0
    ProtoInstance Support
   transformend    
    translate -.1 .06  0.01
    ProtoInstance Cube2
  transformend
 clumpend
Modelend
```
