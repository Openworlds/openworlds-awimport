# ProtoInstance
### Usage
    ProtoInstance name
### Description
This command instantiates the given prototype. This adds copies of all the polygons in the prototype into the current clump under construction. Note that this process does not create a new child clump. 
See ProtoBegin for more information. 
### Arguments
*name* is the name of the prototype, as declared in a previous ProtoBegin command.
###Example
    ProtoInstance model1

Model example utilizing multiple protoinstances.
```
modelbegin
  protobegin model1
   # model code in here
  protoend
  protobegin model2
   # model code in here
  protoend
  protobegin model3
   # model code in here
  protoend
  clumpbegin
   protoinstance model1
   protoinstance model2
   protoinstance model3
  clumpend
 modelend
```
