# Surface
The Surface command is an RWX Command that sets the current surface lighting properties.
### Usage
    Surface a d s

### Description
This command sets the current surface lighting properties. All components should be specified in the range 0.0 to 1.0. It is a more convenient way to specify all the values at once, rather than multiple statements using ambient and diffuse separately.
The ambient component specifies how much the world's ambient light source "shines" on polygons. The ambient light source shines equally on all polygons in all directions. Consider the ambient light to be what gives an object the simulated shadow side brightness, away from direct light.
The diffuse component specifies how much the world's directional light source "shines" on polygons. It also specifies how much individual light sources placed within the world shine on the polygons. A light source shines more brightly on polygons facing the light source. It does not shine at all on polygons that face away from the light source. 
Currently Active Worlds does not support specular lighting, so the specular component has no effect. Specular lighting may be supported in a future version of Active Worlds. 
All objects are illuminated by the lightsource in the world. The brightness of the ambient and diffuse are set in the world options under then "Lighting" option. The options specify Ambient and Directional values and the combined effect of those settings and the ambient and diffuse settings of the model determine the final brightness of each surface. Consider it to be an additive effect. The recommended setting by AWI are to set the world values for Directional light to 255 for all colors and for Ambient light values to 128 for all colors. The models are then set to have an ambient and diffuse value of 1 for both.
In actuality virtually (no pun intended) no world owner sets their worlds to those values, so modelers have set their model lighting to varies different ambient and diffuse values to make them look good under different settings.
As a rule, setting the ambient value lower than the diffuse, will make the model look more contrasty, generally acknowledged to be better looking to the viewer, similar to what TV manufacturers strive for. The closer the diffuse is set to 1.0, the brighter the model will appear. Bear in mind that applying the same texture to models that do not have identical lighting values, will make the texture look either brighter or darker. If the ambient values don't match, then the area facing away from the world light source will now vary with world lighting, especially if a day and night illumination is used.
Multizip is an easy way to modify all the models to a different lighting value and upload the changed models to your path, all in one step.
### Arguments
*a* is the ambient lighting value to set and may be in the range of 0.0 to 1.0.
*d* is the diffuse lighting value to set and may be in the range of 0.0 to 1.0.
*s* is the specular lighting value to set, but this will currently have no effect.
### Examples
    Surface .6 .8 .15 # Sets the ambient, diffuse and specular in that order.


