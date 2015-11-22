# Cone

### Usage
    Cone h r n

### Description
This command creates a cone of the given dimensions in the current clump. The cone is transformed by the current transformation matrix and its surface is assigned the current material. 
The radius can be either positive or negative. It cannot be zero. A negative radius creates a cone that is "inside out" (i.e. only visible from the inside).

### Arguments
*h* the height of the cone
*r* the radius of the base of the cone can be any positive or negative number, except 0(zero)
*n* the number of sides of the cone which must be a number greater than 2

### Example

    cone 0.1 0.05 8

This gives a 1m high 1m diameter 8 sided cone with the center in the middle of the object.
The example below will create a textured version of the cone above. Always have the texture command preceding the cone command or you will get a textureless black cone.

    modelbegin 
     clumpbegin
      Surface .7 .8 .15
      texture ground34
      cone 0.1 0.05 8
     clumpend 
    modelend


