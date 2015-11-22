# Cylinder

### Usage
    Cylinder h r1 r2 n

### Description
This command creates a cylinder of the given dimensions in the current clump. The cylinder is transformed by the current transformation matrix and its surface is assigned the current material.
The bottom and top radii can be either both positive or both negative. They cannot be zero. Negative radii create a cylinder that is "inside out" (i.e. only visible from the inside).

### Arguments
*h* the height of the cylinder 
*r1* the radius of the bottom of the cylinder which can be any number except 0
*r2* the radius of the top of the cylinder which can be any number except 0
*n* the number of sides of the cylinder which must be greater than 2

### Example
    cylinder 0.1 0.05 0.05 8

This gives a 1m high and 1m diameter 8 sided cylinder with the center in the middle of the object.

    cylinder 0.1 0.05 0.025 8

This gives a tapered 1m high, 1m diameter at the bottom and .5m at the top 8 sided cylinder with the center in the middle of the object.

The example below will create a textured version of the first cylinder above. Always have the texture command preceding the cylinder command or you will get a textureless black cylinder.

    modelbegin 
     clumpbegin
      Surface .7 .8 .15
      texture ground34
      cylinder 0.1 0.05 0.05 8
     clumpend 
    modelend
