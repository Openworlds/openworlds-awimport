# Rotate

### Usage
    Rotate x y z r
### Description
This command rotates the current transformation matrix by the given angle around the given vector. Some useful rotation vectors are:

1 0 0 - rotates around the X axis
0 1 0 - rotates around the Y axis
0 0 1 - rotates around the Z axis 


### Arguments
*x* *y* *z* specifies the vector to rotate around and can be values of 0 or 1.
*r* is the angle to rotate (in degrees)

### Examples
The syntax is different from the one used in building with objects.

    Rotate 0 1 0 90 # Means that the rotation is 90 degrees around the Y axis.

One of the uses would be taking a model and rotating it differently from its original position.

###### Example 1
```
modelbegin
 protobegin model1
  # model code in here
 protoend
 clumpbegin
  rotate 0 1 0 90
  protoinstance model1
 clumpend
modelend
```

###### Example 2
Here the model is first rotate 90 degrees in the Y axis and then another copy is moved 1m along the x axis and rotated another 90 degrees.
```
modelbegin
 protobegin model1
  # model code in here
 protoend
 clumpbegin
  rotate 0 1 0 90
  protoinstance model1
  translate 1 0 0
  rotate 0 1 0 90
  protoinstance model1
 clumpend
modelend
```
