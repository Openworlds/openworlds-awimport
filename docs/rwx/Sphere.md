# Sphere
### Usage
    Sphere r d
### Description
This command creates a sphere of the given dimensions in the current clump. The sphere is transformed by the current transformation matrix and its surface is assigned the current material.
The density controls the number of polygons used to approximate the sphere. It cannot be negative. A density of 0 results in a cube. The number of polygons varies exponentially with the density. This structure is similar to that of a geodesic dome.
The radius can be either positive or negative. It cannot be zero. A negative radius creates a sphere that is "inside out" (i.e. only visible from the inside).
### Arguments
*r* is the radius of sphere and can be any number except 0(zero).
*d* is the density of the sphere and cane be 0(zero) or greater.
### Examples
    Sphere 0.05 3

This creates a Sphere with a 1m diameter.
The example below will create a textured version of the sphere above. Always have the texture command preceding the sphere command or you will get a textureless black sphere.
```
modelbegin 
 clumpbegin
  Surface .7 .8 .15
  texture ground34
  Sphere 0.05 3
 clumpend 
modelend
```
