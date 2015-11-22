# Disc

### Usage
    Disc v r n

### Description
This command creates a disc of the given dimensions in the current clump. The disc is transformed by the current transformation matrix and its surface is assigned the current material. 
A disc is a flat (i.e. two-dimensional) circle which is often used to "cap" the ends of cones and cylinders.
The radius can be either positive or negative. It cannot be zero. A negative radius create a disc that faces downwards.
The height(v) of the disc determines how far it is displaced up the Y axis. It is usually set to zero.

### Arguments
*v* is the vertical displacement of the disc 
*r* is the radius of the disc which can be any number except 0(zero)
*n* is the number of sides of the disc which must be greater than 2

### Example
    disc 0.1 0.05 8
This gives a disk 1m in diameter and 8 sides with a displacement from the ground of 1m

The example below will create a textured version of the disc above. Always have the texture command preceding the disc command or you will get a textureless black disc.

    modelbegin 
     clumpbegin
      Surface .7 .8 .15
      texture ground34
      disc 0.1 0.05 8
     clumpend 
    modelend
