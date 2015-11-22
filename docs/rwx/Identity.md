# Identity

### Usage
    Identity 

### Description
This command sets the current transformation matrix to the identity matrix. The current transformation matrix defaults to the identity matrix if no other transformations have been specified.
The identity matrix is that matrix which, when applied to vertex, leaves the vertex unchanged, the same way that a number is unchanged when multiplied by one.

### Arguments
This command has no arguments

### Examples
This command is useful for resetting the transformations back to the origin. Each translation, rotation or scaling is cumulative, the code below shows how the transformation is reset so that translation position resets back to the origin on the third instance of the prototype model1. See the respective definition of the undefined terms in this section.
A word of warning: If multizip is used to zip and upload the model to the path, make sure that under the options - removing RWXMod stuff - is not checked. That function will remove the Identity statement, making your model literally look like it exploded.

    modelbegin
     protobegin model1
      # model code here
     protoend
     clumpbegin
       protoinstance model1
       translate 1 0 0
       protoinstance model1
       identity               # <--- reset
       translate 1 0 1
       protoinstance model1
      clumpend
     modelend
