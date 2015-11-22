# Color

### Usage
    Color r g b

### Description
This command sets the color of the current material.

### Arguments
*r* is the red component of the color and may be in the range of 0.0 to 1.0
*g* is the green component of the color and may be in the range of 0.0 to 1.0
*b* is the blue component of the color and may be in the range of 0.0 to 1.0

_Important_: When the model has textured surfaces, the Renderware Manual recommends that the default color should be set to color 1 1 1. This will speed up the rendering.

### Examples
    color 0.5 0.5 0.5
The color elements are in the order of rgb(red, green, blue). This combination will give a neutral gray.
    color 1 0 0 
This will give a completely red color and is equivalent to the build command 'create color red'

