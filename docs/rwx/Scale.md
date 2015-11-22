# Scale
### Usage
    Scale x y z
### Description
This command scales the current transformation matrix by the given amounts along the X, Y, and Z axes. A scale factor of 1.0 results in no change along that axis. A scale factor of 0(zero) would result in that dimension being flattened.
### Arguments
*x* is the amount to scale in the X direction 
*y* is the amount to scale in the Y direction 
*z* is the amount to scale in the Z direction

### Examples
    Scale 1 2 1 # Means that the object is scaled twice as big in height and no change in the other dimensions.

One of the uses would be taking a model and scaling it from its original size.
###### Example 1
```
modelbegin
 protobegin model1
  # model code in here
 protoend
 clumpbegin
  scale 1 2 1
  protoinstance model1
 clumpend
modelend
```

###### Example 2
Here the model is first scaled two times in height and then another copy is moved 1m along the x axis and scaled two times in width, in addition to the height, that is kept from the previous scaling. If you wanted to cancel the first scaling, then the Identity command would need to be inserted before the translate command.
```
modelbegin
 protobegin model1
  # model code in here
 protoend
 clumpbegin
  scale 1 2 1
  protoinstance model1
  translate 1 0 0
  scale 2 1 1
  protoinstance model1
 clumpend
modelend
```
