# Hemisphere

### Usage
    Hemisphere r d

### Description
This command creates a hemisphere of the given dimensions in the current clump. The hemisphere is transformed by the current transformation matrix and its surface is assigned the current material.
The density controls the number of polygons used to approximate the hemisphere. It cannot be negative. A density of 0 results in a pyramid. The number of polygons varies exponentially with the density. This mesh is similar to a geodesic dome.
The radius can be either positive or negative. It cannot be zero. A negative radius creates a hemisphere that is "inside out" (i.e. only visible from the inside).

### Arguments
*r* is the radius and can be any number except 0(zero).
*d* is the density and can be 0(zero) or any positive number.

### Examples

    Hemisphere 0.05 3
This creates a hemisphere with a 1m diameter.

The example below will create a textured version of the cone above. Always have the texture command preceding the hemisphere command or you will get a textureless black dome. 

    modelbegin 
     clumpbegin
      Surface .7 .8 .15
      texture ground34
      Hemisphere 0.05 3
     clumpend 
    modelend
