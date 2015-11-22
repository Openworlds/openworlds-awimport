# ProtoInstanceGeometry
### Usage
    ProtoInstanceGeometry name
### Description
This command is similar to the ProtoInstance command except that the materials of the prototype are not copied into the current clump. Rather, the new polygons are assigned the current material.
This is useful if your object makes multiple uses of the same group of polygons, but you would like different groups to use different materials (i.e. appear differently). For example, a colorful bunch of balloons could be created by making a single balloon prototype, and then using ProtoInstanceGeometry to instantiate the balloon prototype multiple times each with a different color.
See ProtoBegin for more discussion of prototypes.
### Arguments
*name* is the name of the prototype, as declared in a previous ProtoBegin command.
### Examples
Here is an example on how the ProtoInstanceGeometry command can be used. It uses more coding than needed but makes it easier to understand.

```
modelbegin
  protobegin model1
   color color1
   # model code in here
  protoend
  protobegin Bunch
   protoinstancegeometry model1
   color color2
   protoinstancegeometry model1
   color color3
   protoinstancegeometry model1
  protoend
  clumpbegin
   protoinstance Bunch
  clumpend
 modelend
```
