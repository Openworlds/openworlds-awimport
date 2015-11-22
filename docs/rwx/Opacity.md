# Opacity

### Usage
    Opacity value

### Description
This command sets the opacity of the current material. In other words, how transparent the material is, or how much you can see through the material.

### Arguments
*value* is a range of 0.0 to 1.0.
The default value for a clump is 1.0 which is fully opaque(solid). If value is set to 0.0, you will be unable to see the object, but if collision is On, you can still bump into the object.

### Examples
    opacity 1 # totally opaque and the default for any surface.
    opacity 0 # totally invisible, useful for making collision boxes.
    opacity .5 # the object can be seen as well as seen through. Used for simulation of glass
